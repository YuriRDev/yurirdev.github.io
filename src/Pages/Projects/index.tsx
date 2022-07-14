import React from "react";
import Project from "../../Components/Project";

import { BigContainer, Container, Title } from "./styles";

const Projects: React.FC = () => {
  return (
    <BigContainer style={{}}>
      <Container>
        <Title>My fav projects</Title>
        <Project name={"Useless items"} />
        <Project name={"Solar Vacation"} />
        <Project name={"Instagram clone"} />
        <Project name={"Moviax"} />
      </Container>
    </BigContainer>
  );
};

export default Projects;
