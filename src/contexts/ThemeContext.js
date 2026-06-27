/**
 * Theme Context for managing application-wide theming.
 *
 * This context provides theme state management and toggle functionality
 * across the entire React application. It integrates with styled-components
 * to provide consistent theming and persists theme preference in localStorage.
 * It also applies CSS variables globally for consistent styling across all components.
 *
 * Features:
 * - Light and dark theme support
 * - Theme persistence across browser sessions
 * - Integration with styled-components ThemeProvider
 * - Context API for theme state access throughout the app
 * - CSS variable injection for global styling
 * - OS prefers-color-scheme detection as default
 */

import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/themes';

/**
 * ThemeContext - React Context for theme state.
 * Provides theme value ('light' or 'dark') and toggleTheme function.
 */
export const ThemeContext = createContext();

/**
 * ThemeProvider component.
 *
 * Wraps the application to provide theme context and styled-components theming.
 * Manages theme state, persistence, and provides toggle functionality.
 * Also injects CSS variables into :root for global styling.
 *
 * Props:
 * - children: ReactNode - The components to be wrapped with theme context
 *
 * State:
 * - theme: string - Current theme ('light' or 'dark')
 *
 * Effects:
 * - Loads saved theme from localStorage on mount, falls back to OS preference
 * - Injects CSS variables into document.documentElement on theme change
 * - Sets data-theme attribute on document.documentElement for CSS selectors
 *
 * Functions:
 * - toggleTheme: Switches between light and dark themes and saves to localStorage
 */
export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(currentTheme.cssVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme, currentTheme.cssVars]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme.colors}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};