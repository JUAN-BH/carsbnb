import React from 'react';
import TestimonialItem from '../../Home/components/TestimonialItem';

export default function Reviews() {
  return (
    <section className="reviews marginContainer">
      <article className="testimonials__info">
        <h2>Reviewed by people</h2>
        <h1>Client's Testimonials</h1>
        <p>
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
      </article>
      <article className="reviews__data">
        <TestimonialItem />
        <TestimonialItem />
        <TestimonialItem />
        <TestimonialItem />
      </article>
    </section>
  );
}
