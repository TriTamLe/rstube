import { serverAPIs } from './Api';

class Server {
  getFromServer(bool, setAllChannel, setContentID) {
    const inputOptions = {
      method: 'GET',
      headers: serverAPIs.headers,
    };
    fetch(serverAPIs.server + 'channels/load', inputOptions)
      .then(rs => rs.json())
      .then(channels => {
        setAllChannel(prev => {
          if (bool) setContentID(channels[0].channelId);
          console.log(channels);
          return channels;
        });
      });
  }
  addChannel(id, title, setAllChannel, setContentID) {
    const inputOptions = {
      method: 'POST',
      headers: serverAPIs.postheader,
      body: JSON.stringify({
        channelId: id,
        title: title,
      }),
    };

    fetch(serverAPIs.server + 'channels/add', inputOptions)
      .then(res => res.json())
      .then(result => {
        if (result.added === 'done') {
          this.getFromServer(false, setAllChannel, setContentID);
          return;
        }
        console.log('error while adding!');
      })
      .catch(err => console.log(err));
  }
  deleteChannel(id, setAllChannel, setContentID) {
    const inputOptions = {
      method: 'DELETE',
      headers: serverAPIs.postheader,
    };

    fetch(serverAPIs.server + `channels/${id}`, inputOptions)
      .then(rs => rs.json())
      .then(rs => {
        if (rs.deleted === 'done') {
          console.log('deleted done');
          this.getFromServer(true, setAllChannel, setContentID);
          return;
        }
        console.log('error while deleting');
      });
  }
}

export default new Server();
