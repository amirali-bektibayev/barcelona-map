import { useState } from "react";
import "./App.css";
import Map from "./components/Map/Map";
import Panel from "./components/Panel/Panel";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  const [clickedArr, setClickedArr] = useState([]);

  const getPointId = (id) => {
    setClickedArr([...clickedArr, id]);
    console.log(clickedArr);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route index path="map" element={<Map />} />
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
