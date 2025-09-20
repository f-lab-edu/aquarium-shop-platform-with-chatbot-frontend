import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AquariumMainPage from "./components/AquariumMainPage";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AquariumMainPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
