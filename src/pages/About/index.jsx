import React from 'react';
import { Helmet } from 'react-helmet';
import GHero from '../../global/GHero';
import RentalSteps from '../../global/RentalSteps';
import AboutCompany from './AboutCompany';
import PromotionG from '../../global/PromotionG';

function About() {
  return (
    <>
      <Helmet>
        <title>Carsbnb - About</title>
      </Helmet>
      <GHero pageTitle="About" />
      <AboutCompany />
      <RentalSteps />
      <PromotionG />
    </>
  );
}
export default About;
