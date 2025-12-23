# Cyprus History - Кипр. История

A beautiful, interactive website exploring the rich history of Cyprus through immersive content, interactive maps, and multimedia presentations.

## Features

- **Multi-language Support**: Full support for Russian, English, and Greek languages
- **Interactive Maps**: Explore historical locations with Leaflet.js integration
- **Rich Content**: Detailed articles about Cyprus history across different periods
- **Video Content**: Three types of video materials - Short Stories, Video Briefs, and Deep Dive Podcasts
- **Responsive Design**: Beautiful UI inspired by Google Arts & Culture
- **Period Filtering**: Browse content by historical periods

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Maps**: Leaflet.js & React-Leaflet
- **Fonts**: Playfair Display (headings), Inter (body text)

## Project Structure

```
cyprus-history/
├── app/
│   ├── layout.tsx              # Root layout with language provider
│   ├── page.tsx                # Home page with theme cards
│   ├── theme/[slug]/
│   │   └── page.tsx            # Dynamic theme page
│   └── globals.css             # Global styles
├── components/
│   ├── Header.tsx              # Site header with language switcher
│   ├── LanguageSwitcher.tsx    # RU/ENG/GR switcher
│   ├── ThemeCard.tsx           # Theme preview card
│   ├── PeriodFilter.tsx        # Period filter chips
│   ├── ThemeNavigation.tsx     # Chapter navigation
│   ├── VideoPreview.tsx        # Video content section
│   ├── MapSection.tsx          # Interactive Leaflet map
│   └── ArticleContent.tsx      # Article display component
├── data/
│   ├── themes.ts               # Theme data structure
│   ├── translations.ts         # UI translations
│   ├── types.ts                # TypeScript interfaces
│   └── content/
│       └── ancient-myths.ts    # Full content for Ancient Myths theme
├── lib/
│   └── LanguageContext.tsx     # Language context provider
└── public/
    ├── videos/                 # Video files
    └── images/                 # Image assets
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Featured Content

### Ancient Myths of Cyprus

The fully implemented theme includes:

1. **Birth of Aphrodite** - The legend of the goddess emerging from sea foam at Petra tou Romiou
2. **Sanctuary of Aphrodite** - The sacred city of Paphos and its ancient temple
3. **Adonis: Love, Death and Rebirth** - The tragic love story and seasonal myth
4. **Cinyras** - The priest-king and his dynasty
5. **Amathus** - City of ancient cults and unique traditions
6. **Heroes and the Sea** - Legendary seafarers and their Cyprus connections

Each chapter includes:
- Rich historical content in three languages
- High-quality images
- Interactive map markers
- Links to relevant locations

## Design Philosophy

The design is inspired by Google Arts & Culture, featuring:

- **Clean Typography**: Playfair Display for elegance, Inter for readability
- **Large Visual Cards**: Immersive image-driven navigation
- **Smooth Transitions**: Subtle animations and hover effects
- **Minimalist Palette**: White backgrounds with accent colors
- **Content-First**: Focus on historical narratives and visual storytelling

## Historical Periods

The site covers nine distinct periods of Cyprus history:

1. Mythology and Prehistoric Cyprus
2. Antiquity
3. Byzantine Period
4. Lusignan Period
5. Venetian Period
6. Ottoman Period
7. British Period
8. Modern History (20th Century)
9. 21st Century

## Video Content

Three types of multimedia content:

- **Short Stories**: Brief historical narratives (3-5 minutes)
- **Video Briefs**: Comprehensive overviews (15-20 minutes)
- **Deep Dive Podcasts**: In-depth explorations (45-60 minutes)

## Map Integration

Interactive maps powered by Leaflet.js show:
- Historical locations
- Archaeological sites
- Points of mythological significance
- Cultural landmarks

Users can click "on map" links in articles to navigate directly to relevant locations.

## Future Enhancements

- Additional themed content for all historical periods
- User accounts and favorites
- Audio guides
- Virtual tours
- Educational quizzes
- Timeline visualizations

## License

This project is created for educational and cultural purposes.

## Acknowledgments

- Images from Unsplash
- Map data from OpenStreetMap
- Historical content researched from academic sources
