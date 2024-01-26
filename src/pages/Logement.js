import React from "react";
import FicheLogementDisplay from "../components/Fichelogement/FicheLogementDisplay";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header"

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