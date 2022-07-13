import React from "react";

import { Container, Title } from "./styles";

interface Project {
  name: string;
}

const Project: React.FC<Project> = ({ name }) => {
  return (
    <div>
      <Title>{name}</Title>
    </div>
  );
};

export default Project;
