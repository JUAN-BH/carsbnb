import React from 'react';
import { Link } from 'react-router-dom';

export default function GHero({ pageTitle }) {
  return (
    <div className="heroBg">
      <section className="ghero marginContainer">
        <article className="ghero__info">
          <h1>{pageTitle}</h1>
          <h2>
            <Link to="/">Home</Link> <span>/</span> {pageTitle}
          </h2>
        </article>
      </section>
    </div>
  );
}
