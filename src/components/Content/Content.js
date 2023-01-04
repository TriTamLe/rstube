import { useEffect } from "react";
import { api } from "../../Api";
import Artical from "./Artical/Artical";
import DeleteChannelSVG from "./ContentSVGs/DeleteChannelSVG";
import ReloadChannelSVG from "./ContentSVGs/ReloadChannelSVG";
import { useState } from "react";
import "./Content.css";

function Content(props) {
  const [_content, setContent] = useState({
    channelId: "UCsT0YIqwnpJCM-mx7-gSA4Q",
    author: "Vui lòng chọn kênh",
    articals: [],
  });

  function xmlToJson(xml) {
    // Create the return object
    var obj = {};

    if (xml.nodeType === 1) {
      // element
      // do attributes
      if (xml.attributes.length > 0) {
        obj["@attributes"] = {};
        for (var j = 0; j < xml.attributes.length; j++) {
          var attribute = xml.attributes.item(j);
          obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType === 3) {
      // text
      obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
      for (var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;
        if (typeof obj[nodeName] == "undefined") {
          obj[nodeName] = xmlToJson(item);
        } else {
          if (typeof obj[nodeName].push == "undefined") {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(xmlToJson(item));
        }
      }
    }
    return obj;
  }

  const loadContent = () => {
    const contentID = props.getContentID;
    console.log("contentID:", contentID);
    fetch(api.link + contentID, api.response)
      .then((response) => response.text())
      .then((data) => {
        console.log("data: ", data);
        const parser = new DOMParser();
        const xlm = parser.parseFromString(data, "application/xml");
        const jsonObject = xmlToJson(xlm);
        return jsonObject;
      })
      .then((jsonObj) => {
        console.log(jsonObj);
        const _articals = jsonObj.feed.entry.map((entr) => {
          const _artical = {
            channelId: entr.id["#text"],
            title: entr.title["#text"],
            link: entr.link["@attributes"].href,
            author: entr.author.name["#text"],
            views:
              entr["media:group"]["media:community"]["media:statistics"][
                "@attributes"
              ]["views"],
            updateAt: entr.published["#text"],
            thumbnail:
              entr["media:group"]["media:thumbnail"]["@attributes"].url,
            discription: entr["media:group"]["media:description"]["#text"],
          };
          return _artical;
        });
        const contentObject = {
          channelId: props.getContentID,
          author: jsonObj.feed.author.name["#text"],
          articals: _articals,
        };

        setContent((prev) => contentObject);
      })
      .catch((err) => {
        console.log("ERROR");
        console.log(err);
      });
  };

  const deleteContent = (id) => props.deleteChannel(id);

  useEffect(() => {
    console.log(_content);
    loadContent();
    const firstArtical = document.getElementById("0");

    if (firstArtical !== null) {
      firstArtical.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [props.getContentID]);

  return (
    <div className="content" id={_content.channelId}>
      <div className="_header">
        <div className="title">
          <h1>{_content.author}</h1>
          <h2>{api.link + props.getContentID}</h2>
        </div>

        <div id="content-icon">
          <DeleteChannelSVG
            onClick={() => {
              deleteContent(_content.channelId);
            }}
          />
          <ReloadChannelSVG
            onClick={() => {
              loadContent();
            }}
          />
        </div>
      </div>
      <div className="_articals">
        {_content.articals.map((artical, index) => {
          return (
            <Artical key={artical.channelId} id={index} artical={artical} />
          );
        })}
      </div>
    </div>
  );
}

export default Content;
