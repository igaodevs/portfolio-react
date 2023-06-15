import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Portfolio"
              description="Meu primeiro portfolio criado apenas com HTML, CSS e JAVASCRIPT."
              ghLink="https://github.com/igaonamikaze/igao-portifolio"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Rede Social"
              description="Uma rede social criada para a Universidade Cruzeiro do Sul"
              ghLink="https://github.com/igaonamikaze/CruzeiroConnect"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Push Notification Dart"
              description="Aplicação de push notification usando Dart e Flutter"
              ghLink="https://github.com/igaonamikaze/Push-Notification-Flutter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Google Login React"
              description="Aplicação de autenticação Google Login usando Dart e Flutter"
              ghLink="https://github.com/igaonamikaze/Login-Google-Flutter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Google Login Angular"
              description="Login com Google usando Angular"
              ghLink="https://github.com/igaonamikaze/Login-Google-Angular/tree/main/angular5-social-login-master"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Push Notification Angular"
              description="Aplicação de push notication usando Angular"
              ghLink="https://github.com/igaonamikaze/Push-Notification_Angular/tree/main/PushNotifications-main"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
