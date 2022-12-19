import { useEffect } from "react";
import AddChannelIcon from "../../Icons/add_icon/AddChannelICon";
import AddNewBoardIcon from "../../Icons/add_icon/AddNewBoardIcon";
import DeleteIcon from "../../Icons/delete_icon/DeleteIcon";
import "./Menu.css";

function MenuItem(props) {
  const icon = props.icon;

  return (
    <div className="item" id={props.channelId}>
      <div className="itemIcon">
        {icon === "delete" ? (
          <DeleteIcon prID={props.channelId} />
        ) : icon === "add_channel" ? (
          <AddChannelIcon prID={props.channelId} />
        ) : icon === "add_board" ? (
          <AddNewBoardIcon prID={props.channelId} />
        ) : (
          ""
        )}
      </div>
      <div className="itemTitle">{props.title}</div>
    </div>
  );
}

export default MenuItem;
