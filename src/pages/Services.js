/**
 * Services page component for the N-Impress website.
 *
 * This component displays the services offered by N-Impress, including custom printing,
 * bulk orders, fast delivery, personalized design, and consultation services.
 * It uses a responsive grid layout with service cards featuring icons and descriptions.
 *
 * Features:
 * - Header section with page introduction
 * - Responsive service grid (3 columns on desktop, 2 on tablet, 1 on mobile)
 * - Service cards with emoji icons, titles, and descriptions
 * - Hover effects and smooth transitions
 * - Theme-aware styling
 */
import React, { memo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};
  padding-top: 80px; /* Account for fixed navbar */
`;

const Header = styled.header`
  text-align: center;
  padding: 50px 20px;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: white;
  border-radius: 10px;
  margin-bottom: 50px;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: ${props => props.theme.colors.text};
  }

  p {
    color: ${props => props.theme.colors.text};
    opacity: 0.8;
  }
`;

/**
 * Services functional component.
 *
 * This component renders the services page with a header and a grid of service offerings.
 * Each service is displayed as a card with an emoji icon, title, and description.
 * The layout is responsive and adapts to different screen sizes.
 *
 * Services Data:
 * Array of service objects containing id, icon (emoji), title, and description.
 * These represent the key services offered by N-Impress.
 *
 * Grid Layout:
 * - 3 columns on large screens
 * - 2 columns on medium screens (tablets)
 * - 1 column on small screens (mobile)
 */
const Services = memo(() => {
  // Array of services offered by N-Impress
  const services = [
    {
      id: 1,
      icon: '🖨️',
      title: 'Custom Printing Services',
      description: 'High-quality custom printing for all your stationery needs, from business cards to banners.'
    },
    {
      id: 2,
      icon: '📦',
      title: 'Bulk Order Discounts',
      description: 'Save more with our bulk order discounts on large quantities of stationery and printing items.'
    },
    {
      id: 3,
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery services to get your orders to you as soon as possible.'
    },
    {
      id: 4,
      icon: '🎨',
      title: 'Personalized Stationery Design',
      description: 'Custom design services for personalized stationery that reflects your unique style.'
    },
    {
      id: 5,
      icon: '💬',
      title: 'Consultation Services',
      description: 'Expert consultation to help you choose the perfect stationery solutions for your needs.'
    }
  ];

  return (
    <Container>
      {/* Page header with title and description */}
      <Header>
        <h1>Our Services</h1>
        <p>Discover the comprehensive services we offer to meet all your stationery and printing requirements.</p>
      </Header>

      {/* Responsive grid of service cards */}
      <ServicesGrid>
        {services.map(service => (
          <ServiceCard key={service.id}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </Container>
  );
});

// Memoize the component to prevent unnecessary re-renders
export default Services;