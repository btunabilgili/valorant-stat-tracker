import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import ServerDown from "./ServerDown";
import "../styles/player.css";
import React from "react";

function PlayerMatchHistory(props) {
  const [matchModels, setMatchModel] = useState([]);
  const [serverDown, setServerDown] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.henrikdev.xyz/valorant/v3/matches/" + props.region + "/" + props.name + "/" + props.tag + "?filter=competitive")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data && data.status === "403") {
          setServerDown(true);
        }
        else {
          var tempMatchModels = [];
          data.data.forEach((data) => {
            var matchModel = {};
            var player = data.players.all_players.find(x => x.name.toUpperCase() === props.name.toUpperCase() && x.tag.toUpperCase() === props.tag.toUpperCase());
            matchModel.team = data.teams[(player.team).toLowerCase()];
            matchModel.player = player;
            matchModel.metadata = data.metadata;
            tempMatchModels.push(matchModel);
          });
          setMatchModel(tempMatchModels);
        }
      });
  }, [props.region, props.name, props.tag]);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center">
        <CircularProgress />
      </Container>
    );
  }
  else if (serverDown) {
    return (
      <ServerDown />
    );
  }
  else {
    return (
      <Container>
        {matchModels && matchModels.length > 0 && matchModels.map((data, index) => {
          // console.log(data);
          return (
            <div className={`d-flex player-match-container ${data.team.has_won ? "match-won" : "match-lost"}`} style={{ height: "80px" }} key={index}>
              <div className="d-flex w-100 justify-content-between m-2 p-2">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="match-history-label" style={{ color: data.team.has_won ? "rgb(127 195 255)" : "rgb(255 70 85)", fontWeight: "bold" }}>{data.team.has_won ? "Victory" : "Defeat"}</div>
                  <div className="match-history-label">Competitive</div>
                  <div className="match-history-label">{new Date(data.metadata.game_start_patched).toLocaleTimeString("en-US", {hour: '2-digit', minute:'2-digit'})}</div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center"><img src={data.player.assets.agent.small} className={`player-portrait ${data.team.has_won ? "player-portrait-won" : "player-portrait-lost"}`} alt="player avatar" /></div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div style={{ fontWeight: "bold" }}><span style={{ color: "#7fc3ff" }}>{data.team.rounds_won}&nbsp;-&nbsp;</span><span style={{ color: "#ff4655" }}>{data.team.rounds_lost}</span></div>
                  <div className="match-history-label" style={{ fontWeight: "bold" }}>{data.metadata.map}</div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="bold">{parseInt(data.player.stats.score / data.metadata.rounds_played)}</div>
                  <div className="match-history-label">Combat Score</div>
                </div>
                <div className="d-none d-lg-flex flex-column justify-content-center align-items-center">
                  <div className="bold">{data.player.stats.kills + "/" + data.player.stats.deaths + "/" + data.player.stats.assists}</div>
                  <div className="match-history-label">KDA</div>
                </div>
                <div className="d-none d-md-flex flex-column justify-content-center align-items-center">
                  <div className="bold">{Math.round((data.player.stats.kills / data.player.stats.deaths) * 100) / 100}</div>
                  <div className="match-history-label">KD</div>
                </div>
                <div className="d-none d-sm-flex flex-column justify-content-center align-items-center">
                  <div className="bold">{Math.round((data.player.damage_made / data.metadata.rounds_played) * 100) / 100}</div>
                  <div className="match-history-label">Avg.Dmg</div>
                </div>
                <div className="d-none d-sm-flex flex-column justify-content-center align-items-center">
                  <div className="bold">{((data.player.stats.headshots / (data.player.stats.headshots + data.player.stats.bodyshots + data.player.stats.legshots)) * 100).toFixed(2)}%</div>
                  <div className="match-history-label">HS%</div>
                </div>
              </div>
            </div>);
        })}
      </Container>
    );
  }
}

export default PlayerMatchHistory;