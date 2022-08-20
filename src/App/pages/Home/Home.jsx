import React from "react";
import DownloadPage from "../../components/DownloadPage/DownloadPage";
import Header from "../../components/Header/Header";
import Smart from "../../components/Smart/Smart";

const Home = () => {
  return (
    <div>
      <Header />
      <Smart />
      <DownloadPage />
    </div>
  );
};

export default Home;
