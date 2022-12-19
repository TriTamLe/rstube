import "./preview.css";

import { useEffect, useState } from "react";

function ChannelPreview({ channel, callbackExit, addCallback, allchannels }) {
  const [isFollowed, setIsFollowed] = useState(false);

  const checkFollowed = (id) => {
    console.log(allchannels);
    const check = allchannels.some((_channel) => _channel.channelId === id);
    console.log("isFl " + id + "" + check);
    return check;
  };

  const followNew = () => {
    setIsFollowed(true);
    addCallback(channel.channelId, channel.title);
    callbackExit();
  };

  useEffect(() => {
    setIsFollowed(checkFollowed(channel.channelId));
  }, []);

  return (
    <div className="previewChannel" id={channel.channelId}>
      <div
        className="thumbnail"
        style={{
          backgroundImage: `url(${channel.thumbnail})`,
        }}
      ></div>
      <div className="title">{channel.title}</div>
      <div className="followBtn">
        {!isFollowed ? (
          <button id="follow" onClick={followNew}>
            Follow
          </button>
        ) : (
          <button id="followed">Followed</button>
        )}
      </div>
    </div>
  );
}

export default ChannelPreview;
