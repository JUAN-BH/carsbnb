import React from 'react';
import HeroInfo from '../../components/HeroInfo';
import heroBg from './assets/heroBg.png';
import carBanner from './assets/banner_car.png';

export default function Hero() {
  return (
    <div className="softW">
      <section className="marginContainer hero">
        <img src={heroBg} alt="hero background" className="hero__imgBg" />
        <HeroInfo />
        <div className="hero__carContainer">
          <div className="imgCon">
            <img src={carBanner} alt="car banner" className="carBanner" />
          </div>
        </div>
      </section>
    </div>
  );
}
