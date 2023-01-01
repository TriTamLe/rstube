import { useEffect, useState } from "react";
import AddButton from "./AddButton/AddButton";
import Board from "./Board/Board";
import "./Navigate.css";

function Navigate({ reloadID, all, exitAdding }) {
  const [_all, setAll] = useState([
    {
      channelId: "_",
      title: "Khong co kenh nao",
    },
  ]);

  useEffect(() => {
    if (all.length !== 0) {
      setAll(all);
    }
  }, [all.length]);

  const boardAll = {
    boardId: "#allchannels",
    title: "Tất cả các kênh",
    channels: _all,
  };

  return (
    <div className="navigate">
      <div className="boardLayout">
        <Board board={boardAll} reloadID={reloadID} exitAdding={exitAdding} />
      </div>
      <div id="add">
        <AddButton />
      </div>
    </div>
  );
}

export default Navigate;
