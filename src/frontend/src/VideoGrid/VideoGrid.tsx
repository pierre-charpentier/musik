import React from "react";
import { VideoCard } from "./VideoCard";
import classes from "./VideoGrid.module.scss";

export const VideoGrid = ({
  videos,
}: {
  videos: {
    id: string;
    thumbnail: { url: string; width: number; height: number };
    title: string;
  }[];
}) => (
  <div className={classes.grid}>
    {videos.map((videoData) => {
      return (
        <VideoCard
          key={videoData.id}
          videoId={videoData.id}
          videoThumbnail={videoData.thumbnail}
          videoTitle={videoData.title}
        />
      );
    })}
  </div>
);
