/**
 * NavBar component for the N-Impress website.
 *
 * This component provides navigation functionality with a responsive design.
 * It includes links to different pages, a theme toggle button, and a mobile
 * hamburger menu. The navbar is fixed at the top of the page and uses
 * styled-components for theming.
 *
 * Features:
 * - Responsive navigation (desktop and mobile views)
 * - Active link highlighting
 * - Theme toggle (light/dark mode)
 * - Mobile hamburger menu with overlay
 * - Smooth transitions and hover effects
 */
import React, { useState, memo } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../hooks/useTheme';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 760px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;

  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    display: block;
  }
`;

/**
 * NavBar functional component.
 *
 * This component renders the main navigation bar with links to different sections
 * of the website. It uses the useTheme hook to access theme state and toggle function.
 * The component maintains local state for mobile menu visibility.
 *
 * State:
 * - isOpen: Boolean indicating if the mobile menu is open
 *
 * Functions:
 * - toggleMenu: Toggles the mobile menu open/closed state
 *
 * Dependencies:
 * - useTheme hook for theme management
 * - React Router NavLink for navigation
 */
const NavBar = memo(() => {
  // Access theme state and toggle function from context
  const { theme, toggleTheme } = useTheme();

  // Local state for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Nav>
      {/* Left section: Logo and navigation links */}
      <LeftSection>
        <Logo>N-Impress</Logo>
        <NavLinks>
          <StyledNavLink to="/" end>Home</StyledNavLink>
          <StyledNavLink to="/products">Products</StyledNavLink>
          <StyledNavLink to="/services">Services</StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
          <StyledNavLink to="/contact">Contact</StyledNavLink>
        </NavLinks>
      </LeftSection>

      {/* Right section: Theme toggle and mobile menu button */}
      <RightSection>
        <ThemeToggle onClick={toggleTheme}>
          {/* Display sun emoji for light theme, moon for dark theme */}
          {theme === 'light' ? '☀️' : '🌙'}
        </ThemeToggle>
        <Hamburger onClick={toggleMenu}>
          ☰
        </Hamburger>
      </RightSection>

      {/* Mobile menu overlay - conditionally rendered */}
      {isOpen && (
        <MobileMenu>
          <StyledNavLink to="/" end onClick={toggleMenu}>Home</StyledNavLink>
          <StyledNavLink to="/products" onClick={toggleMenu}>Products</StyledNavLink>
          <StyledNavLink to="/services" onClick={toggleMenu}>Services</StyledNavLink>
          <StyledNavLink to="/about" onClick={toggleMenu}>About</StyledNavLink>
          <StyledNavLink to="/contact" onClick={toggleMenu}>Contact</StyledNavLink>
        </MobileMenu>
      )}
    </Nav>
  );
});

// Memoize the component to prevent unnecessary re-renders
export default NavBar;