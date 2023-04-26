import React from 'react';

export default function VehicleInfo() {
  return (
    <div className="ourVehicles__content__vehicleInfo">
      <h2 className="ourVehicles__content__vehicleInfo__payInfo">
        $45 /per day
      </h2>
      <div className="ourVehicles__content__vehicleInfo__table">
        <div className="tableRow">
          {' '}
          <span>Model</span> <span>info</span>{' '}
        </div>
        <div className="tableRow">
          {' '}
          <span>Mark</span> <span>info</span>{' '}
        </div>
        <div className="tableRow">
          {' '}
          <span>Year</span> <span>info</span>{' '}
        </div>
        <div className="tableRow">
          {' '}
          <span>Doors</span> <span>info</span>{' '}
        </div>
        <div className="tableRow">
          {' '}
          <span>AC</span> <span>info</span>{' '}
        </div>
        <div className="tableRow">
          {' '}
          <span>Transmission</span> <span>info</span>{' '}
        </div>
        <div className="tableRow">
          {' '}
          <span>Fuel</span> <span>info</span>{' '}
        </div>
      </div>
      <button type="button" className="btn reserveBtn">
        RESERVE NOW
      </button>
    </div>
  );
}
