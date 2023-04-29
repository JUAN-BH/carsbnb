import { IconPhoneFilled } from '@tabler/icons-react';
import React from 'react';

export default function PromotionG() {
  return (
    <div className="promoBg">
      <section className="promotionG marginContainer">
        <h1>Book a car by getting in touch with us</h1>
        <article className="promotionG__info">
          <p>
            {' '}
            <IconPhoneFilled />
            Call to book
          </p>
          <h2 className="highlightTxt">(562) 498-4600</h2>
        </article>
      </section>
    </div>
  );
}
