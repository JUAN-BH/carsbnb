import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from './containers/Hero';
import BookCarIntro from './containers/BookCarIntro';
import RentalSteps from '../../global/RentalSteps';
import OurVehicles from './containers/OurVehicles';
import Promotion from './containers/Promotion';
import ChooseUs from './containers/ChooseUs';
import Testimonials from './containers/Testimonials';
import FAQ from './containers/FAQ';
import OurApp from './containers/OurApp';

function Home() {
  return (
    <>
      <Helmet>
        <title>Carsbnb</title>
      </Helmet>
      <Hero />
      <BookCarIntro />
      <RentalSteps />
      <OurVehicles />
      <Promotion />
      <ChooseUs />
      <Testimonials />
      <FAQ />
      <OurApp />
    </>
  );
}
export default Home;
