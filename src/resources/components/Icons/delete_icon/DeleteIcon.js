import { useEffect, useState } from "react";

function DeleteIcon(props) {
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const _item = document.getElementById(props.prID);
    _item.addEventListener("mouseover", () => {
      setIsHover(true);
    });

    _item.addEventListener("mouseout", () => {
      setIsHover(false);
    });

    return () => {
      _item.removeEventListener("mouseover", () => {
        setIsHover(true);
      });
      _item.removeEventListener("mouseout", () => {
        setIsHover(false);
      });
    };
  }, [props.prID]);

  return (
    <div className="delete_icon">
      <svg
        width="25px"
        height="25px"
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
              style={
                isHover
                  ? {
                      fill: "none",
                      stroke: "#f0eadb",
                      strokeWidth: "50px",
                    }
                  : {
                      fill: "none",
                      stroke: "#454747",
                      strokeWidth: "50px",
                    }
              }
            />
          </g>
          <g>
            <path
              d="M526.372,223.603c-0,-15.534 -16.66,-28.166 -37.183,-28.166l-425.12,0c-20.523,0 -37.182,12.632 -37.182,28.166l-0,65.726l499.485,-0l-0,-65.726Z"
              style={
                isHover
                  ? {
                      fill: "none",
                      stroke: "#f0eadb",
                      strokeWidth: "50px",
                    }
                  : {
                      fill: "none",
                      stroke: "#454747",
                      strokeWidth: "50px",
                    }
              }
            />
          </g>
          <g>
            <ellipse
              cx="276.63"
              cy="92.462"
              rx="48.206"
              ry="48.207"
              style={
                isHover
                  ? {
                      fill: "none",
                      stroke: "#f0eadb",
                      strokeWidth: "50px",
                    }
                  : {
                      fill: "none",
                      stroke: "#454747",
                      strokeWidth: "50px",
                    }
              }
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default DeleteIcon;
