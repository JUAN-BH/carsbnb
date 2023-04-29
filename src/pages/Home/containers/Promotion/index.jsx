import React from 'react';
import PrimaryBtn from '../../../../global/PrimaryBtn';

export default function Promotion() {
  return (
    <section className="promtion">
      <div className="promtion__content">
        <div className="promtion__content__info">
          <h1>Save big with our cheap car rental!</h1>
          <p>
            Top Airports. Local Suppliers. <span>24/7</span> Support.
          </p>
        </div>

        <div className="promtion__content__btn">
          <PrimaryBtn>Book ride</PrimaryBtn>
        </div>
      </div>
    </section>
  );
}
