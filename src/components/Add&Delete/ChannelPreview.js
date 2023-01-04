import { useEffect, useState } from "react";
import "./preview.css";

function ChannelPreview({ channel, addCallback, id }) {
  const isFollowed = channel.isFollowed;
  const previewID = "followBtn" + channel.channelId;

  const followNew = () => {
    document.getElementById(previewID).classList.toggle("clicked");
    addCallback(channel.channelId, channel.title);
  };

  return (
    <div className="previewChannel" id={id}>
      <div
        className="thumbnail"
        style={{
          backgroundImage: `url(${channel.thumbnail})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
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
