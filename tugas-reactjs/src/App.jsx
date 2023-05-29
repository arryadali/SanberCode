import "./App.css";
import Tugas7 from "./tugas7/tugas7";
import Tugas8 from "./tugas8/tugas8";
import Tugas9 from "./tugas9/tugas9";
import Tugas10 from "./tugas10/tugas10";
import Tugas11 from "./tugas11/tugas11";
import Tugas12 from "./tugas12/tugas12";
import Tugas13 from "./tugas13/tugas13";
import Tugas15Form from "./tugas15form";
import CodeMateri from "./CodeMateri/CodeMateri";
import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Navbar from "./component/navbar";
import Tugas15List from "./tugas15list";


{/* <Tugas7 />
      <Tugas8
        name="Arrya Dali Lesmana"
        email="arryadali@gmail.com"
        batch="Batch 42"
      />
      <Tugas9 />
      <Tugas10/>
      <Tugas11/>
      <Tugas12/> */}

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>

        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/tugas15list" element={<Tugas15List/>} />
          <Route path="/create" element={<Tugas15Form/>} />
          <Route path="/edit/:idData" element={<Tugas15Form/>} />
          
        </Routes>

      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
