import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import './index.css'
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Rent from "./pages/Rent";

function App() {

  return (
    <BrowserRouter>
      <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/aboutus" element={<About />}/>
      <Route path="/rent" element={<Rent />}/>
      <Route path="/" element={<Home />}/>
      <Route path="/" element={<Home />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
