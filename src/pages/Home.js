import LeaderBoardTable from "../components/LeaderBoardTable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";



function HomePage() {
let navigate = useNavigate();
    return (
        <>
            <Paper
                component="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    navigate('/leaderboards');
                }}
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', margin: '100px auto', backgroundColor: "black", border: "1px solid rgb(255, 70, 85)" }}
                className={"player-search-bar"}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1, color: "white" }}
                    placeholder="Search Players (Name#TAG)"
                    inputProps={{ 'aria-label': 'search players' }}
                />
                <IconButton type="button" sx={{ p: '10px', color: "rgb(255, 70, 85)" }} aria-label="search" onSubmit={(e) => {
                    e.preventDefault();
                    alert("fired");
                }}>
                    <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </Paper>
            <Container style={{marginTop: "300px"}}>
                <Row gap>
                    <Col className="col-lg-4 col-md-6 col-xs-12 d-flex justify-content-center align-items-center">
                        <LeaderBoardTable region={"eu"} />
                    </Col>
                    <Col className="col-lg-4 col-md-6 col-xs-12 d-flex justify-content-center align-items-center">
                        <LeaderBoardTable region={"na"} />
                    </Col>
                    <Col className="col-lg-4 col-md-6 col-xs-12 d-flex justify-content-center align-items-center">
                        <LeaderBoardTable region={"br"} />
                    </Col>
                    <Col className="col-lg-4 col-md-6 col-xs-12 d-flex justify-content-center align-items-center">
                        <LeaderBoardTable region={"kr"} />
                    </Col>
                    <Col className="col-lg-4 col-md-6 col-xs-12 d-flex justify-content-center align-items-center">
                        <LeaderBoardTable region={"latam"} />
                    </Col>
                    <Col className="col-lg-4 col-md-6 col-xs-12 d-flex justify-content-center align-items-center">
                        <LeaderBoardTable region={"ap"} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default HomePage;