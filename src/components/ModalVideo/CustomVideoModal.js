import React, { useState } from 'react';

const CustomVideoModal = ({ videoSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      {/* Video Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
            <video controls autoPlay className="video-player">
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Open Modal Button */}
      <button className="video-btn" onClick={() => setIsOpen(true)}>
        <i className="flaticon-play"></i>
      </button>

      {/* Styles */}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          position: relative;
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          max-width: 90%;
          max-height: 90%;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }
        .video-player {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }
        .video-btn {
          cursor: pointer;
          background-color: #007bff;
          border: none;
          color: white;
          padding: 10px 20px;
          border-radius: 4px;
          font-size: 1rem;
        }
      `}</style>
    </React.Fragment>
  );
};

export default CustomVideoModal;
