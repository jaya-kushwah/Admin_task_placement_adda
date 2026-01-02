# Placement Adda - React + JavaScript + Vite

A modern React application converted from TypeScript to JavaScript, featuring a landing page for a tech training institute.

## Features

- **React 19.2.0** with React Compiler enabled
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Responsive Design** with mobile-first approach
- **Custom Components** including animated border beams
- **Light Mode Only** (no theme switching)

## Project Structure

```
src/
├── components/
│   └── ui/
│       └── border-beam-2.jsx    # Animated border component
├── sections/
│   └── landingpage/
│       └── Home.jsx             # Main landing page component
├── utils/
│   └── LocalImages.js           # Image path constants
├── App.jsx                      # Main app component
├── main.jsx                     # Entry point
└── index.css                    # Global styles with Tailwind
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Components

### Home Section
- Course highlights and pricing
- Countdown timer
- Registration call-to-action
- Responsive grid layout

### BorderBeam2
- Animated rotating border effect
- Customizable color and duration
- CSS-based animation

## Styling

The project uses Tailwind CSS with custom utility classes for:
- Font sizes (font-12 to font-56)
- Custom colors (primary, title, sub-heading)
- Background gradients
- Animation keyframes

## Images

Place your images in the `public/image/` directory:
- `public/image/png/` - PNG images
- `public/image/svg/` - SVG icons

Current placeholder images are included for development.
