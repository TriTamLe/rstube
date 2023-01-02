import "./preview.css";

import { useEffect, useState } from "react";
import { click } from "@testing-library/user-event/dist/click";

function ChannelPreview({ channel, callbackExit, addCallback, allchannels }) {
  const isFollowed = channel.isFollowed;
  const previewID = "followBtn" + channel.channelId;

  const followNew = () => {
    document.getElementById(previewID).classList.toggle("clicked");
    addCallback(channel.channelId, channel.title);
  };

  return (
    <div className="previewChannel" id={channel.channelId}>
      <div
        className="thumbnail"
        style={{
          backgroundImage: `url(${channel.thumbnail})`,
        }}
      ></div>
      <div className="title">{channel.title}</div>
      <div
        className={isFollowed ? "followBtn clicked" : "followBtn"}
        id={previewID}
      >
        <button className="following">Following</button>
        <button className="follow" onClick={followNew}>
          Follow
        </button>
      </div>
    </div>
  );
}

export default ChannelPreview;
