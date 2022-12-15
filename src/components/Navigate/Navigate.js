import AddButton from "./AddButton/AddButton";
import Board from "./Board/Board";
import "./Navigate.css";

function Navigate({ boards, reloadID }) {
  return (
    <div className="navigate">
      <div className="boardLayout">
        {boards.map((board) => {
          return <Board key={board._id} board={board} reloadID={reloadID} />;
        })}
      </div>
      <div id="add">
        <AddButton />
      </div>
    </div>
  );
}

export default Navigate;
