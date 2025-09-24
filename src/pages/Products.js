/**
 * Products page component for the N-Impress website.
 *
 * This component displays the products catalog with a grid layout of stationery items.
 * It includes pricing information and uses responsive design for different screen sizes.
 * The component uses sample product data for demonstration purposes.
 *
 * Features:
 * - Header section with page title and description
 * - Responsive product grid (3 columns on desktop, 2 on tablet, 1 on mobile)
 * - Product cards with images, names, descriptions, and prices
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

const ProductsGrid = styled.div`
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

const ProductCard = styled.div`
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
    margin-bottom: 10px;
  }

  .price {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
  }
`;

/**
 * Products functional component.
 *
 * This component renders the products page with a header and a grid of product cards.
 * Each product card displays an image, name, description, and price. The layout
 * is responsive and adapts to different screen sizes.
 *
 * Sample Products Data:
 * Array of product objects with id, name, description, price, and image properties.
 * In a real application, this data would be fetched from an API or state management system.
 *
 * Grid Layout:
 * - 3 columns on large screens
 * - 2 columns on medium screens (tablets)
 * - 1 column on small screens (mobile)
 */
const Products = memo(() => {
  // Sample product data for demonstration
  // In production, this would be fetched from an API or global state
  const sampleProducts = [
    {
      id: 1,
      name: 'Premium Notebook',
      description: 'High-quality lined notebook for all your writing needs.',
      price: '$12.99',
      image: 'https://via.placeholder.com/250x200?text=Notebook'
    },
    {
      id: 2,
      name: 'Elegant Pen Set',
      description: 'Smooth-writing pens in various colors.',
      price: '$8.50',
      image: 'https://via.placeholder.com/250x200?text=Pen+Set'
    },
    {
      id: 3,
      name: 'Artistic Sketchbook',
      description: 'Perfect for artists and designers.',
      price: '$15.00',
      image: 'https://via.placeholder.com/250x200?text=Sketchbook'
    },
    {
      id: 4,
      name: 'Office Supplies Kit',
      description: 'Complete set for your workspace.',
      price: '$25.99',
      image: 'https://via.placeholder.com/250x200?text=Office+Kit'
    },
    {
      id: 5,
      name: 'Colored Pencils Set',
      description: 'Vibrant colors for creative expression.',
      price: '$10.00',
      image: 'https://via.placeholder.com/250x200?text=Colored+Pencils'
    },
    {
      id: 6,
      name: 'Sticky Notes Pack',
      description: 'Assorted sizes for reminders and notes.',
      price: '$5.99',
      image: 'https://via.placeholder.com/250x200?text=Sticky+Notes'
    }
  ];

  return (
    <Container>
      {/* Page header with title and description */}
      <Header>
        <h1>Our Products</h1>
        <p>Explore our wide range of stationery items designed to inspire creativity and boost productivity.</p>
      </Header>

      {/* Responsive grid of product cards */}
      <ProductsGrid>
        {sampleProducts.map(product => (
          <ProductCard key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="price">{product.price}</div>
          </ProductCard>
        ))}
      </ProductsGrid>
    </Container>
  );
});

// Memoize the component to prevent unnecessary re-renders
export default Products;