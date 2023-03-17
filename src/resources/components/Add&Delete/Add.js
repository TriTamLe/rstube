import { useEffect, useState } from 'react';
import '../../css/Add&Delete/Add.css';
import ChannelPreview from './ChannelPreview';
import adding from '../../../app/controllers/add.controller';

function Add({ openCallback, addCallback, allchannels }) {
  const [_preview, setPreview] = useState([]);
  const [inputText, setInputText] = useState('');
  const limit = 7;

  const checkFollowed = id => {
    const check = allchannels.some(_channel => _channel.channelId === id);
    return check;
  };

  const fetchingData = text => {
    if (text === '') {
      setPreview([]);
      return;
    }
    return adding.fetchingChannel(text, limit, checkFollowed, setPreview);
  };

  const exitAdding = () => {
    openCallback(false);
  };

  useEffect(() => {
    const inputChannel = document.getElementById('inputChannel');
    inputChannel.focus();
  }, []);

  useEffect(() => {
    const delayType = setTimeout(() => {
      fetchingData(inputText);
    }, 500);

    return clearInterval(delayType);
  }, [inputText]);

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
            value={inputText}
            onChange={event => {
              setInputText(event.target.value);
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
