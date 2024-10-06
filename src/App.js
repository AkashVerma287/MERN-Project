import "./App.css";
import Home from "./files/Home";
import Table from "./files/Table";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Table" element={<Table />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
