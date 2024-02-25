import carbnbIcon from '../../assets/carbnbIcon4.svg';

export default function NavTitle() {
  return (
    <article className="navHeader__title">
      <img src={carbnbIcon} alt="carbnbIcon" loading="lazy" />
      <h1>
        Cars<span className="highlightTxt">bnbTEST2</span>
      </h1>
    </article>
  );
}
