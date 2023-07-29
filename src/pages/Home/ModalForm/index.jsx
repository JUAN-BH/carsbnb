import ReactDOM from 'react-dom';
import {
  IconCalendarEvent,
  IconInfoCircleFilled,
  IconMapPinFilled,
  IconX,
} from '@tabler/icons-react';
import { useInitState } from '../../../contexts/initContexts';

export default function ModalForm() {
  const initState = useInitState();
  const handleCloseModal = () => {
    initState.dispatch({ type: 'CLOSE_MODAL' });
  };
  return ReactDOM.createPortal(
    <div className="modalBg">
      <section className="modal">
        <article className="modal__intro">
          <div className="modal__intro__titleCon">
            <h1>COMPLETE RESERVATION</h1>
            <IconX
              className="modal__intro__titleCon__close"
              onClick={handleCloseModal}
            />
          </div>
          <div className="modal__intro__info">
            <p>
              <IconInfoCircleFilled />
              Upon completing this reservation enquiry, you will receive:
            </p>
            <p>
              Your rental voucher to produce on arrival at the rental desk and a
              toll-free customer support number.
            </p>
          </div>
        </article>
        <article className="modal__summary">
          <div className="modal__summary__info">
            <p className="highlightTxt sumTitle">Location & Date</p>
            <ul>
              <li>
                <p className="infoTitle">
                  <IconMapPinFilled /> Pick-Up Date & Time
                </p>
                <p>info</p>
              </li>
              <li>
                <p className="infoTitle">
                  <IconMapPinFilled /> Drop-Off Date & Time
                </p>
                <p>info</p>
              </li>
              <li>
                <p className="infoTitle">
                  <IconCalendarEvent /> Pick-Up Location
                </p>
                <p>info</p>
              </li>
              <li>
                <p className="infoTitle">
                  <IconCalendarEvent /> Drop-Off Location
                </p>
                <p>info</p>
              </li>
            </ul>
          </div>
          <div className="modal__summary__car">
            <p>
              {' '}
              <span>Car:</span> car
            </p>
            <div className="carDisplay">car</div>
          </div>
        </article>
        <article className="modal__personalInfo">
          <h2>Personal Information</h2>
          <form className="modal__personalInfo__form">
            <label htmlFor="firstName" className="pInfo__inputCon">
              <p>
                Frist name<span className="highlightTxt">*</span>
              </p>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name"
              />
            </label>
            <label htmlFor="lastName" className="pInfo__inputCon lastNameInput">
              <p>
                Last Name<span className="highlightTxt">*</span>
              </p>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your last name"
              />
            </label>
            <label htmlFor="phoneNumber" className="pInfo__inputCon">
              <p>
                Phone Number<span className="highlightTxt">*</span>
              </p>
              <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter your phone number"
              />
            </label>
            <label htmlFor="age" className="pInfo__inputCon">
              <p>
                Age<span className="highlightTxt">*</span>
              </p>
              <input type="number" name="age" id="age" placeholder="18" />
            </label>
            <label htmlFor="email" className="pInfo__inputCon emailInput">
              <p>
                Email<span className="highlightTxt">*</span>
              </p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
              />
            </label>
            <label htmlFor="address" className="pInfo__inputCon addressInput">
              <p>
                Address<span className="highlightTxt">*</span>
              </p>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter your address"
              />
            </label>
            <label htmlFor="city" className="pInfo__inputCon cityInput">
              <p>
                City<span className="highlightTxt">*</span>
              </p>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Enter your city"
              />
            </label>
            <label htmlFor="zipCode" className="pInfo__inputCon zipCodeInput">
              <p>
                Zip Code<span className="highlightTxt">*</span>
              </p>
              <input
                type="number"
                name="zipCode"
                id="zipCode"
                placeholder="Enter your zip code"
              />
            </label>
            <label htmlFor="subscribe" className="inputUpdates subscribeInput">
              <input type="checkbox" name="subscribe" id="subscribe" />
              <p>Please send me latest news and updates</p>
            </label>
            <div className="btn btn--modal btnSubmit">
              <button type="submit" className="btn modalBtn">
                Reserve Now
              </button>
            </div>
          </form>
        </article>
      </section>
    </div>,
    document.getElementById('modal'),
  );
}
