import "./Menu.css";

function MenuItem(props) {
  return (
    <div className="item">
      <div
        clasName="itemIcon"
        style={{ backgroundImage: `url(${props.icon}` }}
      ></div>
      <div className="itemTitle">{props.title}</div>
    </div>
  );
}

export default MenuItem;
