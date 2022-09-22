import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ServerDown from "./ServerDown";

function PlayerDetails(props) {
  const [playerData, setPlayerData] = useState({});
  const [serverDown, setServerDown] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = props.name + "#" + props.tag + " Player Overview";
    fetch("https://api.henrikdev.xyz/valorant/v1/mmr/" + props.region + "/" + props.name + "/" + props.tag)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.status === "403") {
          setServerDown(true);
        }
        else {
          setPlayerData(data);
          setLoading(false);
        }
      });
  }, [props.name, props.tag, props.region]);

  if (serverDown) {
    return (
      <ServerDown />
    );
  }
  else if (loading) {
    return (
      <div className="container">
        <CircularProgress />
      </div>
    );
  }
  else {
    return (
      <Container>
        <div className="player-details col-6">
          <div>Player: &nbsp; {playerData.data.name}#{playerData.data.tag} &nbsp; Region: &nbsp; <span style={{ color: "red" }}>{props.region.toUpperCase()}</span></div>
          <div>Rank: &nbsp; <img style={{ width: "25px" }} src={playerData.data.images.small} alt="player rank" /></div>
          <div>Elo: &nbsp; {playerData.data.elo}</div>
        </div>
      </Container>
    );
  }

}

export default PlayerDetails;
