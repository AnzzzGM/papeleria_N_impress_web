# N-Impress Stationery Website

A modern, responsive React web application for N-Impress Stationery, showcasing premium stationery products and services with a focus on creativity and productivity.

## 🚀 Features

### Core Functionality
- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Theme Switching**: Light and dark mode toggle with persistent user preferences
- **Navigation**: Fixed navigation bar with mobile hamburger menu
- **Routing**: Client-side routing with React Router for smooth page transitions

### Pages & Sections
- **Home/Landing**: Hero section, featured products showcase, and call-to-action areas
- **Products**: Comprehensive product catalog with pricing and descriptions
- **Services**: Service offerings including printing, bulk orders, and consultations
- **About Us**: Company story, mission, core values, and team member profiles
- **Contact**: Contact form with validation and business details

### Technical Features
- **Performance Optimized**: Lazy loading for page components and React.memo for component optimization
- **Form Validation**: Client-side validation with real-time error feedback
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Modern UI**: Styled with styled-components and smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 18 with Hooks
- **Routing**: React Router DOM
- **Styling**: styled-components with theme support
- **Build Tool**: Create React App
- **State Management**: React Context API
- **Icons**: Emoji-based icons for lightweight design

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/papeleria-n-impress-web.git
   cd papeleria-n-impress-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```
   This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── NavBar.js       # Navigation component
├── contexts/           # React Context providers
│   └── ThemeContext.js # Theme management
├── hooks/             # Custom React hooks
│   └── useTheme.js    # Theme hook
├── pages/             # Page components
│   ├── Landing.js     # Home page
│   ├── Products.js    # Products catalog
│   ├── Services.js    # Services page
│   ├── AboutUs.js     # About page
│   └── Contact.js     # Contact page
├── styles/            # Styling and themes
│   └── themes.js      # Theme definitions
├── App.js             # Main app component
├── App.css            # App-specific styles
├── index.js           # App entry point
└── index.css          # Global styles
```

## 🎨 Theme System

The application supports two themes:
- **Light Theme**: Bright, vibrant colors for daytime use
- **Dark Theme**: Muted colors for low-light environments

Theme preferences are automatically saved to localStorage and persist across browser sessions.

## 📱 Responsive Design

- **Desktop**: Full layout with side-by-side sections
- **Tablet**: Adjusted grid layouts and font sizes
- **Mobile**: Stacked layouts, hamburger menu, and touch-friendly interactions

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run tests (if implemented)
- `npm run eject` - Eject from Create React App (not recommended)

## 🌐 Deployment

The built application can be deployed to any static hosting service:

1. Build the project: `npm run build`
2. Deploy the `build` folder contents to your hosting provider
3. Configure the hosting to serve `index.html` for all routes (SPA routing)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to N-Impress Stationery.

## 📞 Contact

For questions or support, please contact:
- Email: info@n-impress.com
- Phone: +1 (809) 123-4567
- Address: 123 Main Street, Santo Domingo, Dominican Republic
