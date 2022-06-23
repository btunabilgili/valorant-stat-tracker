import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import LeaderboardsPage from "./pages/Leaderboards";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboards" element={<LeaderboardsPage />} />
      </Routes>
    </div>
  );
}

export default App;
