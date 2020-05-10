import React from "react";
import classes from "./VideoCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export const VideoCard = ({
  videoId,
  videoTitle,
  videoThumbnail,
}: {
  videoId: string;
  videoTitle: string;
  videoThumbnail: { url: string; height: number; width: number };
}) => {
  const download = async (videoId: string) => {
    const response = await fetch(`/download/${videoId}`);

    window.location.href = response.url;
  };

  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}>
        <img
          src={videoThumbnail.url}
          alt={`Thumbnail of the video: ${videoTitle}`}
          className={classes.thumbnail}
        />
        <FontAwesomeIcon
          className={classes.downloadButton}
          icon={faDownload}
          onClick={() => {
            download(videoId);
          }}
        />
      </div>
      <a
        className={classes.title}
        href={`https://www.youtube.com/watch?v=${videoId}`}
        rel="noopener noreferrer"
        target="_blank"
        title={videoTitle}
      >
        {videoTitle}
      </a>
    </div>
  );
};
