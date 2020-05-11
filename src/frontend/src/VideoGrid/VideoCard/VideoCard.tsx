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
  const title = new DOMParser().parseFromString(videoTitle, "text/html");

  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}>
        <img
          src={videoThumbnail.url}
          alt={`Thumbnail of the video: ${videoTitle}`}
          className={classes.thumbnail}
        />
        <a
          href={`/download/${videoId}`}
          type="application/data"
          download
          className={classes.downloadButton}
        >
          <FontAwesomeIcon icon={faDownload} />
        </a>
      </div>
      <a
        className={classes.title}
        href={`https://www.youtube.com/watch?v=${videoId}`}
        rel="noopener noreferrer"
        target="_blank"
        title={videoTitle}
      >
        {title.querySelector("body")?.innerText}
      </a>
    </div>
  );
};
