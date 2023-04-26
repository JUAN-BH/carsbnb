import React, { useState } from 'react';
import {
  IconCalendarEvent,
  IconCar,
  IconMapPinFilled,
} from '@tabler/icons-react';

export default function BookCarIntro() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (event) => {
    const { value } = event.target;
    setStartDate(value);
    setEndDate(value);
  };

  const handleBookInfo = (e) => {
    e.preventDefault();
    const dates = {
      startDate,
      endDate,
    };
    console.log(dates);
  };

  return (
    <section className="bookCarIntro marginContainer">
      <h2 className="bookCarIntro__title">Book a car </h2>
      <form className="bookCarIntro__form" onSubmit={handleBookInfo}>
        <label htmlFor="carType" className="bookCarIntro__form__inputCon">
          <p>
            <IconCar /> Select your car type
          </p>
          <input type="text" name="carType" id="carType" />
        </label>
        <label htmlFor="pickupCar" className="bookCarIntro__form__inputCon">
          <p>
            <IconMapPinFilled /> Pick-up
          </p>
          <input type="text" name="pickupCar" id="pickupCar" />
        </label>
        <label htmlFor="dropOfcar" className="bookCarIntro__form__inputCon">
          <p>
            <IconMapPinFilled /> Drop-of
          </p>
          <input type="text" name="dropOfcar" id="dropOfcar" />
        </label>
        <label htmlFor="pickupDate" className="bookCarIntro__form__inputCon">
          <p>
            <IconCalendarEvent /> Pick-up date
          </p>

          <input
            type="datetime-local"
            name="pickupDate"
            id="pickupDate"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </label>
        <label htmlFor="dropOfDate" className="bookCarIntro__form__inputCon">
          <p>
            <IconCalendarEvent /> Drop-of date
          </p>

          <input
            type="datetime-local"
            name="dropOfDate"
            id="dropOfDate"
            value={endDate}
            min={startDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <button type="submit" className="btn btnForm primaryBtn">
          Search
        </button>
      </form>
    </section>
  );
}
