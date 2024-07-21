import React from 'react';
import styles from './styles.scss'; 
import BenefitCard from "../benCard/bencard";



const benefits = [
    {
      icon: './mobile-phone-binding-svgrepo-com.svg',
      title: 'Optimize Without Sacrifice',
      description: 'You\'re earning well and want to make the most of it. Enjoying life but also planning for a secure future. MarketinfoZ offers straightforward strategies to optimize finances while still living the life you love.'
    },
    {
      icon: './deposit-svgrepo-com.svg',
      title: 'Maximize Portfolio, Minimize Taxes',
      description: 'We help you diversify your investments by building a portfolio of public and private assets. Empowering you to retire with confidence, plan your estate, and manage taxes for a prosperous future.'
    },
    {
      icon: './market-analysis-svgrepo-com.svg',
      title: 'Actionable Business Intelligence',
      description: 'High-level market research to ensure you put your best foot forward. We uncover crucial insights through meticulous research and global databases. Helping ambitious startups test, iterate, and refine value propositions that lead to millions!'
    }
  ];
  
  const BenefitsSection = () => {
    return (
      <section className="benefits-section">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </section>
    );
  };
  
  export default BenefitsSection;