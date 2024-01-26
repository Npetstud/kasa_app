import React from "react";
import ErrorPage from "../components/ErrorPage/Errorp";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

const NoPage = () => {
  return (
    <>
      <div className="NoPage">
        <Header />
        <main>
          <ErrorPage />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NoPage;