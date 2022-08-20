import React from "react";
import DownloadPage from "../../components/DownloadPage/DownloadPage";
import Header from "../../components/Header/Header";
import Kids from "../../components/Kids/Kids";
import Stream from "../../components/Stream/Stream";
import Smart from "../../components/Smart/Smart";

const Home = () => {
  return (
    <div>
      <Header />
      <Smart />
      <DownloadPage />
      <Stream />
      <Kids />
    </div>
  );
};

export default Home;
