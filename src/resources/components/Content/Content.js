import { useEffect } from 'react';
import Artical from '../Content/Artical';
import DeleteChannelSVG from './ContentSVGs/DeleteChannelSVG';
import ReloadChannelSVG from './ContentSVGs/ReloadChannelSVG';
import { api } from '../../../config/server/Api';
import { useState } from 'react';
import '../../css/Content/Content.css';
import ContentController from '../../../app/controllers/ContentController';

function Content(props) {
  const [_content, setContent] = useState({
    channelId: 'UCsT0YIqwnpJCM-mx7-gSA4Q',
    author: 'Vui lòng chọn kênh',
    articals: [],
  });

  const loadContent = () => {
    return ContentController.loadContent(props, setContent);
  };

  const deleteContent = id => props.deleteChannel(id);

  useEffect(() => {
    loadContent();
    const firstArtical = document.getElementById('0');

    if (firstArtical !== null) {
      firstArtical.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }, [props.getContentID]);

  return (
    <div className='content' id={_content.channelId}>
      <div className='_header'>
        <div className='title'>
          <h1>{_content.author}</h1>
          <h2>{api.link + props.getContentID}</h2>
        </div>

        <div id='content-icon'>
          <DeleteChannelSVG
            onClick={() => {
              deleteContent(_content.channelId);
            }}
          />
          <ReloadChannelSVG
            onClick={() => {
              loadContent();
            }}
          />
        </div>
      </div>
      <div className='_articals'>
        {_content.articals.map((artical, index) => {
          return (
            <Artical key={artical.channelId} id={index} artical={artical} />
          );
        })}
      </div>
    </div>
  );
}

export default Content;
