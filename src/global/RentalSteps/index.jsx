import React from 'react';
import selectCar from './imgs/selectCar.png';
import contactOperator from './imgs/contactOperator.png';
import driveCar from './imgs/drive.png';

export default function RentalSteps() {
  return (
    <section className="rentalSteps marginContainer">
      <article className="rentalSteps__intro">
        <h2>Plan your trip</h2>
        <h1>Quick & easy car rental</h1>
      </article>
      <article className="rentalSteps__content">
        <div className="rentalSteps__content__info">
          <div className="rentalSteps__content__info__imgCon">
            <img src={selectCar} alt="Select car" loading="lazy" />
          </div>
          <h2>Select a car</h2>
          <p>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </div>
        <div className="rentalSteps__content__info">
          <div className="rentalSteps__content__info__imgCon">
            <img src={contactOperator} alt="Contact operator" loading="lazy" />
          </div>
          <h2>Contact Operator</h2>
          <p>
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>
        <div className="rentalSteps__content__info">
          <div className="rentalSteps__content__info__imgCon">
            <img src={driveCar} alt="Drive car" loading="lazy" />
          </div>
          <h2>Let's Drive</h2>
          <p>
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </article>
    </section>
  );
}
