import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> SOBRE MIM </span>
            </h1>
            <p className="home-about-body">
            Me apaixonei por programação e pelo menos aprendi
              alguma coisa, eu acho.. 🤷‍♂️
              <br />
              <br />Sou fluente em 
              <i>
                <b className="purple"> Dart, Javascript e Python. </b>
              </i>
              <br />
              <br />
              Meu campo de interesse está construindo novos &nbsp;
              <i>
                <b className="purple">Tecnologias e produtos da Web </b> e
                também em áreas relacionadas com{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Sempre que possível, também aplico minha paixão por desenvolver produtos
              com <b className="purple">Node.js</b> e
              <i>
                <b className="purple">
                  {" "}
                  Biblioteca e frameworks Javascript modernos
                </b>
              </i>
              &nbsp; curte
              <i>
                <b className="purple"> React.js e Angular</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCONTRE ME EM</h1>
            <p>
            Sinta-se livre para <span className="purple">conectar-se </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/igaonamikaze"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Igaoson"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/igor-costa-oliveira-673866169/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/igaonamikaze/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
