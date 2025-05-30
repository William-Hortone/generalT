import { CompanyDesc, Footer, Navbar } from "../components";
import { aboutLinksData, dataAboutImages, dataImages } from "../constants/data";
import { CompanyAbout, IntroHead } from "../containers";

const About = () => {
  return (
    <>
      <section className="">
        <Navbar bg='black' />
        <IntroHead text="About " dataImages={dataAboutImages} linksData={aboutLinksData} />
        <CompanyAbout />
        <CompanyDesc />
        <Footer />
        {/* <p>about</p> */}
      </section>
    </>
  );
};

export default About;
