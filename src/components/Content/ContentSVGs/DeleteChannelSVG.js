function DeleteChannelSVG({ onClick }) {
  return (
    <div id="deleteChannel" onClick={onClick}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 554 916"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 1.5,
        }}
      >
        <g>
          <g>
            <path
              d="M526.374,353.37l-499.477,0l71.069,526.403l359.5,0l68.908,-526.403Z"
              style={{
                fill: "none",
                stroke: "#7a413f",
                strokeWidth: "50px",
              }}
            />
          </g>
          <g>
            <path
              d="M526.372,223.603c-0,-15.534 -16.66,-28.166 -37.183,-28.166l-425.12,0c-20.523,0 -37.182,12.632 -37.182,28.166l-0,65.726l499.485,-0l-0,-65.726Z"
              style={{
                fill: "none",
                stroke: "#7a413f",
                strokeWidth: "50px",
              }}
            />
          </g>
          <g>
            <ellipse
              cx="276.63"
              cy="92.462"
              rx="48.206"
              ry="48.207"
              style={{
                fill: "none",
                stroke: "#7a413f",
                strokeWidth: "50px",
              }}
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default DeleteChannelSVG;
