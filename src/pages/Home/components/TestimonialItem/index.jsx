import React from 'react';
import { IconQuote } from '@tabler/icons-react';

export default function TestimonialItem() {
  return (
    <div className="testimonials__gallery__item">
      <p className="testimonial">
        "We rented a car from this website and had an amazing experience! The
        booking was easy and the rental rates were very affordable."
      </p>
      <div className="testimonials__gallery__item__data">
        <img
          src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/user.png"
          alt="Diana"
        />
        <div>
          <h2>Diana</h2>
          <p>Queens Area</p>
        </div>
        <IconQuote />
      </div>
    </div>
  );
}
