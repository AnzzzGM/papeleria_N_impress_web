/**
 * Theme definitions for the N-Impress website.
 *
 * These theme objects define color schemes for light and dark modes.
 * They are used by styled-components to provide consistent theming
 * throughout the application.
 *
 * Color Usage:
 * - primary: Main brand color, used for headers, buttons, links
 * - secondary: Supporting color for accents and secondary elements
 * - accent: Highlight color for hover states and special elements
 * - background: Main background color for containers and sections
 * - text: Primary text color for readability
 * - surface: Elevated surface color for cards, modals, inputs
 * - textSecondary: Muted text for descriptions, placeholders
 * - border: Border color for inputs, cards, dividers
 * - focus: Focus ring color for accessibility
 * - success: Success state color
 * - error: Error state color
 * - overlay: Overlay color for modals, mobile menu backdrop
 */

export const lightTheme = {
  colors: {
    primary: '#FF00FF',
    primaryHover: '#E600E6',
    secondary: '#90EE90',
    secondaryHover: '#7DD87D',
    accent: '#FFFF00',
    accentHover: '#E6E600',
    background: '#FFFFFF',
    surface: '#FAFAFA',
    text: '#000000',
    textSecondary: '#555555',
    border: '#DDDDDD',
    focus: '#FF00FF',
    success: '#28A745',
    error: '#DC3545',
    overlay: 'rgba(0,0,0,0.5)',
  },
  cssVars: {
    '--color-primary': '#FF00FF',
    '--color-primary-hover': '#E600E6',
    '--color-secondary': '#90EE90',
    '--color-secondary-hover': '#7DD87D',
    '--color-accent': '#FFFF00',
    '--color-accent-hover': '#E6E600',
    '--color-background': '#FFFFFF',
    '--color-surface': '#FAFAFA',
    '--color-text-primary': '#000000',
    '--color-text-secondary': '#555555',
    '--color-border': '#DDDDDD',
    '--color-focus': '#FF00FF',
    '--color-success': '#28A745',
    '--color-error': '#DC3545',
    '--color-overlay': 'rgba(0,0,0,0.5)',
  },
};

export const darkTheme = {
  colors: {
    primary: '#8B008B',
    primaryHover: '#A000A0',
    secondary: '#006400',
    secondaryHover: '#007A00',
    accent: '#B8860B',
    accentHover: '#CC9900',
    background: '#000000',
    surface: '#1A1A1A',
    text: '#FFFFFF',
    textSecondary: '#CCCCCC',
    border: '#333333',
    focus: '#8B008B',
    success: '#2ECC71',
    error: '#E74C3C',
    overlay: 'rgba(0,0,0,0.7)',
  },
  cssVars: {
    '--color-primary': '#8B008B',
    '--color-primary-hover': '#A000A0',
    '--color-secondary': '#006400',
    '--color-secondary-hover': '#007A00',
    '--color-accent': '#B8860B',
    '--color-accent-hover': '#CC9900',
    '--color-background': '#000000',
    '--color-surface': '#1A1A1A',
    '--color-text-primary': '#FFFFFF',
    '--color-text-secondary': '#CCCCCC',
    '--color-border': '#333333',
    '--color-focus': '#8B008B',
    '--color-success': '#2ECC71',
    '--color-error': '#E74C3C',
    '--color-overlay': 'rgba(0,0,0,0.7)',
  },
};