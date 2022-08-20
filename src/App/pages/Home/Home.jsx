import React from "react";
import DownloadPage from "../../components/DownloadPage/DownloadPage";
import FAQs from "../../components/FAQs/FAQs";
import Header from "../../components/Header/Header";
import Stream from "../../components/Stream/Stream";

const Home = () => {
  return (
    <div>
      <Header />
      <DownloadPage />
      <Stream />
      <FAQs />
    </div>
  );
};

export default Home;
