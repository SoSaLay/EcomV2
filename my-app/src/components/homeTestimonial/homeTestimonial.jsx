// src/components/TestimonialsSection/TestimonialsSection.js
import React from 'react';
import TestimonialCard from '../testimonial/testimonial';
import styles from './styles.scss'; 

const testimonials = [
  {
    image: 'avatar-svgrepo-com.svg',
    name: 'Jacob',
    role: 'Investment Strategist',
    testimonial: 'Increased ROI by 25% through strategic investment planning'
  },
  {
    image: "avatar-svgrepo-com (1).svg",
    name: 'Robert',
    role: 'Business Development Executive',
    testimonial: 'Boosted annual revenue by $1M through innovative business solutions'
  },
  {
    image: "avatar-svgrepo-com (2).svg",
    name: 'Kristin',
    role: 'Supply Chain Director',
    testimonial: 'Cut operational costs by 15% via streamlined supply chain processes.'
  },
  {
    image: "avatar-svgrepo-com (3).svg",
    name: 'Brooklyn',
    role: 'Marketing Director',
    testimonial: 'Grew client base by 30% with targeted marketing campaigns'
  },
  {
    image: "avatar-svgrepo-com (4).svg",
    name: 'Cameron',
    role: 'Operations Manager',
    testimonial: 'Achieved a 40% reduction in project turnaround time through process optimization'
  },
  {
    image: "avatar-svgrepo-com (5).svg",
    name: 'Bhuvneshwar',
    role: 'Global Investment Advisor',
    testimonial: 'Expanded international reach by 25% through effective global investment strategies.'
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
