import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TestimonialItem from '../../components/TestimonialItem';

export default function TestimonialsGallery() {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 2,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 680,
      },
      items: 2,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
    },
  };

  return (
    <div className="testimonials__gallery">
      <Carousel
        arrows={false}
        autoPlay
        autoPlaySpeed={4000}
        centerMode={false}
        showDots
        renderDotsOutside
        dotListClass="dotsTest"
        draggable
        pauseOnHover
        infinite
        swipeable
        responsive={responsive}
      >
        <TestimonialItem />
        <TestimonialItem />
        <TestimonialItem />
      </Carousel>
    </div>
  );
}
