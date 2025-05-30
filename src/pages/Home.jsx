import { Footer, Hero, ImageTrailHero, Navbar, ServicesOverview } from "../components";
import { TeamOverview } from "../containers";

const Home = () => {
  return (
    <div className="bg-white ">
      <Navbar />
      <Hero />
      <ImageTrailHero />
      <ServicesOverview />
      <TeamOverview />
      <Footer />
    </div>
  );
};

export default Home;
