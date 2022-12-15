import { useEffect, useRef, useState } from "react";
import "./Board.css";
import Menu from "../Menu/Menu";
function Board(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRightClick, setIsRightClick] = useState(false);
  const _board = props.board;
  const _channelList = _board.channels;

  const _reloadID = (id) => {
    props.reloadID(id);
  };

  const titleBtn = useRef();

  useEffect(() => {
    const toggleContextMenu = (e) => {
      setIsRightClick(false);
    };

    document.body.addEventListener("click", toggleContextMenu);
    return () => {
      document.body.removeEventListener("click", toggleContextMenu);
    };
  }, []);

  return (
    <div className={"board" + (isOpen ? " opened" : "")} id={_board.id}>
      <div className={"rightClick " + (isRightClick ? "true" : "false")}>
        <div className="boardTitle">
          <div
            className="boardIcon"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 976 995"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: "2",
              }}
            >
              <rect
                id="Artboard1"
                x="0"
                y="0"
                width="975.352"
                height="994.646"
                style={{ fill: "none" }}
              />
              <clipPath id="_clip1">
                <rect x="0" y="0" width="975.352" height="994.646" />
              </clipPath>
              <g clipPath="url(#_clip1)">
                <path
                  d="M922.833,498l-861.389,497.323l-0,-994.646l861.389,497.323Z"
                  style={{ fill: "#7a413f" }}
                />
              </g>
            </svg>
          </div>
          <div
            className="title"
            ref={titleBtn}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsRightClick((prev) => !prev);
            }}
          >
            {_board.title}
          </div>
        </div>

        {isRightClick && (
          <div className="_menu">
            <Menu type="1" />
          </div>
        )}
      </div>
      {isOpen && (
        <div className="channelList">
          {_channelList.map((channel) => {
            return (
              <div
                className="channel"
                id={channel._id}
                key={channel._id}
                onClick={() => {
                  _reloadID(channel._id);
                }}
              >
                <div className="channelIcon">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 976 995"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      strokeLinejoin: "round",
                      strokeMiterlimit: "2",
                    }}
                  >
                    <rect
                      id="Artboard1"
                      x="0"
                      y="0"
                      width="975.352"
                      height="994.646"
                      style={{ fill: "none" }}
                    />
                    <circle
                      cx="487.676"
                      cy="497.323"
                      r="467.361"
                      style={{ fill: "#7a413f" }}
                    />
                  </svg>
                </div>

                <div className="channelTitle">{channel.title}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Board;
