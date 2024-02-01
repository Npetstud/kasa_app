import React from "react";
import Header from "../components/Layout/Header/header";
import Footer from "../components/Layout/Footer/footer";
import Banner from "../components/Banner/banner";
import imgBannerAbout from "../Asset/Images/Banner/aboutBanner.png";
import Collapse from "../components/Collapse/Collapse";
import CollapseData from "../data/Collapse.json";

const About = () => {
  return (
    <div className="about">
      <Header />
      <main>
        <Banner image={imgBannerAbout} titre="" />

        <div className="collapse">
          <div className="collapse__dropdown">
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