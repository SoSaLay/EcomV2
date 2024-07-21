import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import styles from './styles.scss'; 

const testimonials = [
  {
    image: '/path/to/placeholder1.png', // Placeholder image
    name: 'Dev Shah',
    board: 'ICSE Board',
    subject: 'Maths : 100',
    quote: 'Sir is amazing, he let me stay at his place till 3am so that I can work on maths'
  },
  {
    image: '/path/to/placeholder2.png', // Placeholder image
    name: 'Rahul Rathava',
    board: 'ICSE Board',
    subject: 'Physics : 94',
    quote: 'I was never interested in maths but sir really helped me'
  },
  {
    image: '/path/to/placeholder3.png', // Placeholder image
    name: 'Rahul Rathava',
    board: 'HSC Board',
    subject: 'Physics : 94',
    quote: 'Sir is amazing, he let me stay at his place till 3am so that I can work on maths'
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