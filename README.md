# Héctor Corbellini's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS to showcase my skills, projects, and experience as an AI fullstack developer specialized in Clean Code and Clean Architecture excellence.

## 🚀 Live Demo

Visit the live portfolio at [https://hc-portfolio.netlify.app](https://hc-portfolio.netlify.app)

## ✨ Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Dark/Light Mode**: Automatic theme detection with manual toggle option
- **Interactive Project Showcase**: Modal-based project details with demo functionality
- **Integrated Demo Launchers**: Run project demos directly from the portfolio
- **Contact Form**: Easy way for visitors to get in touch
- **Modern UI**: Built with Tailwind CSS for a clean, modern look

## 🛠️ Technologies Used

- **Frontend**:
  - React 18+
  - TypeScript
  - Tailwind CSS
  - Vite (for fast development and optimized builds)
  - Lucide Icons

- **Backend**:
  - Express.js (for handling project demo launches)
  - Node.js

## 📁 Project Structure

```
/
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   │   ├── About/      # About section components
│   │   ├── Contact/    # Contact section components
│   │   ├── Home/       # Home/hero section components
│   │   ├── Layout/     # Layout components (navbar, footer)
│   │   ├── Projects/   # Project showcase components
│   │   └── Skills/     # Skills section components
│   ├── data/           # Data files for projects, skills, etc.
│   ├── types/          # TypeScript type definitions
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── server.js           # Express server for handling project demos
└── tailwind.config.js  # Tailwind CSS configuration
```

## 🔧 Project Demo Functionality

This portfolio showcases several interactive projects with demo capabilities:

1. **Caesar Cipher**: A Java-based encryption tool with a Swing GUI interface that demonstrates encryption/decryption using the Caesar cipher method
2. **Ecosystem Simulation**: A Java simulation of an ecosystem with various species that visualizes population dynamics
3. **Code Processor**: A Python-based code analysis and processing tool for examining and transforming source code

The demo functionality is implemented through an Express backend that executes the appropriate files when the "Launch Demo" button is clicked. When running locally, this allows direct launching of applications from the portfolio interface.

Note: The demo functionality works best when running the portfolio locally with both the frontend and backend servers active.

## 🚀 Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/HectorCorbellini/codefolio-hub.git
   cd codefolio-hub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   node server.js
   ```

4. In a separate terminal, start the frontend development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to http://localhost:5173

## 📦 Building for Production

```bash
npm run build
```

This will generate optimized files in the `dist` directory ready for deployment.

## 🌐 Netlify Deployment

This portfolio is deployed on Netlify with the following configuration:

- **Production URL**: [https://hc-portfolio.netlify.app](https://hc-portfolio.netlify.app)
- **GitHub Repository**: [https://github.com/HectorCorbellini/codefolio-hub](https://github.com/HectorCorbellini/codefolio-hub)
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

The site is configured for continuous deployment through Netlify's GitHub integration. Any push to the main branch of the GitHub repository will automatically trigger a new build and deployment.

### Setting Up Netlify Deployment

To deploy this portfolio on Netlify, follow these steps:

1. **Prepare Your Project**:
   ```bash
   # Build the project
   npm run build
   
   # Create a _redirects file for proper routing
   echo "/*    /index.html   200" > dist/_redirects
   ```

2. **Deploy Using Netlify CLI**:
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Login to Netlify
   netlify login
   
   # Initialize and link to an existing site (if applicable)
   netlify link --id YOUR_SITE_ID
   
   # Deploy to production
   netlify deploy --prod --dir=dist
   ```

3. **Alternative: Deploy via Netlify Dashboard**:
   - Go to [app.netlify.com](https://app.netlify.com)
   - Sign up or log in
   - Drag and drop your `dist` folder to deploy
   - Or connect to your GitHub repository for continuous deployment

4. **Configure for Single-Page Application**:
   - Add a `_redirects` file in your `dist` directory with:
     ```
     /*    /index.html   200
     ```
   - This ensures proper routing for a React single-page application

5. **Environment Variables** (if needed):
   - Set any required environment variables in the Netlify dashboard under Site settings > Build & deploy > Environment

## 📞 Contact

- Email: corbellini.personal@gmail.com
- Phone: +598 91633183
- Location: Montevideo, Uruguay

## 📄 License

This project is open source and available under the MIT License.
