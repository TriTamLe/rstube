import "./App.css";
import Navigate from "./components/Navigate/Navigate";
// import Test from "./Test";
import Content from "./components/Content/Content";
import Add from "./components/Add&Delete/Add.";
import { testBoard } from "./store";
import { useState } from "react";

function App() {
  const [contentID, setContentID] = useState(testBoard[0].channels[0]._id);
  const [isAdding, setIsAdding] = useState(true);

  const reloadID = (id) => {
    setContentID(id);
  };

  const getContentID = () => {
    return contentID;
  };

  return (
    <div className="App">
      <div className="layOut">
        <div className="header">
          <div id="logo"></div>
          <div id="webName">RSTube</div>
        </div>

        <div className="boards">
          <Navigate boards={testBoard} reloadID={reloadID} />
        </div>

        <div className="articles">
          {!isAdding ? <Content getContentID={getContentID()} /> : <Add />}
        </div>
      </div>
      {/* <Test/> */}
    </div>
  );
}

export default App;
