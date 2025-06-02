import { CompanyDesc, Footer, Navbar } from "../components";
import { aboutLinksData, dataAboutImages } from "../constants/data";
import { CompanyAbout, IntroHead, TeamOverview } from "../containers";

const About = () => {
  return (
    <>
      <section className="bg-whidte">
        <Navbar bg='black' />
        <IntroHead text="About " dataImages={dataAboutImages} linksData={aboutLinksData} />
        <CompanyAbout />
        <CompanyDesc />
        <div className="bg-white">
          <TeamOverview />
        </div>

        <Footer />
        {/* <p>about</p> */}
      </section>
    </>
  );
};

export default About;
