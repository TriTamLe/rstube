import { useEffect, useState } from "react";

function AddNewBoardIcon(props) {
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
        viewBox="0 0 742 801"
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
          width="741.644"
          height="800.61"
          style={{ fill: "none" }}
        />
        <g id="adding-button">
          <path
            d="M587.964,490.217l-559.633,287.763l-0,-575.527l559.633,287.764Z"
            style={
              !isHover
                ? {
                    fill: "#454747",
                    stroke: "#454747",
                    strokeWidth: "26.89px",
                  }
                : {
                    fill: "#f0eadb",
                    stroke: "#f0eadb",
                    strokeWidth: "26.89px",
                  }
            }
          />
          <path
            d="M476.804,371.432l-0,-134.612l-152.013,-0l-0,-73.76l152.013,-0l-0,-134.612l83.295,-0l-0,134.612l152.013,-0l-0,73.76l-152.013,-0l-0,134.612l-83.295,-0Z"
            style={
              !isHover
                ? {
                    fill: "#454747",
                    fillRule: "nonzero",
                    stroke: "#454747",
                    strokeWidth: "26.89px",
                    strokeLinecap: "butt",
                    strokeMiterlimit: "2",
                  }
                : {
                    fill: "#f0eadb",
                    fillRule: "nonzero",
                    stroke: "#f0eadb",
                    strokeWidth: "26.89px",
                    strokeLinecap: "butt",
                    strokeMiterlimit: "2",
                  }
            }
          />
        </g>
      </svg>
    </div>
  );
}

export default AddNewBoardIcon;
