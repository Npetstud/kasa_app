import React from "react";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import Banner from "../components/Banner/banner";
import imgBannerAbout from "../Asset/Images/Banner/aboutBanner.png";
import Collapse from "../components/Collapse/Collapse";
import CollapseData from "../data/Collapse.json";

const About = () => {
  return (
    <div>
      <Header />
      <main>
        <Banner image={imgBannerAbout} titre="" />

        <div>
          <div>
            {CollapseData.map((item) => {
              return (
                <div key={item.id}>
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;