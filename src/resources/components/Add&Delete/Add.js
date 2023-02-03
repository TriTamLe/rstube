import { useEffect, useState } from 'react';
import '../../css/Add&Delete/Add.css';
import ChannelPreview from './ChannelPreview';
import logo from '../../../RSTubeLogo.png';
import { GetListByKeyword } from 'youtube-search-api';

function Add({ openCallback, addCallback, allchannels }) {
  const [_preview, setPreview] = useState([]);
  const limit = 7;

  const checkFollowed = id => {
    const check = allchannels.some(_channel => _channel.channelId === id);
    return check;
  };

  const fetchingData = text => {
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

  const exitAdding = () => {
    openCallback(false);
  };

  useEffect(() => {
    const inputChannel = document.getElementById('inputChannel');
    inputChannel.focus();
    inputChannel.addEventListener('keydown', e => {
      if (e.keyCode === 13) {
        e.preventDefault();
        fetchingData(e.target.value);
        inputChannel.blur();
      }
    });
  }, []);

  return (
    <div className='adding'>
      <div className='header'>
        <div className='searchChannel'>
          <input
            type='text'
            id='inputChannel'
            autoComplete='off'
            onFocus={() => {
              fetchingData('');
            }}
          />
        </div>
        <div className='exit'>
          <div
            className='X'
            onClick={() => {
              exitAdding();
            }}
          >
            X
          </div>
        </div>
      </div>

      <div className='preview'>
        {_preview.map((channel, index) => {
          return (
            <ChannelPreview
              channel={channel}
              addCallback={addCallback}
              key={'preview_' + index}
              id={'preview_' + index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Add;
