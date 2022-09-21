import Container from "react-bootstrap/Container";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import PlayerDetails from "../components/PlayerDetails";
import PlayerMatchHistory from "../components/PlayerMatchHistory";
function PlayerProfilePage() {
  var params = useParams();
  var user = params.user.split("-");

  const [region, setRegion] = useState({});
  const [serverDown, setServerDown] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if(!params || !params.user || !params.user.includes("-") || !user || user.length !== 2)
      return;
    
    fetch("https://api.henrikdev.xyz/valorant/v1/account/" + user[0] + "/" + user[1])
      .then((response) => response.json())
      .then((data) => {
        if (data && (data.status === 403 || data.status === 429)) {
          setServerDown(true);
        }
        else {
          setRegion(data.data.region)
          setLoading(false);
        }
      });
  }, [params, user]);

  if (!params || !params.user || !params.user.includes("-"))
    return (
      <Container className="d-flex justify-content-center align-items-center">
        <div style={{ color: "wheat" }}>Player not found</div>
      </Container>
    );
  else if (user && (user.length === 1 || (user.length === 2 && user[1].length === 0))) {
    return (
      <Container className="d-flex justify-content-center align-items-center">
        <div style={{ color: "wheat" }}>Please enter a valid tag. Ex(Player#123)</div>
      </Container>
    );
  }
  else if (serverDown){
    return (
      <div>Server down!</div>
    );
  }
  else if (loading){
    return (
      <div>loading</div>
    );
  }
  else {
    return (
      <>
        <PlayerDetails name={user[0]} tag={user[1]} region={region} />
        <PlayerMatchHistory name={user[0]} tag={user[1]} region={region} />
      </>
    );
  }
}

export default PlayerProfilePage;