// import "./DeleteIcon.css";
import { useEffect, useState } from "react";

function AddChannelIcon(props) {
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
        height="25px    "
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
            style={
              !isHover
                ? { fill: "none", stroke: "#454747", strokeWidth: "50px" }
                : { fill: "none", stroke: "#f0eadb", strokeWidth: "50px" }
            }
          />
          <g>
            <path
              d="M286.053,430.36l-0,-90.378l-92.611,-0l0,-49.523l92.611,0l-0,-90.379l50.745,0l0,90.379l92.611,0l-0,49.523l-92.611,-0l0,90.378l-50.745,0Z"
              style={
                !isHover
                  ? { fill: "#454747", fillRule: "nonzero" }
                  : { fill: "#f0eadb", fillRule: "nonzero" }
              }
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default AddChannelIcon;
