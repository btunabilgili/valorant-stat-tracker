import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import LeaderboardsPage from "./pages/Leaderboards";
import PlayerProfilePage from "./pages/PlayerProfile";
import PageNotFound from "./pages/PageNotFound";
import MapsPage from "./pages/Maps";
import "./styles/main.css";

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboards" element={<LeaderboardsPage />} />
        <Route path="/playerprofile/:user" element={<PlayerProfilePage />} />
        <Route path="/game/maps" element={<MapsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <div className="footer">
        <div>Simple VALORANT stat tracker.</div>
        <div>Based on <a href="https://github.com/Henrik-3/unofficial-valorant-api" target="_blank" rel="noopener noreferrer">Henrik-3</a> API.</div>
      </div>
    </div>
  );
}

export default App;
