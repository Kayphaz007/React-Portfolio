import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
