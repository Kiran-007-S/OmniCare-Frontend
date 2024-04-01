import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import DoctorProfile from "./Components/DoctorProfile";
import Footer from "./Components/Footer";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar/>
        </header>
        <section>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/doctor/:id" element={<DoctorProfile/>}/>
          </Routes>
        </section>
        <footer>
          <Footer/>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
