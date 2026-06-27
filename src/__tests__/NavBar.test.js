/**
 * NavBar integration tests
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import NavBar from '../components/NavBar';
import { ThemeProvider } from '../contexts/ThemeContext';

const renderNavBar = () => {
  return render(
    <ThemeProvider>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </ThemeProvider>
  );
};

describe('NavBar', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders logo and navigation links', () => {
    renderNavBar();
    expect(screen.getByText('N-Impress')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders theme toggle button with sun icon for light theme', () => {
    renderNavBar();
    const toggleButton = screen.getByRole('button', { name: '☀️' });
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton.textContent).toContain('☀️');
  });

  it('toggles theme when button clicked', async () => {
    renderNavBar();

    const toggleButton = screen.getByRole('button', { name: '☀️' });
    expect(toggleButton.textContent).toContain('☀️');

    fireEvent.click(toggleButton);

    await waitFor(() => {
      expect(screen.getByRole('button', { name: '🌙' })).toBeInTheDocument();
    });
  });

  it('nav links have correct href attributes', () => {
    renderNavBar();

    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toHaveAttribute('href', '/');
  });
});