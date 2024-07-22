import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import styles from './styles.scss'; 

const testimonials = [
  {
    image: "smiling-young-redhead-ginger-girl-with-freckles-isolated-olive-green-wall-with-copy-space_141793-117849.avif",
    name: 'Olivia Martinez',
    job: 'Corporate Strategy Manager',
    quote: 'Enabled healthcare businesses to successfully enter new software market through precise demographic research'
  },
  {
    image: 'african-woman-successful-entrepreneur-wearing-glasses-face-portrait_53876-148050.jpg',
    name: 'Emma Harris',
    job: 'Equity Research Analyst',
    quote: 'Created a custom investment mix, leading to a 35% improvement in overall returns over a 9-month period'
  },
  {
    image: 'lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.avif', // Placeholder image
    name: 'Isabella Lee',
    job: 'Marketing Manager',
    quote: 'Implemented a actionable growth strategy that doubled market share within 18 months for fintech platform'
  },
  {
    image: 'curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.avif', // Placeholder image
    name: 'Daniel Wright',
    job: 'Portfolio Manager',
    quote: 'Increased investment portfolio returns by identifying undervalued assets through comprehensive market analysis.'
  },
  {
    image: 'portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.avif',
    name: 'William Martin',
    job: 'Customer Experience Manage',
    quote: 'Improved customer satisfaction by personalizing service offerings based on consumer behavior insights'
  }



];

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`carousel-card ${index % 2 === 0 ? 'primary' : 'secondary'}`}>
            <img src={testimonial.image} alt={`${testimonial.name}`} className="card-image" />
            <div className="card-content">
              <h3 className="card-name">{testimonial.name}</h3>
              <p className="card-board">{testimonial.board}</p>
              <p className="card-subject">{testimonial.subject}</p>
              <p className="card-quote">{testimonial.quote}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;