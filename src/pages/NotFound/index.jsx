import carImg from './assets/carImg.jpg';

export default function NotFound() {
  return (
    <section className="marginContainer">
      <article className="notFoundCon">
        <figure className="notFoundCon__img">
          <img src={carImg} alt="car lost" />
        </figure>
        <div className="notFoundCon__info">
          <h1>Oops</h1>
          <p>Page not found</p>
        </div>
      </article>
    </section>
  );
}
