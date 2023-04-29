import React from 'react';
import { Helmet } from 'react-helmet';
import GHero from '../../global/GHero';
import PromotionG from '../../global/PromotionG';
import Reviews from './Reviews';

export default function Testimonials() {
  return (
    <>
      <Helmet>
        <title>Carsbnb - Testimonials</title>
      </Helmet>
      <GHero pageTitle="Testimonials" />
      <Reviews />
      <PromotionG />
    </>
  );
}
