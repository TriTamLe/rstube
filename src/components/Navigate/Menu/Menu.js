import "./Menu.css";
import MenuItem from "./MenuItem";

const boardMenu = [
  {
    id: "boardMenu#addChannel",
    icon: "add_channel",
    title: "Add channels",
  },
  {
    id: "boardMenu#delete",
    icon: "delete",
    title: "Delete Board",
  },
];

const addMenu = [
  {
    id: "addMenu#addboard",
    icon: "add_board",
    title: "New board",
  },
  {
    id: "addMenu#addChannel",
    icon: "add_channel",
    title: "Add channels",
  },
];

function Menu({ type }) {
  const theArray = type === "0" ? addMenu : boardMenu;

  return (
    <div className="menu">
      {theArray.map((item) => (
        <MenuItem
          key={item.id}
          _id={item.id}
          icon={item.icon}
          title={item.title}
        />
      ))}
    </div>
  );
}

export default Menu;
