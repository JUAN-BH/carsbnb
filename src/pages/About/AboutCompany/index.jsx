import React from 'react';
import imgAbout from './imgs/about_image.jpg';
import car from './imgs/car.png';
import parking from './imgs/parking.png';
import transportation from './imgs/transportation.png';

export default function AboutCompany() {
  return (
    <section className="aboutCompany marginContainer">
      <article className="aboutCompany__imgIntro">
        <img src={imgAbout} alt="About us" />
      </article>
      <article className="aboutCompany__info">
        <div className="aboutCompany__info__data">
          <h2>About Company</h2>
          <h1>You start the engine and your adventure begins</h1>
          <p>
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>
        </div>
        <div className="aboutCompany__info__stats">
          <div className="aboutCompany__info__stats__item">
            <img src={transportation} alt="car" />
            <div>
              <p>20</p>
              <p>
                Car <br /> Types
              </p>
            </div>
          </div>
          <div className="aboutCompany__info__stats__item">
            <img src={car} alt="car" />
            <div>
              <p>85</p>
              <p>
                Rental <br /> Outlets
              </p>
            </div>
          </div>
          <div className="aboutCompany__info__stats__item">
            <img src={parking} alt="car" />
            <div>
              <p>75</p>
              <p>
                Repair <br /> Shop
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
