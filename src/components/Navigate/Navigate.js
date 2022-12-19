import AddButton from "./AddButton/AddButton";
import Board from "./Board/Board";
import "./Navigate.css";

function Navigate({ boards, reloadID, all }) {
  const _all =
    all === []
      ? [
          {
            channelId: "_",
            title: "Khong co kenh nao",
          },
        ]
      : all;
  const boardAll = {
    channelId: "#allchannels",
    title: "Tất cả các kênh",
    channels: _all,
  };
  return (
    <div className="navigate">
      <div className="boardLayout">
        {/* {boards.map((board) => {
          return <Board key={board.channelId} board={board} reloadID={reloadID} />;
        })}
        <div id="line"></div> */}
        <Board board={boardAll} reloadID={reloadID} />
      </div>
      <div id="add">
        <AddButton />
      </div>
    </div>
  );
}

export default Navigate;
