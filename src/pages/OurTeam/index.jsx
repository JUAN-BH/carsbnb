import { Helmet } from 'react-helmet';
import GHero from '../../global/GHero';
import PromotionG from '../../global/PromotionG';
import Team from './Team';

export default function OurTeam() {
  return (
    <>
      <Helmet>
        <title>Carsbnb - Our team</title>
      </Helmet>
      <GHero pageTitle="Our team" />
      <Team />
      <PromotionG />
    </>
  );
}
