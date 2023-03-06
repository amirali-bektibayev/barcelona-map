import { useState } from "react";
import "./App.css";
import Map from "./components/Map/Map";
import Panel from "./components/Panel/Panel";

function App() {
  const [clickedPoint, setClickedPoint] = useState("");

  const getPointId = (id) => {
    console.log(id);
    setClickedPoint(id);
  };

  return (
    <div className="App">
      <Map clickedPoint={clickedPoint} />
      <Panel getPointId={getPointId} />
    </div>
  );
}

export default App;
