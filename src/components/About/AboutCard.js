import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Olá a todos, eu sou <span className="purple">Igor C. Oliveira </span>
            from <span className="purple"> São Paulo, Brasil.</span>
            <br /> Sou aluno da UAM e estou cursando o segundo semestre em Engenharia da computação.
            <br />
            Além disso, atualmente trabalho de freelancer como desenvolvedor de software na
            EZshop.


            <br />
            <br />
            Além da codificação, algumas outras atividades que adoro fazer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogando jogos
            </li>
            <li className="about-activity">
              <ImPointRight /> Escrever blogs de tecnologia
            </li>
            <li className="about-activity">
              <ImPointRight /> Viagens
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Eu gosto do impossível porque lá a concorrência é menor."{" "}
          </p>
          <footer className="blockquote-footer">Igor C. Oliveira</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
