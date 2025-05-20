import { Footer, Hero, Navbar } from "../components";
import { CompanyOverview, Infrastructure } from "../containers";

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-white">
      <Navbar />
      <Hero />
      {/* <div className="md:my-[10rem] bg-black text-black w-full bg-rfed-400  gallery-caption">
        <TextAnimation
          textContent={`We build bridges between China and Africa, offering a diverse range of products tailored to meet various needs.\nWhether it’s cutting-edge electronics, luxurious beauty products, or innovative agricultural machinery,\nwe meticulously source items to ensure quality and reliability.`}
        />
      </div> */}
      <Infrastructure />
      <CompanyOverview />
      {/* <ViewTeam /> */}
      {/* <HorizontalScroll /> */}
      <Footer />
    </div>
  );
};

export default Home;
