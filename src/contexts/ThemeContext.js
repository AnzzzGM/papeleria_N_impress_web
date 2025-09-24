/**
 * Theme Context for managing application-wide theming.
 *
 * This context provides theme state management and toggle functionality
 * across the entire React application. It integrates with styled-components
 * to provide consistent theming and persists theme preference in localStorage.
 *
 * Features:
 * - Light and dark theme support
 * - Theme persistence across browser sessions
 * - Integration with styled-components ThemeProvider
 * - Context API for theme state access throughout the app
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
 *
 * Props:
 * - children: ReactNode - The components to be wrapped with theme context
 *
 * State:
 * - theme: string - Current theme ('light' or 'dark')
 *
 * Effects:
 * - Loads saved theme from localStorage on mount
 *
 * Functions:
 * - toggleTheme: Switches between light and dark themes and saves to localStorage
 */
export const ThemeProvider = ({ children }) => {
  // Theme state initialized to 'light' by default
  const [theme, setTheme] = useState('light');

  // Effect to load saved theme from localStorage on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  /**
   * Toggles between light and dark themes.
   * Updates state and persists the new theme to localStorage.
   */
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Determine current theme object based on theme state
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    // Provide theme context to all child components
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Provide theme to styled-components */}
      <StyledThemeProvider theme={currentTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};