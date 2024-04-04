import React from 'react';
import styles from './VideoSection.module.css';

const YouTubeEmbed: React.FC<{ embedId: string }> = ({ embedId }) => (
  <div className="video-container">
    <div className="video-responsive">
      <iframe
        width="1020"
        height="630"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

export default YouTubeEmbed;
