import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Second from "./pages/Second";
import Details from "./pages/Details";

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/continue" element={<Second />} />
            <Route exact path="/details" element={<Details />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
