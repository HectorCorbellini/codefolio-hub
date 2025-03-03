# CodeFolio Hub Maintenance Guide

This document provides detailed instructions for maintaining, updating, and deploying the CodeFolio Hub portfolio website.

## Table of Contents
- [Development Environment](#development-environment)
- [Making Changes](#making-changes)
- [Testing Changes](#testing-changes)
- [Deployment Process](#deployment-process)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## Development Environment

### Local Setup

The project is currently set up in the following local directory:
```
/home/uko/CascadeProjects/codefolio-hub_PORTFOLIO/codefolio-hub-main
```

### Required Tools

- Node.js (v16 or higher)
- npm (v7 or higher)
- Git

### Starting Development Server

To start the development server:

```sh
cd /home/uko/CascadeProjects/codefolio-hub_PORTFOLIO/codefolio-hub-main
npm run dev
```

This will start a local development server at `http://localhost:8080`.

## Making Changes

### Code Structure

- **Components**: Located in `/src/components`
- **Pages**: Located in `/src/pages`
- **Styles**: Global styles in `/src/index.css`, component-specific styles within component files
- **Assets**: Images and other static assets in `/public`

### Common Changes

#### Updating Content

1. **Project Information**: Edit the project cards in `/src/pages/Index.tsx`
2. **Section Titles/Descriptions**: Update section headings and descriptions in the same file
3. **Navigation Items**: Modify menu items in `/src/components/Navbar.tsx`

#### Styling Changes

1. **Global Colors**: Update color variables in `/src/index.css`
2. **Component Styling**: Each component has its own styling using Tailwind CSS classes

## Testing Changes

Always test your changes locally before deploying:

1. Run the development server: `npm run dev`
2. Check all pages and interactions
3. Test on different screen sizes using browser developer tools
4. Verify that all links work correctly

## Deployment Process

### When to Deploy

**Important**: Only deploy after significant successful changes or when you specifically want to update the live site. Avoid frequent small deployments to prevent potential issues.

### GitHub Sync Tool

To simplify GitHub operations and avoid common issues, use the included GitHub sync script:

```sh
# Run the GitHub sync script
npm run github:sync
```

This interactive script will:
1. Add and commit all your changes
2. Optionally create a new branch (recommended to avoid conflicts)
3. Push changes to GitHub, with an option for force push if needed
4. Optionally deploy to GitHub Pages

Using this script helps avoid common Git issues and ensures a smooth workflow.

### Deployment Steps

1. Make sure all changes are working correctly locally
2. Run the deployment script:
   ```sh
   npm run deploy
   ```
3. This script will:
   - Build the project (`npm run build`)
   - Deploy to GitHub Pages (using the `gh-pages` branch)

4. After deployment, verify the changes on the live site:
   [https://hectorcorbellini.github.io/codefolio-hub/](https://hectorcorbellini.github.io/codefolio-hub/)

### Handling Deployment Issues

If you encounter issues during deployment:

1. Check the console output for error messages
2. Verify that your GitHub authentication is working correctly
3. Try clearing the local build cache: `rm -rf dist`
4. Rebuild and redeploy

## Best Practices

1. **Version Control**:
   - Make meaningful commits with clear messages
   - Only push to GitHub after significant changes or when ready to deploy

2. **Code Organization**:
   - Keep components small and focused
   - Use consistent naming conventions
   - Document complex logic with comments

3. **Performance**:
   - Optimize images before adding them
   - Keep dependencies to a minimum
   - Use code splitting for larger components

4. **Browser Compatibility**:
   - Test on multiple browsers
   - Use polyfills when necessary

## Troubleshooting

### Common Issues

#### Cache-Related Issues

If changes don't appear after deployment:
1. Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
2. Try in an incognito/private window
3. Verify the deployment completed successfully

#### CSS Issues

If styling doesn't appear correctly:
1. Check for CSS syntax errors
2. Verify that Tailwind classes are being applied
3. Inspect elements using browser developer tools

#### GitHub Pages Issues

If GitHub Pages deployment fails:
1. Check GitHub repository settings
2. Verify that the `gh-pages` branch exists and has content
3. Check GitHub Actions for any error logs

## Contact

For questions or assistance, please contact the repository owner or submit an issue on GitHub.
