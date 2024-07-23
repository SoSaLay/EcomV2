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
import ConversionTable from '../components/table/table';
import BlankSpace from '../components/blankSpace/blank';


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
        heading="Goal-Based Research for Business & Investment Clients        "
        subheading="Actionable Intelligence for Smarter Decisions"
        ctaText="Start Custom Report"
        ctaOnClick={handleCTAClick}
      />

    <SocialProof/>

    <BlankSpace height="100px" width="100%" backgroundColor="white"/>

    <Heading content="Ensuring High Earners Make Smarter Decisions" style={{ color: 'black' }} />

    <BenefitsSection/>

    <CarouselComponent/>

    <BlankSpace height="100px" width="100%" backgroundColor="white"/>


    <StatsSection/>

    <BlankSpace />

    <StepComponent />


    <TestimonialsSection/>

    <Heading content="Frequently Asked Questions" style={{ color: 'black' }} />

    <FAQAccordion/>
   
    <Button 
  text="Let's Start Work" 
  onClick={() => console.log('Button clicked')} 
  type="submit"
/>

<BlankSpace height="100px" width="100%" backgroundColor="white"/>
    </div>










  );
};



export default Home;