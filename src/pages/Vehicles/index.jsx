import React from 'react';
import { Helmet } from 'react-helmet';
import GHero from '../../global/GHero';
import PromotionG from '../../global/PromotionG';
import VehiclesCon from './VehiclesCon';

function Vehicles() {
  return (
    <>
      <Helmet>
        <title>Carsbnb - Vehicles</title>
      </Helmet>
      <GHero pageTitle="Vehicles" />
      <VehiclesCon />
      <PromotionG />
    </>
  );
}

export default Vehicles;
