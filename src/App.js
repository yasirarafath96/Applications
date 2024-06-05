import logo from "./logo.svg";
import "./App.css";
import Calculator from "./Calculator/Calculator";
import Calculator2 from "./Calculator2/Calculator2";
import Textform from "./Textutils/Textform";
import { Route, Routes } from "react-router-dom";
import Nopage from "./Nopage";
import Home from "./Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Calculator" element={<Calculator2 />}></Route>
        <Route path="/Textutils" element={<Textform />}></Route>
        <Route path="*" element={<Nopage />}></Route>
        <Route></Route>
      </Routes>

      {/* <Calculator /> */}
    </>
  );
}

export default App;
