import React from "react";
import ErrorPage from "../components/ErrorPage/Errorp";
import Header from "../components/Layout/Header/header";
import Footer from "../components/Layout/Footer/footer";

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