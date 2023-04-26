import carbnbIcon from '../../assets/carbnbIcon4.svg';

export default function NavTitle() {
  return (
    <artcile className="navHeader__title">
      <img src={carbnbIcon} alt="carbnbIcon" loading="lazy" />
      <h1>
        Cars<span className="highlightTxt">bnb</span>
      </h1>
    </artcile>
  );
}
