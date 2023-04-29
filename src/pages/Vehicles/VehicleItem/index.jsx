import {
  IconStarFilled,
  IconCar,
  IconArmchair,
  IconAirConditioning,
} from '@tabler/icons-react';
import audi from './img/audi.png';

export default function VehicleItem() {
  return (
    <article className="vehiclesCon__item">
      <img src={audi} alt="audi" />
      <div className="vehiclesCon__item__info">
        <div className="vehiclesCon__item__info__intro">
          <div>
            <h2>Carro</h2>
            <div>
              <IconStarFilled />
              <IconStarFilled />
              <IconStarFilled />
              <IconStarFilled />
              <IconStarFilled />
            </div>
          </div>
          <div>
            <h2>$75</h2>
            <p>per day</p>
          </div>
        </div>
        <div className="vehiclesCon__item__info__data">
          <p>
            <IconCar />
            type
          </p>
          <p>
            <IconArmchair />
            seats
          </p>
          <p>
            <IconAirConditioning />
            Yes
          </p>
        </div>
        <div className="vehiclesCon__item__info__btnCon">
          <button type="button" className="btn">
            Book Ride
          </button>
        </div>
      </div>
    </article>
  );
}
