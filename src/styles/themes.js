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
 */

export const lightTheme = {
  colors: {
    primary: '#FF00FF', // Bright magenta for vibrant brand presence
    secondary: '#90EE90', // Light green for complementary accents
    accent: '#FFFF00', // Bright yellow for hover states and highlights
    background: '#FFFFFF', // White background for clean, modern look
    text: '#000000', // Black text for maximum contrast and readability
  },
};

export const darkTheme = {
  colors: {
    primary: '#8B008B', // Dark magenta, muted version of light theme primary
    secondary: '#006400', // Dark green for subtle accents in dark mode
    accent: '#B8860B', // Dark yellow/gold for hover states in dark theme
    background: '#000000', // Black background for dark mode
    text: '#FFFFFF', // White text for contrast against dark background
  },
};