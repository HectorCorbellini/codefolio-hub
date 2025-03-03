# CodeFolio Hub - Java Developer Portfolio

## Project Overview

**Live Demo**: [CodeFolio Hub on GitHub Pages](https://hectorcorbellini.github.io/codefolio-hub/)

**GitHub Repository**: [https://github.com/HectorCorbellini/codefolio-hub](https://github.com/HectorCorbellini/codefolio-hub)

CodeFolio Hub is a modern, responsive portfolio website designed to showcase a Java developer's skills, projects, and professional experience. The site features a clean, professional design with dedicated sections for different types of projects and exercises.

## Important Documentation

This repository includes additional documentation that is crucial for maintaining and understanding the project:

- [**MAINTENANCE.md**](./MAINTENANCE.md) - Detailed instructions for maintaining, updating, and deploying the portfolio. **Read this before making changes!**
- [**HISTORY_NOTE.md**](./HISTORY_NOTE.md) - Development history, challenges faced, and lessons learned to prevent recurring issues.
- [**COMPONENTS.md**](./COMPONENTS.md) - Comprehensive documentation of the component architecture, props, state management, and component relationships.

## Technology Stack

This project is built with modern web technologies:

- **React** - Frontend library for building user interfaces
- **TypeScript** - Typed JavaScript for better developer experience
- **Vite** - Fast, modern frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable UI components
- **React Router** - For navigation and routing
- **React Query** - Data fetching and state management

## Getting Started

### Development Requirements
- Node.js v16.x or higher (specified in `.nvmrc`)
- npm v7.x or higher
- Git v2.x or higher

### Quick Start for New Developers
1. Clone the repository
2. If using nvm, run `nvm use` to switch to the correct Node.js version
3. Install dependencies with `npm install`
4. Start development server with `npm run dev`
5. Visit http://localhost:8080 in your browser

### Development Environment

```sh
# Clone the repository
git clone https://github.com/HectorCorbellini/codefolio-hub.git

# Navigate to the project directory
cd codefolio-hub

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Local Development Path

The current local development path for this project is:
```
/home/uko/CascadeProjects/codefolio-hub_PORTFOLIO/codefolio-hub-main
```

> **Note**: This path is specific to the current maintainer's environment. You should use your own local development path.

### Build for Production

```sh
# Generate production build
npm run build

# Preview production build locally
npm run preview
```

## Deployment Options

### Currently Deployed On
- **GitHub Pages** - The site is currently deployed on GitHub Pages

### Alternative Deployment Options

#### Netlify
```sh
# Install Netlify CLI
npm install -g netlify-cli

# Deploy to Netlify
netlify deploy --dir=dist
```

#### GitHub Pages (Current Method)
```sh
# Already configured in package.json:
# "scripts": { 
#   "predeploy": "npm run build",
#   "deploy": "gh-pages -d dist" 
# }

# Deploy to GitHub Pages (builds automatically)
npm run deploy
```

#### Cloudflare Pages
```sh
# Install Wrangler (Cloudflare CLI)
npm install -g wrangler

# Deploy to Cloudflare Pages
wrangler pages deploy dist
```

## Project Structure

- `/src` - Source code
  - `/components` - Reusable UI components
  - `/pages` - Page components
  - `/hooks` - Custom React hooks
  - `/lib` - Utilities and configuration
- `vite.config.ts` - Build configuration with cache-busting enabled
- `public/404.html` - Redirect script for client-side routing on GitHub Pages

## Features

- Responsive design for all device sizes
- Clean, modern UI with subtle animations and transitions
- Project categorization by type (Java Exercises, Business Projects, etc.)
- Detailed project cards with tags and descriptions
- Video demonstrations section (renamed to "Watch")
- Enhanced cache control for better browser performance
- Optimized for speed and performance

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Maintenance and Automation

### Deployment Script

For quick deployment, you can use the included npm script:

```sh
npm run deploy
```

This script automatically builds the project and deploys it to GitHub Pages.

### GitHub Sync Tool

To avoid GitHub synchronization issues, use the included GitHub sync script:

```sh
npm run github:sync
```

This interactive script simplifies GitHub operations by:
- Adding and committing all changes
- Creating a new branch if needed (recommended)
- Handling push conflicts with optional force push
- Optionally deploying to GitHub Pages

### Git Workflow

For consistent collaboration, follow this Git workflow:

1. Create feature branches from main: `git checkout -b feature/your-feature-name`
2. Make changes and test locally
3. Use `npm run github:sync` to commit and push changes
4. Create a pull request to merge into main

**Recommended Workflow**: Always use the GitHub sync script instead of manual Git commands to avoid repository conflicts.

**Important**: As detailed in [MAINTENANCE.md](./MAINTENANCE.md), only deploy after significant successful changes or when you specifically want to update the live site. Avoid frequent small deployments to prevent potential issues.

## Known Issues and Solutions

### Background Color

There is a known issue with the light green background color not appearing on GitHub Pages. This occurs because CSS variables may not be properly applied in some deployment environments.

**Current Workarounds**:
1. Direct HTML/Body styling has been added to `src/index.css`
2. Cache control headers have been implemented

**For Users**:
- If you see a white background instead of light green, try hard-refreshing your browser (Ctrl+F5 or Cmd+Shift+R)
- Try viewing the site in an incognito/private window

See [MAINTENANCE.md](./MAINTENANCE.md#background-color-issue) for detailed technical solutions.

## Cache Control Improvements

This project implements several techniques to prevent browser caching issues:

1. **Cache Control Meta Tags**: 
   ```html
   <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
   <meta http-equiv="Pragma" content="no-cache" />
   <meta http-equiv="Expires" content="0" />
   ```

2. **Filename Hashing**: The build process adds timestamps to all generated assets to ensure browsers always load the latest versions.

3. **SPA Routing Support**: A special 404.html page handles client-side routing for GitHub Pages deployment.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
