import "./App.css";
import Navigate from "./components/Navigate/Navigate";
import Test from "./Test";
import Content from "./components/Content/Content";

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
        <div className="articles">
          <Content />
        </div>
      </div>
      {/* <Test/> */}
    </div>
  );
}

export default App;
