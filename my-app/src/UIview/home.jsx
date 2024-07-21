import React from 'react';
import Hero from '../components/heroSec/homeHero/hero';
import SocialProof from "../components/socialProof/socialProof"
import ProductCard from "../components/card/card"
import BenefitsSection from "../components/HomeBenCard/homeBenefits"
import Heading from "../components/text/heading"
import Paragraph from "../components/text/paragraph"
import Subheading from "../components/text/subheading"
import StatsSection from "../components/statistics/stats"
import StepComponent from "../components/stepsOutline/step"
import CarouselComponent from "../components/carousel/carousel"
import TestimonialsSection from '../components/homeTestimonial/homeTestimonial';
import FAQAccordion from '../components/accordion/accordion';
import Button from '../components/button/button';

const Home = ()=> {


const handleCTAClick = () => {
    console.log('CTA button clicked!');
  };

  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (

    <div>
      <Hero
        backgroundImage="/futurism-perspective.jpeg"
        heading="Goal-Based Research for Business and Investment Clients        "
        subheading="Use our Actionable Intelligence for Smarter Decisions"
        ctaText="Start Custom Report"
        ctaOnClick={handleCTAClick}
      />

    <SocialProof/>

    <Heading content="Ensuring High Earners Make Smarter Decisions" style={{ color: 'black' }} />

    <BenefitsSection/>

    <CarouselComponent/>

    <StatsSection/>

    <StepComponent />

    <TestimonialsSection/>

    <Heading content="Frequently Asked Questions" style={{ color: 'black' }} />

    <FAQAccordion/>
   
    <Button onClick={handleButtonClick} className="primary-button">
        Let's Start Work!
    </Button>

    </div>










  );
};



export default Home;