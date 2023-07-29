import React, { useEffect } from 'react';
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
import ModalForm from './ModalForm';
import { useInitState } from '../../contexts/initContexts';

function Home() {
  const { state } = useInitState();
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = state.modalBook ? 'hidden' : 'auto';

    return () => {
      body.style.overflow = 'auto';
    };
  }, [state.modalBook]);

  return (
    <>
      <Helmet>
        <title>Carsbnb</title>
      </Helmet>
      <Hero />
      {state.modalBook && <ModalForm />}
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
