import "./Board.css";
function Board(props) {
  const _board = props.board;
  const _channelList = _board.channels;

  return (
    <div className="board" id={_board.id}>
      <div className="boardTitle">
        <div className="boardIcon">
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
        <div className="title">{_board.title}</div>
      </div>

      <div className="channelList">
        {_channelList.map((channel) => {
          return (
            <div className="channel" id={channel._id} key={channel._id}>
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

              <div className="channelTitle">channel.title</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Board;
