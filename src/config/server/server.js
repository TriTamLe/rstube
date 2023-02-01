import io from 'socket.io-client';

const PORT = process.env.port || 3001;
const socket = io.connect(`http://localhost:${PORT}/`);

class Server {
  getFromServer(bool, setAllChannel, setContentID) {
    socket.emit('loadPage', { message: 'loaded' });
    socket.on('store', data => {
      setAllChannel(prev => {
        if (bool) setContentID(data[0].channelId);
        return data;
      });
    });
  }
  addChannel(id, title, setAllChannel, setContentID) {
    const newChannel = {
      channelId: id,
      title: title,
    };
    socket.emit('add_channel', newChannel);
    socket.on('add_done', data => {
      this.getFromServer(false, setAllChannel, setContentID);
    });
  }
  deleteChannel(id, setAllChannel, setContentID) {
    //Emit sự kiện xóa kênh đến server
    socket.emit('delete_channel', id);
    //Nhận lại sự kiện đã xóa từ server
    socket.on('delete_done', mess => {
      console.log(mess);
      this.getFromServer(true, setAllChannel, setContentID);
    });
  }
}

export default new Server();
