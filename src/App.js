import "./App.css";
import Navigate from "./components/Navigate/Navigate";
import Content from "./components/Content/Content";
import Add from "./components/Add&Delete/Add.";
import { useEffect, useState } from "react";
import io from "socket.io-client";

//Tạo socket kết nối đến ip của server
const socket = io.connect("http://192.168.183.133:3001/");

//component App
function App() {
  //Tạo mảng các kênh theo dõi. Tạo giá trị mặc định
  const [allchannels, setAllChannel] = useState([
    {
      channelId: "#default",
      title: "#default",
    },
  ]);

  //Hàm lấy danh sách các kênh theo dõi từ server
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

  //Mỗi khi component reload sẽ lấy lại thông tin từ server
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

  //Biến lưu ID của kênh muốn xem nội dung
  //Mặc định biến này là kênh đầu tiên của danh sách
  const [contentID, setContentID] = useState(allchannels[0].channelId);
  //Biến xác định xem người dùng có đang thêm kênh hay không
  //Mặc định là không
  const [isAdding, setIsAdding] = useState(false);

  //Hàm set lại id của kênh cần xem nội dung
  const reloadID = (id) => {
    setContentID(id);
  };

  //Hàm xóa kênh
  const deleteChannel = (id) => {
    console.log("deleting: " + id);
    //Emit sự kiện xóa kênh đến server
    //Gửi kèm id của kênh cần xóa
    socket.emit("delete_channel", id);
    //Nhận lại sự kiện đã xóa từ server
    //Reload lại trang để lấy lại danh sách các kênh
    socket.on("delete_done", (mess) => {
      console.log(mess);
      setContentID(allchannels[0].channelId);
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
    //Gửi kèm thông tin của kênh mới
    socket.emit("add_channel", newChannel);
    //Nhận lại sự kiện đã thêm kênh từ server
    //Reload lại trang để lấy lại danh sách kênh
    socket.on("add_done", (data) => {
      console.log(data);
      getFromServer(true);
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

  //Mã HTML trả về
  return (
    <div className="App">
      <div className="layOut">
        <div className="header">
          <div id="logo"></div>
          <div id="webName">RSTube</div>
        </div>

        <div className="boards">
          <Navigate all={allchannels} reloadID={reloadID} />
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
    </div>
  );
}

export default App;
