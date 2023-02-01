import { useEffect, useRef, useState } from 'react';
import '../../../css/Navigate/Board/Board.css';
import Menu from '../Menu/Menu';
import BoardIcon from './BoardSVGs/BoardIcon.js';
import ChannelIcon from './BoardSVGs/ChannelIcon.js';

function Board(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRightClick, setIsRightClick] = useState(false);
  const _board = props.board;
  const _channelList = _board.channels;

  const _reloadID = id => {
    props.reloadID(id);
  };

  const titleBtn = useRef();

  useEffect(() => {
    const toggleContextMenu = e => {
      setIsRightClick(false);
    };

    document.body.addEventListener('click', toggleContextMenu);
    return () => {
      document.body.removeEventListener('click', toggleContextMenu);
    };
  }, []);

  return (
    <div className={'board' + (isOpen ? ' opened' : '')} id={_board.boardId}>
      <div className={'rightClick ' + (isRightClick ? 'true' : 'false')}>
        <div className='boardTitle'>
          <BoardIcon
            onClickCallback={() => {
              setIsOpen(prev => !prev);
            }}
          />

          <div
            className='title'
            ref={titleBtn}
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              setIsRightClick(prev => !prev);
            }}
          >
            {_board.title}
          </div>
        </div>

        {isRightClick && (
          <div className='_menu'>
            <Menu type='1' />
          </div>
        )}
      </div>
      {isOpen && (
        <div className='channelList'>
          {_channelList.map(channel => {
            return (
              <div
                className='channel'
                id={channel.channelId}
                key={channel.channelId}
                onClick={() => {
                  props.exitAdding();
                  _reloadID(channel.channelId);
                }}
              >
                <ChannelIcon />

                <div className='channelTitle'>{channel.title}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Board;
