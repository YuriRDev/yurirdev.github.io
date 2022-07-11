import React, { useState } from "react";
import Stack from "../../Components/Stack";

import { Container, Title, StacksContainer } from "./styles";

const Stacks: React.FC = () => {
  return (
    <Container>
      <Title>Stacks</Title>
      <StacksContainer>
        <Stack
          title="Html"
          subtitle="+7 Years"
          svg={}
          size={{ height: 28, width: 32 }}
        />
      </StacksContainer>
    </Container>
  );
};

export default Stacks;
