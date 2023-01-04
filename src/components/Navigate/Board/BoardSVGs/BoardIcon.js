function BoardIcon({ onClickCallback }) {
  return (
    <div className="boardIcon" onClick={onClickCallback}>
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
  );
}

export default BoardIcon;
