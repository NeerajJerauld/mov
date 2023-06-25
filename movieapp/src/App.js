import logo from "./logo.svg";
import "./App.css";
import { Typography } from "@mui/material";
import Topbar from "./components/Topbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Movie from "./components/Movie";
import Aboutus from "./components/Aboutus";
import NavBar from "./components/NavBar/NavBar";
function App() {
  // const buttonValue = Topbar()
  return (
      <div className="App">
        <NavBar />
        <Topbar />
        <Routes>
          <Route path='/' element= {<Home />}></Route>
          <Route path='/movie' element={<Movie />}></Route>
          <Route path='/aboutus' element={<Aboutus />}></Route>

        </Routes>
      </div>
  );
}
// Rework on clicked button
export default App;
