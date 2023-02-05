import '../css/Home.css';
import Navigate from './Navigate/Navigate';
import Content from './Content/Content';
import Add from './Add&Delete/Add';
import { useEffect, useState } from 'react';
import ChannelServer from '../../config/server/Channelserver';

function Home() {
  const defaultFirstChannel = {
    channelId: '#default',
    title: '....',
  };
  const [allchannels, setAllChannel] = useState([defaultFirstChannel]);
  const [contentID, setContentID] = useState(
    allchannels.length === 0 ? '#default' : allchannels[0].channelId,
  ); //Biến lưu ID của kênh muốn xem nội dung
  const [isAdding, setIsAdding] = useState(false); //Biến xác định xem người dùng có đang thêm kênh hay không

  //Hàm set lại id của kênh cần xem nội dung
  const reloadID = id => {
    console.log('reload');
    setContentID(id);
  };
  //Hàm xóa kênh
  const deleteChannel = id => {
    return ChannelServer.deleteChannel(id, setAllChannel, setContentID);
  };
  //Hàm thêm kênh
  const addChannel = (id, title) => {
    return ChannelServer.addChannel(id, title, setAllChannel, setContentID);
  };

  //callback lấy id của kênh cần xem thông tin
  const getContentID = () => {
    return contentID;
  };

  //callback set trạng thái đang thêm kênh hay không
  const setIsAddingCallback = bool => {
    setIsAdding(bool);
  };

  useEffect(() => {
    ChannelServer.getFromServer(false, setAllChannel, setContentID);
    console.log('allchannels', allchannels);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    //Tạo sự kiện click cho nút thêm kênh
    const menu_addChannel = document.getElementById('addMenu#addChannel');
    menu_addChannel.addEventListener('click', () => {
      setIsAdding(true);
    });

    return () => {
      menu_addChannel.removeEventListener('click', () => {
        setIsAdding(true);
      });
    };
  }, []);

  return (
    <div className='Home'>
      <div className='layOut'>
        <div className='header'>
          <div id='logo'></div>
          <div id='webName'>RSTube</div>
        </div>

        <div className='boards'>
          <Navigate
            all={allchannels}
            reloadID={reloadID}
            exitAdding={() => setIsAddingCallback(false)}
          />
        </div>

        {allchannels[0] !== defaultFirstChannel && (
          <div className='articles'>
            {!isAdding ? (
              <Content
                getContentID={getContentID()}
                deleteChannel={deleteChannel}
              />
            ) : (
              <Add
                openCallback={setIsAddingCallback}
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

export default Home;
