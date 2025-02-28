import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

const VideoModal = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      {/* Custom Channel Modal */}
      <ModalVideo
        channel="custom" // Use the custom channel
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        url="/joinus.mp4" // Path to your local video
        allowFullScreen
        ratio="16:9"
      />

      {/* Button to open the modal */}
      <button className="video-btn" onClick={() => setOpen(true)}>
        <i className="flaticon-play"></i>
      </button>
    </React.Fragment>
  );
};

export default VideoModal;
