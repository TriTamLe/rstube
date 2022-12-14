import Artical from "./Artical/Artical";
import "./Content.css";

const testArtical = {
  _id: "testArID",
  title: "Artical Title",
  author: "Le Tri Tam",
  view: 39382,
  updateAt: "2022-12-14T07:01:55+0000",
  thumbnail:
    "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png",
  discription:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};

function Content() {
  return (
    <div className="content">
      <Artical artical={testArtical} />
    </div>
  );
}

export default Content;
