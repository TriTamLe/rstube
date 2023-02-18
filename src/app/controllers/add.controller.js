import logo from '../../../src/RSTubeLogo.png';
import { GetListByKeyword } from 'youtube-search-api';

class Adding {
  fetchingChannel = (text, limit, checkFollowed, setPreview) => {
    GetListByKeyword(text, false, limit, [{ type: 'channel' }])
      .then(res => {
        console.log(res);
        console.log('fetching promises....');
        const promises = res.items.map(item => {
          return new Promise((resolve, reject) => {
            const channelThumbnail = item.thumbnail.thumbnails[1].url;
            const option = {
              method: 'GET',
              mode: 'cors',
              'Content-Type': 'aplication/json',
            };
            fetch(channelThumbnail, option)
              .then(response => {
                const channel = {
                  channelId: item.id,
                  title: item.title,
                  thumbnail: logo,
                  isFollowed: checkFollowed(item.id),
                };
                if (response.ok) {
                  channel.thumbnail = channelThumbnail;
                }
                resolve(channel);
              })
              .catch(err => {
                console.log(err);
                reject();
              });
          });
        });

        console.log('fetching promise dot all....');

        Promise.all(promises)
          .then(channels => {
            setPreview(prev => channels);
          })
          .then(() => {
            console.log('fetching done');
          })
          .catch(err => {
            console.log("can't fetch", err);
          });
      })
      .then(() => {
        const firstPre = document.getElementById('preview_0');
        if (firstPre !== null)
          firstPre.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
      })
      .catch(err => {
        console.log('ERROR!');
        console.log(err);
      });
  };
}

export default new Adding();
