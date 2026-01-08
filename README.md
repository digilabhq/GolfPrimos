# ⛳ GOLF PRIMOS HANDICAP TRACKER v2.0

A professional, interactive handicap tracking app built specifically for the Golf Primos crew!

## 🎯 What's New in v2.0

### ✨ Major Updates

**Tab Organization**
- **🏆 Leaderboard** - Excel-style chart with rankings and Flounders Line
- **🏌️ Primos** - Individual primo management with per-primo scoring
- **⚙️ Settings** - Configuration and data management

**Individual Primo Scoring**
- Each primo can add their own scores independently
- No need for everyone to play the same round
- Add score button on each primo's card
- Track course name per score

**Last 10 Rounds Display**
- Leaderboard shows only the last 10 rounds (R-10 to R-1)
- Keeps the view clean and focused on recent performance
- Handicap still calculated from best 8 of last 10

## 📱 Tab Guide

### 🏌️ Primos Tab
Individual primo management:
- **All Members Listed**: Alphabetically sorted
- **Primo Info**: Current handicap, total rounds, last score
- **Actions per Primo**:
  - ➕ **Add Score** - Add a score for this specific primo
  - 📊 **View Scores** - See last 10 scores
  - ✏️ **Edit** - Change primo name
  - 🗑️ **Delete** - Remove primo

**Adding Scores (Per Primo)**
1. Go to Primos tab
2. Click "Add Score" on any primo's card
3. Enter score and course name (optional)
4. Click "Save Scores"
5. Handicap recalculates automatically!

### 🏆 Leaderboard Tab
Excel-style chart view:
- **Rankings**: #1 to #16 sorted by handicap
- **Last 10 Rounds**: R-10 through R-1 columns
- **Flounders Line**: Red separator between primos above/below the line
- **Special Badges**: 
  - 👑 Crown for DAL (lowest handicap)
  - 🐕 Dog for Top Dawg (highest handicap)
- **Stats**: Handicap and Average columns
- **Adjustable**: Change Flounders Line cutoff
- **Sticky Headers**: Primo names and headers stay visible while scrolling

### ⚙️ Settings Tab
Configuration and management:
- **Data Management**: Export, Import, Clear All Data
- **Round Settings**: Adjust Flounders Line handicap
- **About**: Version and feature info

## 🎮 How to Use

### Quick Start
1. Open `golf-primos.html` in any web browser
2. The app comes pre-loaded with your current team data!
3. Navigate using the tabs at the top
4. Add scores individually per primo in the Primos tab

### Adding New Members
1. Go to Dashboard or Primos tab
2. Click "➕ Add New Member"
3. Enter name and initial handicap
4. Click "Add Primo"

### Recording Scores (Individual)
1. Go to **🏌️ Primos** tab
2. Find the primo who played
3. Click their **"➕ Add Score"** button
4. Enter their score and course name
5. Click "Save Scores"
6. Their handicap updates automatically!

**Example Workflow:**
- Monday: DAL plays, adds his score (115)
- Wednesday: XV and XII play together, each adds their score
- Friday: Top Dawg plays, adds his score (92)
- Weekend: Check Leaderboard to see updated rankings!

### Viewing the Leaderboard
1. Go to **🏆 Leaderboard** tab
2. See all primos ranked by handicap
3. Last 10 rounds visible for each primo
4. Flounders Line automatically appears between primos

### Adjusting Flounders Line
1. Go to **🏆 Leaderboard** tab or **⚙️ Settings** tab
2. Change the "Flounders Line" number
3. Line automatically moves in the leaderboard

## 🎨 Design Features

### JustStep-Inspired Layout
- **Tab Navigation**: Smooth switching between views
- **Card Design**: Clean, modern stat cards
- **Dark Theme**: Professional #1a1a1a background
- **Consistent Styling**: Matches JustStep's aesthetic

### Excel Chart View
- **Last 10 Rounds Only**: R-10 to R-1 columns
- **Sticky Headers**: Primo names stay visible when scrolling
- **Color Coding**: 
  - Gold for handicap column
  - Blue for average column
  - Red for Flounders Line
- **Rankings**: #1, #2, #3... down the list

### Color Scheme
- **Primary Green**: #0f5132 (golf course)
- **Gold Accents**: #d4af37 (trophy)
- **Red Flounders**: #dc3545
- **Dark Background**: #1a1a1a
- **Card Background**: #2d2d2d

## 💾 Data Storage

### Local Storage
- All data saved in browser's localStorage
- Survives page refreshes
- Private to your device
- Key: `golfPrimosData`

### Export/Import
- **Export**: Download JSON backup file
- **Import**: Restore from backup file
- **Share**: Send JSON file to other members
- **Backup**: Regular exports recommended

### Data Structure
```json
{
  "primos": [
    {
      "id": "unique_id",
      "name": "Primo Name",
      "handicap": 110,
      "scores": [115, 112, 118, ...],
      "roundsPlayed": 10
    }
  ],
  "courses": ["Pine Valley", "Augusta National", ...],
  "settings": {
    "floundersLine": 105,
    "currentRound": 25
  }
}
```

## 📊 Handicap Calculation

Uses **World Handicap System** simplified method:
1. Takes last 10 rounds played
2. Selects best 8 scores
3. Calculates average
4. Rounds to nearest whole number

**Example:**
- Last 10 scores: 115, 118, 112, 120, 110, 114, 116, 108, 119, 113
- Best 8: 108, 110, 112, 113, 114, 115, 116, 118
- Average: (108+110+112+113+114+115+116+118) / 8 = 113.25
- Handicap: **113**

## 🔄 Key Differences from v1.0

| Feature | v1.0 | v2.0 |
|---------|------|------|
| **Scoring** | All primos at once | Individual per primo |
| **Rounds Display** | All rounds | Last 10 only |
| **Layout** | Single page | Tabbed navigation |
| **Primo Management** | One section | Dedicated Primos tab |
| **Leaderboard** | Cards view | Excel-style chart |
| **Course Tracking** | Yes | Yes, per score |

## 🎯 Key Features

### ✅ Your Requirements
- **Flounders Line** - Red separator at customizable handicap
- **DAL Badge** - 👑 Crown on leaderboard
- **Top Dawg Badge** - 🐕 Dog on leaderboard
- **15+ Members** - Unlimited primos supported
- **Round Tracking** - Individual per primo
- **Course History** - Growing list with autocomplete
- **GOLF PRIMOS Branding** - Custom header and theme

### 🚀 Advanced Features
- **JustStep Layout** - Tab navigation, clean cards
- **Individual Scoring** - Each primo adds their own scores
- **Last 10 Rounds** - Focused view on recent play
- **Excel Chart** - Familiar spreadsheet format
- **Mobile Responsive** - Perfect on all devices
- **PWA Ready** - Add to home screen
- **Auto Calculations** - Handicaps update instantly

## 📱 Adding to Home Screen

**iPhone/iPad:**
1. Open in Safari
2. Tap Share button
3. Select "Add to Home Screen"
4. Tap "Add"

**Android:**
1. Open in Chrome
2. Tap menu (three dots)
3. Select "Add to Home Screen"
4. Tap "Add"

## 🛠️ Technical Details

### Built With
- Pure HTML5, CSS3, JavaScript
- No external dependencies
- Progressive Web App ready
- Fully responsive design
- localStorage for persistence

### Browser Compatibility
- ✅ Chrome/Edge (recommended)
- ✅ Safari
- ✅ Firefox  
- ✅ Mobile browsers

### Performance
- Instant load times
- Smooth tab transitions
- Efficient calculations
- Works offline

## 🎊 Usage Tips

1. **Regular Updates**: Have each primo add their score after every round
2. **Backup Often**: Export data weekly or after big tournaments
3. **Course Names**: Use consistent naming (e.g., "Pine Valley CC")
4. **Check Leaderboard**: After adding scores, view the updated rankings
5. **Flounders Line**: Adjust seasonally based on group performance

## 🆘 Troubleshooting

**Scores Not Saving?**
- Check browser allows localStorage
- Try different browser
- Export data as backup first

**Wrong Rankings?**
- Verify all scores entered correctly
- Check each primo has at least 8 rounds for accurate handicap
- Refresh the Leaderboard tab

**Tab Not Loading?**
- Click the tab button again
- Refresh the page
- Clear browser cache

**Primo Missing Rounds?**
- Only last 10 rounds display on Leaderboard
- All rounds count for handicap calculation
- View full history via Export

## 🚀 Phase 2 Roadmap

### Multi-User Features
- Cloud sync via Firebase
- Team login system
- Real-time updates
- Push notifications

### Enhanced Stats
- Score trends over time
- Course-specific statistics
- Primo vs primo head-to-head
- Best/worst round tracking

### Social Features
- Comments on rounds
- Photo uploads
- Team chat
- Achievement badges

## 📝 Quick Reference

| Action | Location | Button |
|--------|----------|--------|
| Add New Member | Dashboard or Primos | ➕ Add Member |
| Add Score for Primo | Primos | ➕ Add Score (on primo card) |
| View Rankings | Leaderboard | (automatic) |
| View Primo Scores | Primos | 📊 button |
| Edit Primo Name | Primos | ✏️ button |
| Remove Primo | Primos | 🗑️ button |
| Export Data | Dashboard or Settings | 📤 Export |
| Import Data | Dashboard or Settings | 📥 Import |
| Change Flounders Line | Leaderboard or Settings | Input field |

## 🎯 Perfect For

- Weekly golf leagues
- Tournament tracking
- Casual golf groups
- Handicap management
- Team competitions
- Social golf clubs

---

**Built with ❤️ for Golf Primos**

*"Every great round deserves accurate tracking!"*

**Version 2.0** - Individual primo scoring, JustStep layout, Last 10 rounds display
