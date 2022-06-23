import LeaderBoardTable from "../components/LeaderBoardTable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function LeaderboardsPage() {
  return (
    <Container>
      <Row>
        <Col>
          <LeaderBoardTable region={"eu"} />
        </Col>
        <Col>
          <LeaderBoardTable region={"na"} />
        </Col>
      </Row>
    </Container>
  );
}

export default LeaderboardsPage;