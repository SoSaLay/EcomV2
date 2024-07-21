// src/components/TestimonialsSection/TestimonialsSection.js
import React from 'react';
import TestimonialCard from '../testimonial/testimonial';
import styles from './styles.scss'; 

const testimonials = [
  {
    image: '/path/to/placeholder1.png', // Placeholder image
    name: 'Jacob Jones',
    role: 'UI/UX Designer',
    company: '',
    testimonial: 'I absolutely adore utilising travel apps for all of my journeys! They make navigation and planning so much easier and more convenient.'
  },
  {
    image: '/path/to/placeholder2.png', // Placeholder image
    name: 'Robert Fox',
    role: 'Visual Designer',
    company: 'Queen Studio',
    testimonial: 'I absolutely adore utilising travel apps for all of my journeys! They make navigation and planning so much easier and more convenient.'
  },
  {
    image: '/path/to/placeholder3.png', // Placeholder image
    name: 'Kristin Watson',
    role: 'Product Design',
    company: 'Meta',
    testimonial: 'I absolutely adore utilising travel apps for all of my journeys! They make navigation and planning so much easier and more convenient.'
  },
  {
    image: '/path/to/placeholder4.png', // Placeholder image
    name: 'Brooklyn Simmons',
    role: 'Product Design',
    company: 'Netflix',
    testimonial: 'I absolutely adore utilising travel apps for all of my journeys! They make navigation and planning so much easier and more convenient.'
  },
  {
    image: '/path/to/placeholder5.png', // Placeholder image
    name: 'Cameron Williamson',
    role: 'Product Design',
    company: '',
    testimonial: 'I absolutely adore utilising travel apps for all of my journeys! They make navigation and planning so much easier and more convenient.'
  },
  {
    image: '/path/to/placeholder6.png', // Placeholder image
    name: 'Bhuvneshwar Kumar',
    role: '',
    company: '',
    testimonial: 'I absolutely adore utilising travel apps for all of my journeys! They make navigation and planning so much easier and more convenient.'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          image={testimonial.image}
          name={testimonial.name}
          role={testimonial.role}
          company={testimonial.company}
          testimonial={testimonial.testimonial}
        />
      ))}
    </section>
  );
};

export default TestimonialsSection;
