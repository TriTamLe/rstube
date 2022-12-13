import "./App.css";
import AddButton from "./components/Navigate/AddButton/AddButton";
import Navigate from "./components/Navigate/Navigate";
import Test from "./Test";

function App() {
  return (
    <div className="App">
      <div className="layOut">
        <div className="header">
          <div id="logo"></div>
          <div id="webName">RSTube</div>
        </div>

        <div className="boards">
          <Navigate />
        </div>
        <div className="articles"></div>
      </div>
      {/* <Test/> */}
    </div>
  );
}

export default App;
