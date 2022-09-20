import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PageNotFound() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{height: "90vh"}}>
        <div className="col-lg-6" style={{ color: "wheat", textAlign: "center" }}>Sorry agent, page not found (404)</div>
        <img src="/images/brimstone-valorant.jpg" className="col-6" />
      </div>
    </>
  );
}

export default PageNotFound;