import React from 'react';
import Question from '../../components/Question';
import qa from './questions';

export default function FAQ() {
  return (
    <div className="carBg">
      <section className="FAQ marginContainer">
        <article className="FAQ__intro">
          <h2>FAQ</h2>
          <h1>Frenquently Asked Questions</h1>
          <p>
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </article>
        <article className="FAQ__content">
          {qa.map((question) => (
            <Question key={question.id} q={question.q} a={question.a} />
          ))}
        </article>
      </section>
    </div>
  );
}
