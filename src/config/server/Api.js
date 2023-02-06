const PORT = 3001;
const domain = 'localhost';

export const api = {
  link: 'https://www.youtube.com/feeds/videos.xml?channel_id=',
  response: {
    method: 'GET',
  },
};

export const youtbeDataAPI = {
  KEY: 'AIzaSyBsSf8gY1TuHSJ0rTTgCWMyAd8kTDPDNbk',
};

export const serverAPIs = {
  server: `http://${domain}:${PORT}/`,
  GETheaders: {
    Accept: '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    Connection: 'keep-alive',
  },
  POSTheader: {
    Accept: '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    Connection: 'keep-alive',
    'Content-Type': 'application/json',
  },
  routes: {
    users: {
      signIn: 'user/signin',
      register: 'user/register',
    },
    channels: {
      load: 'channels/load',
      add: 'channels/add',
      delete: 'channels/',
    },
  },
};
