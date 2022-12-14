import "./App.css";
import Navigate from "./components/Navigate/Navigate";
import Content from "./components/Content/Content";
import Add from "./components/Add&Delete/Add.js";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001/"); //Server Client is on a same device

function App() {
  const defaultFirstChannel = {
    channelId: "#default",
    title: "....",
  };
  const [allchannels, setAllChannel] = useState([defaultFirstChannel]);
  //Biến lưu ID của kênh muốn xem nội dung
  //Mặc định biến này là kênh đầu tiên của danh sách
  const [contentID, setContentID] = useState(
    allchannels.length === 0 ? "#default" : allchannels[0].channelId
  );
  //Biến xác định xem người dùng có đang thêm kênh hay không
  //Mặc định là không
  const [isAdding, setIsAdding] = useState(false);

  //Hàm lấy danh sách các kênh theo dõi từ server
  const getFromServer = (bool) => {
    socket.emit("loadPage", { message: "loaded" });
    socket.on("store", (data) => {
      setAllChannel((prev) => {
        console.log("newdata", data);
        if (bool) setContentID(data[0].channelId);
        return data;
      });
    });
  };

  //Hàm set lại id của kênh cần xem nội dung
  const reloadID = (id) => {
    console.log("reload");
    setContentID(id);
  };

  //Hàm xóa kênh
  const deleteChannel = (id) => {
    console.log("deleting: " + id);
    //Emit sự kiện xóa kênh đến server

    socket.emit("delete_channel", id);
    //Nhận lại sự kiện đã xóa từ server

    socket.on("delete_done", (mess) => {
      console.log(mess);
      getFromServer(true);
    });
  };

  //Hàm thêm kênh
  const addChannel = (id, title) => {
    const newChannel = {
      channelId: id,
      title: title,
    };

    //Emit sự kiện thêm kênh đến server

    socket.emit("add_channel", newChannel);
    //Nhận lại sự kiện đã thêm kênh từ server

    socket.on("add_done", (data) => {
      console.log(data);
      getFromServer(false);
    });
  };

  //callback lấy id của kênh cần xem thông tin
  const getContentID = () => {
    return contentID;
  };

  //callback set trạng thái đang thêm kênh hay không
  const setIsAddingCallback = (bool) => {
    setIsAdding(bool);
  };

  useEffect(() => {
    getFromServer(false);
  }, []);

  useEffect(() => {
    //Tạo sự kiện click cho nút thêm kênh
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

  return (
    <div className="App">
      <div className="layOut">
        <div className="header">
          <div id="logo"></div>
          <div id="webName">RSTube</div>
        </div>

        <div className="boards">
          <Navigate
            all={allchannels}
            reloadID={reloadID}
            exitAdding={() => setIsAddingCallback(false)}
          />
        </div>

        {allchannels[0] !== defaultFirstChannel && (
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
    </div>
  );
}

export default App;
