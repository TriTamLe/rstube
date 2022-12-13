import AddChannelIcon from "../../Icons/add_icon/AddChannelICon";
import AddNewBoardIcon from "../../Icons/add_icon/AddNewBoardIcon";
import DeleteIcon from "../../Icons/delete_icon/DeleteIcon";
import "./Menu.css";

function MenuItem(props) {
  const icon = props.icon;

  return (
    <div className="item" id={props._id}>
      <div className="itemIcon">
        {icon === "delete" ? (
          <DeleteIcon prID={props._id} />
        ) : icon === "add_channel" ? (
          <AddChannelIcon prID={props._id} />
        ) : icon === "add_board" ? (
          <AddNewBoardIcon prID={props._id} />
        ) : (
          ""
        )}
      </div>
      <div className="itemTitle">{props.title}</div>
    </div>
  );
}

export default MenuItem;
