import React, { useState } from "react";

import { Container, Title, StacksContainer } from "./styles";

const Stacks: React.FC = () => {
  return (
    <Container>
      <Title>Stacks</Title>
      <StacksContainer></StacksContainer>
    </Container>
  );
};

export default Stacks;
