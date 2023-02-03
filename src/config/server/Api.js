const PORT = process.env.port || 3001;

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
  server: `http://localhost:${PORT}/`,
  headers: {
    Host: '<calculated when request is sent>',
    'User-Agent': 'PostmanRuntime/7.30.1',
    Accept: '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    Connection: 'keep-alive',
  },
  postheader: {
    Host: '<calculated when request is sent>',
    'User-Agent': 'PostmanRuntime/7.30.1',
    Accept: '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    Connection: 'keep-alive',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlYWNoZXIiLCJmdWxsTmFtZSI6Ik5ndXnhu4VuIFbEg24gTmd1ecOqbiIsIm1zc3YiOiJOb25lIiwiY2xhc3MiOiJUZWFjaGVyIiwicm9sZXMiOlsiVGVhY2hlciIsIlN0dWRlbnQiXSwiX2lkIjoiNjM4NDViM2Q5ODc0MjViYzRiZTk2MzE2IiwiaWF0IjoxNjcwNTU5ODU2LCJleHAiOjE2NzMxNTE4NTZ9.qj2GpikM8BpXhVFqC3tr0Kwq8s4ZxjNDiS7JpNoryWY',
    'Content-Type': 'application/json',
    'Content-Length': '<calculated when request is sent>',
  },
};
