import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress"

function LeaderBoardTable(props) {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [serverDown, setServerDown] = useState(false);
  useEffect(() => {
    fetch("https://api.henrikdev.xyz/valorant/v1/leaderboard/" + props.region)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.status === "403") {
          setServerDown(true);
        }
        else {
          setLeaderboardData(data)
        }
      });
  }, [props.region]);

  if (!leaderboardData || leaderboardData.length === 0) {
    return (
      <CircularProgress />
    );
  }
  else if (serverDown) {
    return (
      <div style={{ color: "#ff4655", fontWeight: "bold" }}>Server Down!</div>
    );
  }
  else {
    return (
      <>
        <div className="table-responsive" style={{width: "100%"}}>
          <Table
            // responsive={true}
            striped={props.striped}
            hover={props.hover}
            variant={props.variant}
            style={{ color: "#fff", backgroundColor: "#252a3c" }}
          >
            <thead>
              <tr>
                <th colSpan={4}><span style={{ color: "#ff4655" }}>{props.region.toUpperCase()}</span> Region TOP 5</th>
              </tr>
              <tr>
                <th>Rank</th>
                <th>Player</th>
                <th>Rating</th>
                <th>Number Of Wins</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.length > 0 &&
                leaderboardData.slice(0, 5).map((leaderboardData) => {
                  return (
                    <tr key={leaderboardData.puuid}>
                      <td>{leaderboardData.leaderboardRank}</td>
                      <td>
                        <a href="www.google.com">
                          {leaderboardData.gameName
                            ? ((leaderboardData.gameName + "#" + leaderboardData.tagLine).length > 13 ? (leaderboardData.gameName + "#" + leaderboardData.tagLine).substring(0, 10) + "..." : (leaderboardData.gameName + "#" + leaderboardData.tagLine))
                            : "Secret Agent"}
                        </a>
                      </td>
                      <td>{leaderboardData.rankedRating}</td>
                      <td>{leaderboardData.numberOfWins}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </>)
  }
}

export default LeaderBoardTable;
