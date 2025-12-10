import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Officers from "./pages/Officers";
import Events from "./pages/Events";
import Join from "./pages/Join";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/officers" element={<Officers />} />
            <Route path="/events" element={<Events />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

