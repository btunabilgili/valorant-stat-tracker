import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";

function LeaderBoardTable(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch("https://api.henrikdev.xyz/valorant/v1/leaderboard/" + props.region)
      .then((response) => response.json())
      .then((data) => setData(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [props.region]);

  return (
    <>
      {/* <caption>{props.region.toUpperCase()} Region TOP 5</caption> */}
      <Table
        striped={props.striped}
        bordered={props.bordered}
        hover={props.hover}
        variant={props.variant}
      >
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Rating</th>
            <th>Number Of Wins</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.slice(0, 5).map((data) => {
              return (
                <tr key={data.puuid}>
                  <td>{data.leaderboardRank}</td>
                  <td>
                    {data.gameName
                      ? data.gameName + "#" + data.tagLine
                      : "Secret Agent"}
                  </td>
                  <td>{data.rankedRating}</td>
                  <td>{data.numberOfWins}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
}

export default LeaderBoardTable;
