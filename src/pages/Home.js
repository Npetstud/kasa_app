import React from "react";
import Banner from "../components/Banner/banner";
import Footer from "../components/Footer/footer";
import Gallery from "../components/Gallery/Gallery";
import Header from "../components/Header/header";
import imgHomeBanner from "../Asset/Images/Banner/Image_banner.png";

const Home = () => {
  return (
    <div>
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