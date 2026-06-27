/**
 * App routing integration tests
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';
import { ThemeProvider } from '../contexts/ThemeContext';

const renderApp = () => {
  return render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

describe('App Routing', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders NavBar on all pages', () => {
    renderApp();
    expect(screen.getByText('N-Impress')).toBeInTheDocument();
  });

  it('navigates to Products page', async () => {
    renderApp();

    // Use the nav link
    const productsLink = screen.getByRole('link', { name: 'Products' });
    fireEvent.click(productsLink);

    await waitFor(() => {
      expect(screen.getByText('Our Products')).toBeInTheDocument();
    });
  });

  it('navigates to Services page', async () => {
    renderApp();

    const servicesLink = screen.getByRole('link', { name: 'Services' });
    fireEvent.click(servicesLink);

    await waitFor(() => {
      expect(screen.getByText('Our Services')).toBeInTheDocument();
    });
  });

  it('navigates to About page', async () => {
    renderApp();

    const aboutLink = screen.getByRole('link', { name: 'About' });
    fireEvent.click(aboutLink);

    await waitFor(() => {
      expect(screen.getByText('About N-Impress')).toBeInTheDocument();
    });
  });

  it('navigates to Contact page', async () => {
    renderApp();

    const contactLink = screen.getByRole('link', { name: 'Contact' });
    fireEvent.click(contactLink);

    await waitFor(() => {
      expect(screen.getByText('Contact Us')).toBeInTheDocument();
    });
  });

  it('maintains theme across navigation', async () => {
    renderApp();

    // Toggle to dark mode - button has sun/moon emoji, use text content
    const toggleButton = screen.getByRole('button', { name: '☀️' });
    fireEvent.click(toggleButton);
    await waitFor(() => {
      expect(screen.getByRole('button', { name: '🌙' })).toBeInTheDocument();
    });

    // Navigate to Products
    const productsLink = screen.getByRole('link', { name: 'Products' });
    fireEvent.click(productsLink);

    await waitFor(() => {
      expect(screen.getByText('Our Products')).toBeInTheDocument();
    });

    // Theme toggle should still show moon (dark mode)
    const toggleAfterNav = screen.getByRole('button', { name: '🌙' });
    expect(toggleAfterNav).toBeInTheDocument();
  });

  it('Contact page has form with validation', async () => {
    renderApp();

    const contactLink = screen.getByRole('link', { name: 'Contact' });
    fireEvent.click(contactLink);

    await waitFor(() => {
      expect(screen.getByText('Contact Us')).toBeInTheDocument();
    });

    // Check form fields exist
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument();
  });

  it('shows validation errors on empty form submit', async () => {
    renderApp();

    const contactLink = screen.getByRole('link', { name: 'Contact' });
    fireEvent.click(contactLink);

    await waitFor(() => {
      expect(screen.getByText('Contact Us')).toBeInTheDocument();
    });

    const submitButton = screen.getByRole('button', { name: 'Send Message' });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Message is required')).toBeInTheDocument();
    });
  });

  it('shows business details on Contact page', async () => {
    renderApp();

    const contactLink = screen.getByRole('link', { name: 'Contact' });
    fireEvent.click(contactLink);

    await waitFor(() => {
      expect(screen.getByText('Business Details')).toBeInTheDocument();
    });

    // Use regex to match text that may be split by <br> tags
    expect(screen.getByText(/Santo Domingo/i)).toBeInTheDocument();
    expect(screen.getByText(/Dominican Republic/i)).toBeInTheDocument();
    expect(screen.getByText('+1 (809) 123-4567')).toBeInTheDocument();
    expect(screen.getByText('info@n-impress.com')).toBeInTheDocument();
  });
});