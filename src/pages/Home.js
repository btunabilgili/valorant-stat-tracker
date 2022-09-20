import LeaderBoardTable from "../components/LeaderBoardTable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";


function HomePage() {
    let navigate = useNavigate();
    document.title = "Valorant Stat Tracker";
    return (
        <>
            <section className="search-section">
                <div style={{color: "white", fontSize: "25px"}}>VALORANT.GG <span className="brand">for <a href="https://playvalorant.com/" target="_blank" rel="noopener noreferrer">VALORANT</a></span></div>
                <Paper
                    component="form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        navigate('/leaderboards');
                    }}
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', margin: '100px auto 20px auto', backgroundColor: "black", border: "1px solid rgb(255, 70, 85)" }}
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
                <Container style={{ textAlign: "center" }}>
                    <Button variant="contained" color="error" size="medium" onClick={() => { window.open("https://auth.riotgames.com/login", '_blank', 'noopener,noreferrer')}} startIcon={
                        <img src="/images/icons8-riot-games-48.png" alt="riot company icon" style={{ height: "24px", width: "24px" }} />}>Sign in with Riot</Button>
                    <div style={{ color: "gray", margin: "5px auto", fontSize: "12px" }}>Signing in with Riot makes your profile public. You can switch it to private.</div>
                </Container>
            </section>
            <Container className="mt-5">
                <Row gap>
                    <Col className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                        <LeaderBoardTable region={"eu"} />
                    </Col>
                    <Col className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                        <LeaderBoardTable region={"na"} />
                    </Col>
                    <Col className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                        <LeaderBoardTable region={"br"} />
                    </Col>
                    <Col className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                        <LeaderBoardTable region={"kr"} />
                    </Col>
                    <Col className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                        <LeaderBoardTable region={"latam"} />
                    </Col>
                    <Col className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                        <LeaderBoardTable region={"ap"} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default HomePage;