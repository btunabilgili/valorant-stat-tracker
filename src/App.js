import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboards" element={<p>Leaderboards</p>} />
      </Routes>
    </div>
  );
}

export default App;
