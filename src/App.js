/**
 * Main App component for the N-Impress website.
 *
 * This component serves as the root of the application, providing routing,
 * theming, and layout structure. It uses React Router for navigation between
 * different pages and wraps the entire app with a ThemeProvider for consistent
 * theming across all components.
 *
 * Features:
 * - Lazy loading of page components for better performance
 * - Responsive navigation with a fixed navbar
 * - Theme switching capability (light/dark mode)
 * - Routing for Home, Products, Services, About Us, and Contact pages
 */
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import NavBar from './components/NavBar';
import './App.css';

// Lazy load page components for better performance
const Landing = lazy(() => import('./pages/Landing'));
const Products = lazy(() => import('./pages/Products'));
const Services = lazy(() => import('./pages/Services'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));

/**
 * Loading component displayed while lazy-loaded components are being fetched.
 */
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    fontSize: '1.2rem'
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        {/* Fixed navigation bar at the top */}
        <NavBar />
        {/* Main content area with padding to account for fixed navbar */}
        <div style={{ paddingTop: '80px' }}>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Route definitions for different pages */}
              <Route path="/" element={<Landing />} />
              <Route path="/products" element={<Products />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;