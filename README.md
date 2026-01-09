# ⛳ Golf Primos Handicap Tracker

**Version 1.0.0**

A mobile-first Progressive Web App for tracking golf handicaps and scores for your crew.

## Features

- 🏆 Real-time leaderboard with Top Dawg and DAL badges
- 🏌️ Track unlimited players (Primos)
- 📊 Automatic handicap calculation (best 8 of last 10 rounds)
- 📸 Share landscape screenshots
- ⚙️ Customizable settings (Flounderstown threshold, average cap)
- 🔄 Auto-updates via service worker
- 💾 Export/import data
- ✏️ Edit scores by tapping them
- 📱 Add to home screen (PWA)

## Quick Start

1. Clone this repository
2. Open `index.html` in your browser

OR deploy to GitHub Pages and access from anywhere!

## How It Works

**Handicap Calculation:**
- Takes last 10 rounds
- Averages the best 8 scores
- Updates automatically

**Average vs Handicap:**
- **Handicap**: Best 8 of 10 (your potential)
- **Average**: All 10 scores (your typical performance)

## Deployment

Push to GitHub and enable GitHub Pages. The service worker will handle automatic updates for all users.

## Files

- `index.html` - Main application
- `sw.js` - Service worker for PWA updates
- `manifest.json` - PWA configuration
- `.gitignore` - Git exclusions

## License

MIT License - Free to use and modify
