/**
 * Custom hook for accessing theme context.
 *
 * This hook provides a convenient way to access the theme state and toggle
 * function from the ThemeContext. It must be used within a component that is
 * wrapped by the ThemeProvider.
 *
 * Returns:
 * - theme: string - Current theme ('light' or 'dark')
 * - toggleTheme: function - Function to toggle between themes
 *
 * Throws:
 * - Error if used outside of ThemeProvider context
 */

import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

/**
 * useTheme hook.
 *
 * Consumes the ThemeContext and returns theme state and controls.
 * Includes error checking to ensure proper usage within ThemeProvider.
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};