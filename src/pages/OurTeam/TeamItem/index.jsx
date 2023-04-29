export default function TeamItem({ img, name, rol }) {
  return (
    <article className="team__item">
      <img src={img} alt={name} />
      <div className="team__item__info">
        <h3>{name}</h3>
        <p>{rol}</p>
      </div>
    </article>
  );
}
