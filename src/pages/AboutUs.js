/**
 * About Us page component for the N-Impress website.
 *
 * This component provides information about N-Impress's history, mission, core values,
 * and team members. It includes multiple sections with responsive layouts and
 * uses styled-components for consistent theming.
 *
 * Features:
 * - Company story and mission sections
 * - Core values grid with icons and descriptions
 * - Team member profiles with photos and roles
 * - Responsive design for all screen sizes
 * - Theme-aware styling throughout
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

const Section = styled.section`
  margin-bottom: 50px;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 30px;
    color: ${props => props.theme.colors.primary};
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto 20px;
    text-align: center;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
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
    font-size: 1rem;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const TeamCard = styled.div`
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
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 5px;
    color: ${props => props.theme.colors.text};
  }

  p {
    color: ${props => props.theme.colors.text};
    opacity: 0.8;
    font-size: 1rem;
  }
`;

/**
 * AboutUs functional component.
 *
 * This component renders the About Us page with multiple sections including
 * company story, mission, core values, and team member profiles. It uses
 * sample data for demonstration and includes responsive grid layouts.
 *
 * Core Values Data:
 * Array of value objects with id, icon (emoji), title, and description.
 * Represents the fundamental principles that guide N-Impress.
 *
 * Team Members Data:
 * Array of team member objects with id, name, role, and image URL.
 * In production, this would be fetched from an API or CMS.
 *
 * Sections:
 * - Our Story: Company history and background
 * - Our Mission: Company purpose and goals
 * - Core Values: Key principles with visual cards
 * - Meet Our Team: Team member profiles with photos
 */
const AboutUs = memo(() => {
  // Core values that define N-Impress's principles
  const coreValues = [
    {
      id: 1,
      icon: '🎨',
      title: 'Creativity',
      description: 'We foster innovation and creativity in every product we create.'
    },
    {
      id: 2,
      icon: '⭐',
      title: 'Quality',
      description: 'Commitment to excellence in all our stationery and printing services.'
    },
    {
      id: 3,
      icon: '🤝',
      title: 'Customer Focus',
      description: 'Putting our customers first in everything we do.'
    }
  ];

  // Team member data for the team section
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Founder & CEO',
      image: 'https://via.placeholder.com/150x150?text=John+Doe'
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Creative Director',
      image: 'https://via.placeholder.com/150x150?text=Jane+Smith'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Operations Manager',
      image: 'https://via.placeholder.com/150x150?text=Mike+Johnson'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      role: 'Marketing Lead',
      image: 'https://via.placeholder.com/150x150?text=Sarah+Wilson'
    }
  ];

  return (
    <Container>
      {/* Page header */}
      <Header>
        <h1>About N-Impress</h1>
        <p>Learn more about our journey, mission, and the team behind N-Impress Stationery.</p>
      </Header>

      {/* Company story section */}
      <Section>
        <h2>Our Story</h2>
        <p>
          Founded in 2010, N-Impress Stationery began as a small family business with a passion for quality stationery and printing services.
          Over the years, we've grown into a trusted provider of premium stationery products, serving customers across the region with creativity,
          reliability, and exceptional customer service. Our commitment to innovation and sustainability drives us to continually improve and expand our offerings.
        </p>
      </Section>

      {/* Company mission section */}
      <Section>
        <h2>Our Mission</h2>
        <p>
          To empower creativity and productivity by providing high-quality, innovative stationery solutions that inspire and delight our customers.
          We strive to be the go-to destination for all stationery needs, combining traditional craftsmanship with modern design and technology.
        </p>
      </Section>

      {/* Core values section with grid layout */}
      <Section>
        <h2>Core Values</h2>
        <ValuesGrid>
          {coreValues.map(value => (
            <ValueCard key={value.id}>
              <div className="icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </ValueCard>
          ))}
        </ValuesGrid>
      </Section>

      {/* Team members section */}
      <Section>
        <h2>Meet Our Team</h2>
        <TeamGrid>
          {teamMembers.map(member => (
            <TeamCard key={member.id}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </TeamCard>
          ))}
        </TeamGrid>
      </Section>
    </Container>
  );
});

// Memoize the component to prevent unnecessary re-renders
export default AboutUs;