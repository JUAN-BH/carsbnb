import { IconMailFilled, IconPhoneFilled } from '@tabler/icons-react';

export default function Footer() {
  return (
    <section className="footer marginContainer">
      <article className="footer__info">
        <div className="footer__info__intro">
          <h2>
            CARS<span className="highlightTxt">BNB</span>
          </h2>
          <p className="footer__info__intro__data">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
          <p className="footer__info__intro__contact">
            <IconPhoneFilled /> (123) 456-7800
          </p>
          <p className="footer__info__intro__contact">
            <IconMailFilled /> carsbnb@gmail.com
          </p>
          <a target="_blank" rel="noreferrer" href="https://xpeedstudio.com/">
            Desing by XpeedStudio
          </a>
        </div>
        <div className="marginT footer__info__company">
          <h2>COMPANY</h2>
          <ul>
            <li>New York</li>
            <li>Careers</li>
            <li>Mobile</li>
            <li>Blog</li>
            <li>How we work</li>
          </ul>
        </div>
        <div className="marginT footer__info__working">
          <h2>WORKING HOURS</h2>
          <ul>
            <li>Mon - Fri: 9:00AM - 9:00PM</li>
            <li>Sat: 9:00AM - 7:00PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
        <div className="marginT footer__info__sub">
          <h2>SUBSCRIPTION</h2>
          <p>Subscribe your Email address for latest news & updates.</p>
          <input type="text" placeholder="Enter mail address" />
          <button type="submit" className="btn primaryBtn subBtn">
            Submit
          </button>
        </div>
      </article>
      <article className="rights">
        <p>
          ©2023 <span className="highlightTxt">Carsbnb</span>. All Rights
          Reserved
        </p>
      </article>
    </section>
  );
}
