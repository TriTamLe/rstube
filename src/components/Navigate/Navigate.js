import AddButton from "./AddButton/AddButton";
import Board from "./Board/Board";
import "./Navigate.css";

function Navigate() {
  const boardTest = {
    _id: "boardTest",
    title: "Board Test hehe",
    channels: [
      {
        _id: "test 1",
        title: "channel test1",
        channelID: "....",
      },
      {
        _id: "test 2",
        title: "channel test2",
        channelID: "....",
      },
    ],
  };

  return (
    <div className="navigate">
      <div className="boardLayout">
        <Board board={boardTest} />
      </div>
      <div id="add">
        <AddButton />
      </div>
    </div>
  );
}

export default Navigate;
