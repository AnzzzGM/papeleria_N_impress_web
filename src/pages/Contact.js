/**
 * Contact page component for the N-Impress website.
 *
 * This component provides a contact form for users to send messages to N-Impress,
 * along with business contact details. It includes form validation, error handling,
 * and responsive design for different screen sizes.
 *
 * Features:
 * - Contact form with name, email, and message fields
 * - Real-time form validation with error messages
 * - Business details section with address, phone, and email
 * - Responsive layout (side-by-side on desktop, stacked on mobile)
 * - Form submission handling with user feedback
 * - Theme-aware styling throughout
 */
import React, { useState, memo } from 'react';
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

const ContentWrapper = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormSection = styled.section`
  flex: 1;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.primary};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 5px;
  font-size: 1rem;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const Textarea = styled.textarea`
  padding: 12px;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 5px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.9rem;
`;

const DetailsSection = styled.section`
  flex: 1;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.primary};
  }
`;

const DetailItem = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
    color: ${props => props.theme.colors.text};
  }

  p {
    color: ${props => props.theme.colors.text};
    opacity: 0.8;
  }
`;

/**
 * Contact functional component.
 *
 * This component manages the contact page with a form for user inquiries and
 * displays business contact information. It handles form state, validation,
 * and submission with user feedback.
 *
 * State:
 * - formData: Object containing name, email, and message field values
 * - errors: Object containing validation error messages for each field
 *
 * Functions:
 * - handleChange: Updates form data and clears errors on input change
 * - validateForm: Performs client-side validation and returns validation status
 * - handleSubmit: Handles form submission, validation, and user feedback
 *
 * Form Validation:
 * - Name: Required field
 * - Email: Required field with regex validation for proper email format
 * - Message: Required field
 *
 * Submission:
 * Currently logs to console and shows alert. In production, this would
 * send data to a backend API for processing.
 */
const Contact = memo(() => {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Validation errors state
  const [errors, setErrors] = useState({});

  /**
   * Handles input field changes.
   * Updates the corresponding field in formData and clears any existing error
   * for that field to provide immediate feedback as user types.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  /**
   * Validates the entire form.
   * Checks for required fields and email format. Sets error messages
   * and returns true if valid, false if invalid.
   */
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handles form submission.
   * Prevents default form behavior, validates form, and if valid,
   * processes the submission (currently just logs and shows alert).
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      alert('Thank you for your message! We will get back to you soon.');
    }
  };

  return (
    <Container>
      {/* Page header */}
      <Header>
        <h1>Contact Us</h1>
        <p>Get in touch with N-Impress. We'd love to hear from you!</p>
      </Header>

      <ContentWrapper>
        {/* Contact form section */}
        <FormSection>
          <h2>Send us a message</h2>
          <Form onSubmit={handleSubmit}>
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </div>

            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
            </div>

            <Button type="submit">Send Message</Button>
          </Form>
        </FormSection>

        {/* Business details section */}
        <DetailsSection>
          <h2>Business Details</h2>
          <DetailItem>
            <h3>Address</h3>
            <p>123 Main Street<br />Santo Domingo<br />Dominican Republic</p>
          </DetailItem>
          <DetailItem>
            <h3>Phone</h3>
            <p>+1 (809) 123-4567</p>
          </DetailItem>
          <DetailItem>
            <h3>Email</h3>
            <p>info@n-impress.com</p>
          </DetailItem>
        </DetailsSection>
      </ContentWrapper>
    </Container>
  );
});

// Memoize the component to prevent unnecessary re-renders
export default Contact;