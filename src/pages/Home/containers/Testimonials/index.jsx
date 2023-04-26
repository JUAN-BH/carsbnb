import React from 'react';
import TestimonialsGallery from '../TestimonialsGallery';

export default function Testimonials() {
  return (
    <div className="softW">
      <section className="testimonials marginContainer">
        <article className="testimonials__info">
          <h2>Reviewed by people</h2>
          <h1>Client's Testimonials</h1>
          <p>
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </article>
        <TestimonialsGallery />
      </section>
    </div>
  );
}
