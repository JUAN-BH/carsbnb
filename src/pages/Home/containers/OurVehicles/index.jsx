import React from 'react';
import VehiclesOps from '../VehiclesOps';
import VehicleDisplay from '../../components/VehicleDisplay';
import VehicleInfo from '../../components/VehicleInfo';

export default function OurVehicles() {
  return (
    <section className="ourVehicles marginContainer">
      <article className="ourVehicles__intro">
        <h2>Vehicles models</h2>
        <h1>Our rental fleet</h1>
        <p>
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </article>
      <article className="ourVehicles__content">
        <VehiclesOps />
        <VehicleDisplay />
        <VehicleInfo />
      </article>
    </section>
  );
}
