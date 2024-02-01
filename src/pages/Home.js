import React from "react";
import Banner from "../components/Banner/banner";
import Gallery from "../components/Gallery/Gallery";
import Header from "../components/Layout/Header/header";
import Footer from "../components/Layout/Footer/footer";
import imgHomeBanner from "../Asset/Images/Banner/Image_banner.png";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Home;