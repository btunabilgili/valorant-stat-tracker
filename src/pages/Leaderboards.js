import LeaderBoardTable from "../components/LeaderBoardTable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

function LeaderboardsPage() {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <LeaderBoardTable region={"eu"} />
        </Col>
        <Col className="d-flex justify-content-center">
          <LeaderBoardTable region={"na"} bordered={true} />
        </Col>
      </Row>
    </Container>
  );
}

export default LeaderboardsPage;