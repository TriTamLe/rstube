import "./preview.css";

import { useEffect, useState } from "react";

function ChannelPreview({ channel, callbackExit, addCallback, allchannels }) {
  const [isFollowed, setIsFollowed] = useState(channel.isFollowed);

  const followNew = () => {
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
      <div className={"followBtn " + isFollowed} onClick={followNew}>
        {isFollowed ? "Followed" : "Follow"}
      </div>
    </div>
  );
}

export default ChannelPreview;
