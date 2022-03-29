import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Launches from "../pages/Launches";

const Routing = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/launches" element={<Launches />} />
      </Routes>
    </Router>
  );
};

export default Routing;
