import React from "react";
import DownloadPage from "../../components/DownloadPage/DownloadPage";
import Header from "../../components/Header/Header";
import Stream from "../../components/Stream/Stream";

const Home = () => {
  return (
    <div>
      <Header />
      <DownloadPage />
      <Stream />
    </div>
  );
};

export default Home;
