import Container from "react-bootstrap/Container";
import { useParams } from 'react-router-dom';
import PlayerDetails from "../components/PlayerDetails";
import PlayerMatchHistory from "../components/PlayerMatchHistory";
function PlayerProfilePage() {

  var params = useParams();
  var user = params.user.split("-");
  var region = params.region;

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