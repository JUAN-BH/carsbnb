import TeamItem from '../TeamItem';
import miller from './imgs/miller.png';
import diaz from './imgs/diaz.png';
import ross from './imgs/ross.png';
import rivera from './imgs/rivera.png';
import rizz from './imgs/rizz.png';
import hunt from './imgs/hunt.png';

export default function Team() {
  return (
    <section className="team marginContainer">
      <TeamItem img={miller} name="Luke Miller" rol="Salesman" />
      <TeamItem img={diaz} name="Michael Diaz" rol="Product Owner" />
      <TeamItem img={ross} name="Briana Ross" rol="Photographer" />
      <TeamItem img={rivera} name="Lauren Rivera" rol="UX Designer" />
      <TeamItem img={rizz} name="Martin Rizz" rol="Team Lead" />
      <TeamItem img={hunt} name="Kaitlin Hunt" rol="Team Lead" />
    </section>
  );
}
