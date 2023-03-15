import { useState } from "react";
import "./App.css";
import Map from "./components/Map/Map";
import Panel from "./components/Panel/Panel";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

function App() {
  const [clickedPoint, setClickedPoint] = useState("");

  const getPointId = (id) => {
    console.log(id);
    setClickedPoint(id);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<div>Home</div>} />
          <Route
            index
            path="map"
            element={<Map clickedPoint={clickedPoint} />}
          />
          <Route path="panel" element={<Panel getPointId={getPointId} />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Map clickedPoint={clickedPoint} />
    //   <Panel getPointId={getPointId} />
    // </div>
  );
}

export default App;
