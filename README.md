# Chinook Curiosity Central - Next.js Version

A modernized Next.js version of the Chinook Curiosity Central website, maintaining the original UI with Bootstrap and custom CSS.

## Features

- **Server-Side & Client-Side Components**: Optimized React architecture with proper component separation
- **Responsive Design**: Bootstrap 5.3.3 for modern responsive layouts
- **Smooth Animations**: Intersection Observer-based scroll animations
- **Multi-page Application**: Home, Events, and Team pages with dynamic routing
- **Interactive Modals**: Modal dialogs for event details and team member information

## Tech Stack

- **Framework**: Next.js 16.1.0
- **Frontend**: React 19.2.3
- **Styling**: Bootstrap 5.3.3 + Custom CSS
- **Package Manager**: npm

## Project Structure

```
ccc-next/
├── app/
│   ├── layout.js              # Root layout with global imports
│   ├── page.js                # Home page
│   ├── events/
│   │   └── page.js            # Events page with modals
│   ├── team/
│   │   └── page.js            # Team page with member modals
│   └── styles/
│       ├── universal.css       # Global styles
│       ├── index.css           # Home page styles
│       ├── events.css          # Events page styles
│       └── team.css            # Team page styles
├── components/
│   ├── Navbar.js              # Navigation component
│   ├── Footer.js              # Footer component
│   └── ScrollAnimations.js     # Scroll animation handler
├── public/
│   └── static/                # Static assets (images, fonts, etc.)
└── [config files]
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
cd ccc-next
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Pages

### Home (`/`)
- Welcome section with CCC mission statement
- "Why Curiosity?" definition section
- Upcoming events promotion
- Termite Overmind Podcast embed
- Past events showcase

### Events (`/events`)
- Current upcoming events with detailed information
- Event timeline/schedule
- Past events archive with modal details
- Event registration links

### Team (`/team`)
- Team introduction and philosophy
- Team member cards with clickable modals
- Member bios and roles
- Executive team showcase

## Styling

The site uses a combination of:

1. **Bootstrap 5.3.3**: Base framework for responsive layouts and components
2. **Custom CSS**: Located in `/app/styles/` for page-specific styling
3. **Global Styles**: Universal CSS for animations and common patterns

## Key Components

### Navbar
Client-side navigation with responsive mobile menu toggle and external social links.

### Footer
Consistent footer across all pages with links to social media and important resources.

### ScrollAnimations
React hook that implements intersection observer-based animations for elements with:
- `.fade-target` - Fading animation
- `.slide-target` - Sliding animation  
- `.spin-target` - Spinning animation

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The Next.js app can be deployed to any Node.js hosting:
- AWS
- DigitalOcean
- Heroku
- Custom VPS

## License

© 2024 Chinook Curiosity Central. All rights reserved.

## Contributing

For contributions or questions, reach out via:
- Discord: [Join our server](https://discord.gg/SQZnnMtz9B)
- Instagram: [@chinook_curiosity_central](https://www.instagram.com/chinook_curiosity_central/)

---

**Built with React, Next.js, and Bootstrap** ✨
