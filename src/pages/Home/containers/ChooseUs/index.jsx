import React from 'react';
import PrimaryBtn from '../../../../global/PrimaryBtn';
import carsDisplay from './imgs/carsBanner.png';
import drive from './imgs/drive.png';
import price from './imgs/price.png';
import charge from './imgs/charge.png';

export default function ChooseUs() {
  return (
    <div className="containerBg">
      <section className="chooseUs marginContainer">
        <img src={carsDisplay} alt="Cars" className="chooseUs__introImg" />
        <div className="chooseUs__content">
          <article className="chooseUs__content__info">
            <h2>Why choose us</h2>
            <h1>Best valued deals you will ever find</h1>
            <p>
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <PrimaryBtn>Find deals</PrimaryBtn>
          </article>
          <article className="chooseUs__content__infoItems">
            <div className="chooseUs__content__infoItems__item">
              <img src={drive} alt="Car" />
              <div>
                <h2>Cross Country Drive</h2>
                <p>
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>
            <div className="chooseUs__content__infoItems__item">
              <img src={price} alt="Car price" />
              <div>
                <h2>All Inclusive Pricing</h2>
                <p>
                  Get everything you need in one convenient, transparent price
                  with our all-inclusive pricing policy.
                </p>
              </div>
            </div>
            <div className="chooseUs__content__infoItems__item">
              <img src={charge} alt="Car charge" />
              <div>
                <h2>No Hidden Charges</h2>
                <p>
                  Enjoy peace of mind with our no hidden charges policy. We
                  believe in transparent and honest pricing.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
