
import React from "react";
import { Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "../styles/maps.css";


function MapsPage() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
      <Row>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block img-fluid"
              src="/images/maps/pearl-featured.png"
              alt="pearl"
            />
            <Carousel.Caption>
              <h3>PEARL</h3>
              <p>
                Attackers push down into the Defenders on this two-site map set in a vibrant, underwater city. Pearl is a geo-driven map with no mechanics. Take the fight through a compact mid or the longer range wings in our first map set in Omega Earth.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-fluid"
              src="/images/maps/fracture-featured.png"
              alt="fracture"
            />
            <Carousel.Caption>
              <h3>FRACTURE</h3>
              <p>
                A top secret research facility split apart by a failed radianite experiment. With defender options as divided as the map, the choice is yours: meet the attackers on their own turf or batten down the hatches to weather the assault.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-fluid"
              src="/images/maps/breeze-featured_v1.png"
              alt="breeze"
            />
            <Carousel.Caption>
              <h3>BREEZE</h3>
              <p>
                Take in the sights of historic ruins or seaside caves on this tropical paradise. But bring some cover. You'll need them for the wide open spaces and long range engagements. Watch your flanks and this will be a Breeze.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-fluid"
              src="/images/maps/icebox-featured.png"
              alt="icebox"
            />
            <Carousel.Caption>
              <h3>ICEBOX</h3>
              <p>
                Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take advantage of the ziplines and they’ll never see you coming.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-fluid"
              src="/images/maps/bind-featured.png"
              alt="bind"
            />
            <Carousel.Caption>
              <h3>BIND</h3>
              <p>
                Two sites. No middle. Gotta pick left or right. What`s it going to be then? Both offer direct paths for attackers and a pair of one-way teleporters make it easier to flank.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}

export default MapsPage;