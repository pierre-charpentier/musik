import React, { useState, useCallback } from "react";
import { VideoGrid } from "./VideoGrid";
import classes from "./Musik.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Musik = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState<
    {
      id: string;
      thumbnail: { url: string; width: number; height: number };
      title: string;
    }[]
  >([]);

  const fetchVideos = useCallback(async () => {
    if (searchQuery.trim() !== "") {
      try {
        const response = await fetch(`/search/${searchQuery}`);
        setVideos(await response.json());
      } catch (e) {
        console.log(e);
      }
    }
  }, [searchQuery]);

  return (
    <div>
      <div className={classes.header}>
        <h1 className={classes.title}>Musik</h1>
        <div className={classes.inputContainer}>
          <input
            className={classes.searchQueryInput}
            type="text"
            onChange={(inputEvent) => {
              setSearchQuery(inputEvent.target.value);
            }}
            placeholder="Search a YouTube video"
            value={searchQuery}
            onKeyUp={(e) => {
              e.key === "Enter" && fetchVideos();
            }}
          />
          <FontAwesomeIcon
            className={classes.searchIcon}
            icon={faArrowRight}
            onClick={fetchVideos}
          />
        </div>
      </div>
      <VideoGrid videos={videos} />
    </div>
  );
};
