import React from "react";
import FicheLogementDisplay from "../components/Fichelogement/FicheLogementDisplay";
import Header from "../components/Layout/Header/header";
import Footer from "../components/Layout/Footer/footer";

const FichLogment = () => {
  return (
    <div className="logement">
      <Header />
      <main>
        <FicheLogementDisplay />
      </main>

      <Footer />
    </div>
  );
};

export default FichLogment;