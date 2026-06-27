/**
 * Breakpoint constants for responsive design.
 *
 * Single source of truth for all media query breakpoints.
 * Used across all components for consistent responsive behavior.
 *
 * Breakpoint Strategy:
 * - mobile: < 768px (phones)
 * - tablet: 768px - 1023px (tablets)
 * - desktop: >= 1024px (laptops/desktops)
 * - largeDesktop: >= 1200px (large screens)
 */

export const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1200px',
};

/**
 * Media query strings for use in styled-components.
 * Usage: `@media (max-width: ${mediaQueries.mobile}) { ... }`
 */
export const mediaQueries = {
  mobile: `(max-width: ${breakpoints.mobile})`,
  tablet: `(max-width: ${breakpoints.tablet})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
  tabletAndUp: `(min-width: ${breakpoints.mobile})`,
  desktopAndUp: `(min-width: ${breakpoints.tablet})`,
  largeDesktop: `(min-width: ${breakpoints.desktop})`,

  // Between breakpoints
  tabletOnly: `(min-width: ${breakpoints.mobile}) and (max-width: ${parseInt(breakpoints.tablet) - 1}px)`,
  desktopOnly: `(min-width: ${breakpoints.tablet}) and (max-width: ${parseInt(breakpoints.desktop) - 1}px)`,
};

/**
 * Helper to create custom media queries.
 * @param {string} feature - e.g., 'max-width', 'min-width'
 * @param {string} value - breakpoint key or custom value
 * @returns {string} media query string
 */
export const media = (feature, value) => {
  const bp = breakpoints[value] || value;
  return `(${feature}: ${bp})`;
};