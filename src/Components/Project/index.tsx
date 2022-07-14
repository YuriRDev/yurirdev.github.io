import React, { useState } from "react";

import { Container, Title } from "./styles";

interface Project {
  name: string;
  isOpen?: boolean;
}

const Project: React.FC<Project> = ({ name }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <Title>{name}</Title>
      {isOpen && (
        <div>
          <div>
            <text>Dribble</text>
          </div>
          <div>
            <text>GitHub </text>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
