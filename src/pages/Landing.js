/**
 * Landing page component for the N-Impress website.
 *
 * This component serves as the homepage, showcasing the brand, featured products,
 * and call-to-action sections. It uses styled-components for responsive design
 * and includes sample product data for demonstration.
 *
 * Features:
 * - Hero section with brand introduction
 * - Featured products grid with hover effects
 * - Call-to-action buttons linking to other pages
 * - Responsive design for mobile and desktop
 * - Theme-aware styling using styled-components
 */
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 100px 20px;
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
    margin-bottom: 30px;
    max-width: 600px;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const FeaturedSection = styled.section`
  margin-bottom: 50px;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: ${props => props.theme.colors.primary};
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
  }

  .product-card {
    background: ${props => props.theme.colors.background};
    border: 1px solid ${props => props.theme.colors.secondary};
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 5px;
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
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
    .products-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const CTASection = styled.section`
  text-align: center;
  padding: 50px 20px;
  background: ${props => props.theme.colors.accent};
  border-radius: 10px;
  margin-bottom: 50px;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.text};
  }

  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .cta-button {
    background: ${props => props.theme.colors.primary};
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    text-decoration: none;
    transition: background 0.3s ease;

    &:hover {
      background: ${props => props.theme.colors.secondary};
    }
  }

  @media (max-width: 768px) {
    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }
    .cta-button {
      width: 200px;
    }
  }
`;

/**
 * Landing functional component.
 *
 * This component renders the homepage content including hero section,
 * featured products, and call-to-action areas. It uses sample product data
 * for demonstration purposes.
 *
 * Sample Products Data:
 * Array of objects containing product information (id, name, description, image)
 * In a real application, this would be fetched from an API or state management.
 *
 * Structure:
 * - HeroSection: Brand introduction and welcome message
 * - FeaturedSection: Grid of featured products with images and descriptions
 * - CTASection: Call-to-action buttons linking to products and contact pages
 */
const Landing = memo(() => {
  // Sample product data for featured products section
  // In production, this would typically come from an API or global state
  const sampleProducts = [
    {
      id: 1,
      name: 'Premium Notebook',
      description: 'High-quality lined notebook for all your writing needs.',
      image: 'https://via.placeholder.com/250x200?text=Notebook'
    },
    {
      id: 2,
      name: 'Elegant Pen Set',
      description: 'Smooth-writing pens in various colors.',
      image: 'https://via.placeholder.com/250x200?text=Pen+Set'
    },
    {
      id: 3,
      name: 'Artistic Sketchbook',
      description: 'Perfect for artists and designers.',
      image: 'https://via.placeholder.com/250x200?text=Sketchbook'
    },
    {
      id: 4,
      name: 'Office Supplies Kit',
      description: 'Complete set for your workspace.',
      image: 'https://via.placeholder.com/250x200?text=Office+Kit'
    }
  ];

  return (
    <Container>
      {/* Hero section with brand introduction */}
      <HeroSection>
        <h1>Welcome to N-Impress Stationery</h1>
        <p>Discover a world of creativity and organization with our premium stationery collection. From elegant notebooks to essential office supplies, we have everything you need to express your ideas and stay productive.</p>
      </HeroSection>

      {/* Featured products section */}
      <FeaturedSection>
        <h2>Featured Products</h2>
        <div className="products-grid">
          {sampleProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </FeaturedSection>

      {/* Call-to-action section */}
      <CTASection>
        <h2>Ready to Shop?</h2>
        <div className="cta-buttons">
          <Link to="/products" className="cta-button">Explore Products</Link>
          <Link to="/contact" className="cta-button">Contact Us</Link>
        </div>
      </CTASection>
    </Container>
  );
});

// Memoize the component to prevent unnecessary re-renders
export default Landing;