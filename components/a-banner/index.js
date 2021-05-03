import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="banner">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="JuMspVWT9Eo"
        onClose={() => setOpen(false)}
      />

      <button onClick={() => setOpen(true)}>VIEW DEMO</button>
      <style jsx>
        {`
          .banner {
            width: 100vw;
            min-height: 100vh;
            background: #ebebeb;
          }
          button {
            width: 100px;
            height: 50px;
            background: #1c1c1c;
            color: white;
            margin: 1em;
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
