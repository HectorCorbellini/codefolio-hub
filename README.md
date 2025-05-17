# Héctor Corbellini's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS to showcase my skills, projects, and experience as an AI fullstack developer.

## 🚀 Live Demo

Visit the live portfolio at [https://codefolio-hub-main-52gud7zc2-hector-corbellinis-projects.vercel.app](https://codefolio-hub-main-52gud7zc2-hector-corbellinis-projects.vercel.app)

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

This portfolio includes functionality to launch demos of featured projects:

1. **Caesar Cipher**: A Java-based encryption tool with a Swing GUI interface
2. **Ecosystem Simulation**: A Java simulation of an ecosystem with various species
3. **Code Processor**: A Python-based code analysis and processing tool

The demos are launched through an Express backend that executes the appropriate files when the "Launch Demo" button is clicked.

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

## 🌐 Deployment

This portfolio is deployed on Vercel with GitHub integration for continuous deployment. Any push to the main branch triggers a new build and deployment.

## 📞 Contact

- Email: corbellini.personal@gmail.com
- Phone: +598 91633183
- Location: Montevideo, Uruguay

## 📄 License

This project is open source and available under the MIT License.
