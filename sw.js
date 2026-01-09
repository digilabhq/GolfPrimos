// Golf Primos Service Worker v1.0.2 - iOS/PWA-friendly update behavior
//
// Changes vs v1.0.1 (sw.js):
// - Precache ONLY same-origin core files (avoid install failures from cross-origin/CDN requests).
// - Navigation (HTML) uses Network-First so updated app shell is fetched when online.
// - Only cache GET requests.
// - Runtime-cache other requests with Stale-While-Revalidate.
// - Accept both message formats: {action:'skipWaiting'} and {type:'SKIP_WAITING'}.

const SW_VERSION = '1.0.2';
const CACHE_PREFIX = 'golf-primos-';
const CACHE_NAME = `${CACHE_PREFIX}v${SW_VERSION}`;

// Keep this list strictly same-origin.
// (If your repo has an /icons/ folder, you can add those files here too.)
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      // If any CORE_ASSETS item fails, installation can fail. Keep this list tight.
      await cache.addAll(CORE_ASSETS);
      await self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((k) => k.startsWith(CACHE_PREFIX) && k !== CACHE_NAME)
          .map((k) => caches.delete(k))
      );
      await self.clients.claim();
    })()
  );
});

// Helpers
const isNavigationRequest = (request) => request.mode === 'navigate';

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    // Only cache successful basic/opaque responses for GET.
    if (response && (response.type === 'basic' || response.type === 'opaque') && response.status !== 206) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    // For navigations, fall back to the cached app shell.
    const cached = await caches.match(request);
    return cached || caches.match('./index.html');
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  const fetchPromise = fetch(request)
    .then((response) => {
      if (response && (response.type === 'basic' || response.type === 'opaque')) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);

  return cached || (await fetchPromise) || cached;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET; avoid breaking POST/PUT/etc.
  if (request.method !== 'GET') return;

  // Always try to refresh the app shell when the user opens the PWA.
  if (isNavigationRequest(request)) {
    event.respondWith(networkFirst(request));
    return;
  }

  // For other assets, serve cached immediately and update in background.
  event.respondWith(staleWhileRevalidate(request));
});

self.addEventListener('message', (event) => {
  const data = event.data;
  if (!data) return;

  if (data.action === 'skipWaiting' || data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
