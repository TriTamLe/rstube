import { useState } from "react";

function AddButtonIcon() {
  return (
    <div className="addIcon">
      <svg
        width="40px"
        height="40px    "
        viewBox="0 0 625 628"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "1.5",
        }}
      >
        <rect
          id="Artboard1"
          x="0"
          y="0"
          width="500"
          height="600"
          style={{ fill: "none" }}
        />
        <g id="adding-button">
          <circle
            cx="311.426"
            cy="315.223"
            r="277.017"
            style={{ fill: "none", stroke: "#7a413f", strokeWidth: "60px" }}
          />
          <g>
            <path
              d="M286.053,430.36l-0,-90.378l-92.611,-0l0,-49.523l92.611,0l-0,-90.379l50.745,0l0,90.379l92.611,0l-0,49.523l-92.611,-0l0,90.378l-50.745,0Z"
              style={{ fill: "#7a413f", fillRule: "nonzero" }}
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default AddButtonIcon;
