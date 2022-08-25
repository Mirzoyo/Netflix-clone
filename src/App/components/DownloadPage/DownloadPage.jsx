import React from "react";
import "./DownloadPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
const DownloadPage = () => {
  return (
    <section className="download">
      <div className="left_d">
        <div className="download_status">
          <div className="image_download">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              alt=""
            />
            <div className="content_image">
              <h1>Stranger Things</h1>
              <p>Downloading...</p>
            </div>
          </div>
          <FontAwesomeIcon icon={faCircleCheck} />
        </div>
      </div>
      <div className="right_d">
        <h1>Download your shows to watch offline.</h1>
        <h2>Save your favorites easily and always have something to watch.</h2>
      </div>
    </section>
  );
};

export default DownloadPage;
