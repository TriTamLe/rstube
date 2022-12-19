import "./App.css";
import Navigate from "./components/Navigate/Navigate";
// import Test from "./Test";
import Content from "./components/Content/Content";
import Add from "./components/Add&Delete/Add.";
import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://192.168.183.133:3001"); //192.168.183.133

function App() {
  let boards = JSON.parse(localStorage.getItem("boards"));
  // let allchannels = JSON.parse(localStorage.getItem("allchannels"));
  const [allchannels, setAllChannel] = useState([
    {
      channelId: "#default",
      title: "#default",
    },
  ]);

  const getFromServer = (bool) => {
    socket.emit("loadPage", { message: "loaded" });
    socket.on("store", (data) => {
      setAllChannel((prev) => {
        console.log(data);
        return data;
      });
      if (bool) window.location.reload(true);
    });
  };

  useEffect(() => {
    getFromServer(false);
  }, []);

  useEffect(() => {
    //set su kien click cho cac menuite
    const menu_addChannel = document.getElementById("addMenu#addChannel");
    menu_addChannel.addEventListener("click", () => {
      setIsAdding(true);
    });

    return () => {
      menu_addChannel.removeEventListener("click", () => {
        setIsAdding(true);
      });
    };
  }, []);

  const [contentID, setContentID] = useState(allchannels[0].channelId);
  const [isAdding, setIsAdding] = useState(false);

  const reloadID = (id) => {
    setContentID(id);
  };

  const deleteChannel = (id) => {
    console.log("deleting: " + id);
    socket.emit("delete_channel", id);
    socket.on("delete_done", (mess) => {
      console.log(mess);
      getFromServer(true);
    });

    setContentID(allchannels[0].channelId);
  };

  const addChannel = (id, title) => {
    const newChannel = {
      channelId: id,
      title: title,
    };

    socket.emit("add_channel", newChannel);
    socket.on("add_done", (data) => {
      console.log(data);
      getFromServer(true);
    });
  };

  const getContentID = () => {
    return contentID;
  };

  const setIsAddingCallback = (bool) => {
    setIsAdding(bool);
  };

  return (
    <div className="App">
      <div className="layOut">
        <div className="header">
          <div id="logo"></div>
          <div id="webName">RSTube</div>
        </div>

        <div className="boards">
          <Navigate boards={boards} all={allchannels} reloadID={reloadID} />
        </div>

        {allchannels[0].channelId !== "#default" && (
          <div className="articles">
            {!isAdding ? (
              <Content
                getContentID={getContentID()}
                deleteChannel={deleteChannel}
              />
            ) : (
              <Add
                callback={setIsAddingCallback}
                addCallback={addChannel}
                allchannels={allchannels}
              />
            )}
          </div>
        )}
      </div>
      {/* <Test/> */}
    </div>
  );
}

export default App;
