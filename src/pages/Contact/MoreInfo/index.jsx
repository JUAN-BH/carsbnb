import { IconMailFilled, IconPhoneFilled } from '@tabler/icons-react';
import PrimaryBtn from '../../../global/PrimaryBtn';

export default function MoreInfo() {
  return (
    <section className="moreInfo marginContainer">
      <article className="moreInfo__intro">
        <h1>Need additional information?</h1>
        <p className="moreInfo__intro__data">
          A multifaceted professional skilled in multiple fields of research,
          development as well as a learning specialist. Over 15 years of
          experience.
        </p>
        <p className="moreInfo__intro__contact">
          <IconPhoneFilled /> (562) 498-4600
        </p>
        <p className="moreInfo__intro__contact">
          <IconMailFilled /> carsbnb@gmail.com
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://xpeedstudio.com/"
          className="link"
        >
          Desing by XpeedStudio
        </a>
      </article>
      <article className="moreInfo__form">
        <form>
          <label htmlFor="name" className="">
            <p>
              Full Name <span className="highlightTxt">*</span>
            </p>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="E.g: Juan Carlos"
            />
          </label>
          <label htmlFor="email" className="">
            <p>
              Email Address<span className="highlightTxt">*</span>
            </p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="mail@example.com"
            />
          </label>
          <label htmlFor="theme" className="">
            <p>
              Tell me about it<span className="highlightTxt">*</span>
            </p>
            <textarea
              name="theme"
              id="theme"
              cols="30"
              rows="10"
              placeholder="Write here"
            />
          </label>
          <PrimaryBtn>
            <IconMailFilled />
            Send Message
          </PrimaryBtn>
        </form>
      </article>
    </section>
  );
}
