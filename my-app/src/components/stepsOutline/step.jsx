import React from 'react';
import styles from './styles.scss'; 

const steps = [
  {
    image: "./number-svgrepo-com (1).svg",
    subtitle: 'Simple and Grow',
    title: 'Goals Discussion',
    description: 'Confidential, no-obligation conversation to outline your needs.'
  },
  {
    image: "./number1-svgrepo-com (2).svg",
    subtitle: 'Custom Solution',
    title: 'Tailored and Optimize Strategy',
    description: "We'll work together to craft an efficient, cost-effective solution."
  },
  {
    image: './number2-svgrepo-com (1).svg',
    subtitle: 'Project Plan',
    title: 'Proposal',
    description: 'Receive a comprehensive plan, including project scope, methodology, deliverables, timeline, and costs.'
  },
  {
    image: './number3-svgrepo-com (1).svg',
    subtitle: 'Precise and Informed',
    title: 'Research Execution',
    description: 'Our team will carry out the research precisely, keeping you conisstently informed throughout.'
  },
  {
    image: './number4-svgrepo-com (1).svg',
    subtitle: 'Detailed Analysis',
    title: 'Delivery',
    description: 'Get a comprehensive analysis presented in a format that meets your specific requirements.'
  }




];

const StepComponent = () => {
  return (
    <section className="step-component">
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-content">
            <img src={step.image} alt={`Step ${index + 1}`} className="step-image" />
            <div className="step-details">
              <p className="step-subtitle">{step.subtitle}</p>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepComponent;