import { IconCircleCheckFilled } from '@tabler/icons-react';
import PrimaryBtn from '../../../../global/PrimaryBtn';
import LearnMoreBtn from '../LearnMoreBtn';

export default function HeroInfo() {
  return (
    <aside className="hero__content">
      <article className="hero__content__info">
        <h2>Plan your trip now</h2>
        <h1 className="hero__content__info__title heroTitle">
          Save <span className="highlightTxt">big</span> with our car rental
        </h1>
        <p>
          Rent the car of your dreams. Unbeatable prices, unlimited miles,
          flexible pick-up options and much more.
        </p>
      </article>
      <article className="hero__content__btns">
        <PrimaryBtn>
          Book Car <IconCircleCheckFilled />
        </PrimaryBtn>
        <LearnMoreBtn />
      </article>
    </aside>
  );
}
