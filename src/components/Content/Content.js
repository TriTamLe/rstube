import Artical from "./Artical/Artical";
import "./Content.css";

const testArticals = [
  {
    _id: "testArID0",
    title: "Artical Title",
    author: "Le Tri Tam",
    view: 39382,
    updateAt: "2022-12-14T07:01:55+0000",
    thumbnail:
      "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png",
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    _id: "testArID1",
    title: "Artical Title",
    author: "Le Tri Tam",
    view: 39382,
    updateAt: "2022-12-14T07:01:55+0000",
    thumbnail:
      "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png",
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    _id: "testArID2",
    title: "Artical Title",
    author: "Le Tri Tam",
    view: 39382,
    updateAt: "2022-12-14T07:01:55+0000",
    thumbnail:
      "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png",
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    _id: "testArID3",
    title: "Artical Title",
    author: "Le Tri Tam",
    view: 39382,
    updateAt: "2022-12-14T07:01:55+0000",
    thumbnail:
      "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png",
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

function Content() {
  return (
    <div className="content">
      <div className="_header">
        <h1>Artical Author</h1>
        <div id="content-icon">
          <div id="deleteChannel">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 554 916"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-miterlimit": 1.5,
              }}
            >
              <g>
                <g>
                  <path
                    d="M526.374,353.37l-499.477,0l71.069,526.403l359.5,0l68.908,-526.403Z"
                    style={{
                      fill: "none",
                      stroke: "#7a413f",
                      "stroke-width": "50px",
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M526.372,223.603c-0,-15.534 -16.66,-28.166 -37.183,-28.166l-425.12,0c-20.523,0 -37.182,12.632 -37.182,28.166l-0,65.726l499.485,-0l-0,-65.726Z"
                    style={{
                      fill: "none",
                      stroke: "#7a413f",
                      "stroke-width": "50px",
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
                      "stroke-width": "50px",
                    }}
                  />
                </g>
              </g>
            </svg>
          </div>
          <div id="reloadChannel">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 887 881"
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
                width="886.876"
                height="880.27"
                style={{ fill: "none" }}
              />
              <g>
                <path
                  d="M517.82,858.954c-27.011,5.403 -54.967,8.24 -83.579,8.24c-234.336,-0 -424.587,-190.251 -424.587,-424.587c-0,-234.336 190.251,-424.587 424.587,-424.587c234.336,-0 424.587,190.251 424.587,424.587c-0,171.838 -102.304,319.971 -249.266,386.758c-3.387,-18.88 -16.537,-36.725 -36.873,-52.056c131.276,-54.426 223.703,-183.856 223.703,-334.702c-0,-199.877 -162.275,-362.151 -362.151,-362.151c-199.876,-0 -362.151,162.274 -362.151,362.151c-0,199.876 162.275,362.15 362.151,362.15c26.604,-0 52.541,-2.874 77.522,-8.331c7.518,12.939 11.444,26.793 10.75,40.967c-0.364,7.422 -1.98,14.633 -4.693,21.561Z"
                  style={{ fill: "#7a413f" }}
                />
                <path
                  d="M587.1,835.975l41.189,-179.138l132.673,119.479l-173.862,59.659Z"
                  style={{ fill: "#7a413f" }}
                />
                <path
                  d="M556.39,828.915c-2.564,11.152 1.119,22.817 9.622,30.475c8.504,7.658 20.49,10.104 31.314,6.39l173.862,-59.66c10.56,-3.623 18.414,-12.565 20.647,-23.504c2.232,-10.939 -1.491,-22.243 -9.788,-29.714l-132.673,-119.48c-8.296,-7.471 -19.927,-9.995 -30.573,-6.633c-10.647,3.362 -18.72,12.106 -21.222,22.987l-41.189,179.139Zm74.126,-41.151l16.481,-71.675l53.083,47.804l-69.564,23.871Z"
                  style={{ fill: "#7a413f" }}
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="_articals">
        {testArticals.map((artical) => {
          return <Artical key={artical._id} artical={artical} />;
        })}
      </div>
    </div>
  );
}

export default Content;
