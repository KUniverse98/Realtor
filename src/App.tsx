import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cover from "./pages/Cover";
import Homes from "./pages/Homes";
import About from "./pages/About";
import WildSprings from "./pages/Homes/WildSprings";
import Cadley from "./pages/Homes/Cadley";


function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Cover />} />
      <Route path="/homes" element={<Homes />} />
      <Route path="/about" element={<About />} />


      <Route path="/WildSprings" element={<WildSprings />} />
      <Route path="/Cadley" element={<Cadley />} />
    </Routes>
    </>
  );
};

export default App;
