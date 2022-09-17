import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Second from "./pages/Second";

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/continue" element={<Second />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
