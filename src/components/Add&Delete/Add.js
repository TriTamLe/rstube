import { useEffect, useState } from "react";
import "./Add.css";
import ChannelPreview from "./ChannelPreview";
import { GetListByKeyword } from "youtube-search-api";

function Add({ callback, addCallback, allchannels }) {
  const [_preview, setPreview] = useState([]);
  const limit = 7;

  const checkFollowed = (id) => {
    //console.log(allchannels);
    const check = allchannels.some((_channel) => _channel.channelId === id);
    //console.log("isFl " + id + " " + check);
    return check;
  };

  const fetchingData = (e) => {
    GetListByKeyword(e.target.value, false, limit, [{ type: "channel" }])
      .then((res) => {
        console.log(res);
        const channels = res.items.map((item) => {
          const channel = {
            channelId: item.id,
            thumbnail: item.thumbnail.thumbnails[1].url,
            title: item.title,
            isFollowed: checkFollowed(item.id),
          };
          return channel;
        });

        setPreview((prev) => channels);
      })
      .catch((err) => {
        console.log("ERROR!");
        console.log(err);
      });
  };

  const exitAdding = () => {
    callback(false);
  };

  return (
    <div className="adding">
      <div className="header">
        <div className="searchChannel">
          <input type="text" onChange={fetchingData} id="inputChannel" />
        </div>
        <div className="exit">
          <div
            className="X"
            onClick={() => {
              exitAdding(1);
            }}
          >
            X
          </div>
        </div>
      </div>

      <div className="preview">
        {_preview.map((channel) => {
          return (
            <ChannelPreview
              channel={channel}
              callbackExit={exitAdding}
              addCallback={addCallback}
              allchannels={allchannels}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Add;
