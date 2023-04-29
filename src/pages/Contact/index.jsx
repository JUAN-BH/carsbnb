import React from 'react';
import { Helmet } from 'react-helmet';
import GHero from '../../global/GHero';
import PromotionG from '../../global/PromotionG';
import MoreInfo from './MoreInfo';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Carsbnb - Contact</title>
      </Helmet>
      <GHero pageTitle="Contact" />
      <MoreInfo />
      <PromotionG />
    </>
  );
}
