import { Container } from "react-bootstrap";
import React from "react";

function ServerDown() {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center" style={{backgroundColor: "black", height: "82%"}}>
            <div style={{ color: "#ff4655", fontWeight: "bold" }}>Server Down!</div>
            <img src="/images/server-down.gif" alt="server-down" style={{width: "60%"}}/>
        </Container>
    );
}

export default ServerDown;