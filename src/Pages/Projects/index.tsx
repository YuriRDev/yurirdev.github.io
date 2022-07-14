import React, { useState } from "react";
import Project from "../../Components/Project";

import { BigContainer, Container, Title } from "./styles";

const Projects: React.FC = () => {
  return (
    <BigContainer style={{}}>
      <Container>
        <Title>My fav projects</Title>
        <Project
          name={"Useless items"}
          dribble={"https://dribbble.com/shots/17598729-Useless-Items"}
          github={"https://github.com/YuriRDev/uselessitems"}
          link={"https://yurirdev.github.io/uselessitems"}
        />
        <Project
          name={"Solar Vacation"}
          dribble={"https://dribbble.com/shots/17253203-Solar-Vacation-Concept"}
          github={"https://github.com/YuriRDev/Solar-Vacation"}
        />
        <Project
          name={"Instagram clone"}
          github={"https://github.com/YuriRDev/intagramclone"}
          link={"https://YuriRDev.github.io/intagramclone"}
        />
        <Project
          name={"Moviax"}
          github={"https://github.com/YuriRDev/Moviax"}
          link={"https://dainty-cupcake-eba0b5.netlify.app/html/"}
        />
      </Container>
    </BigContainer>
  );
};

export default Projects;
