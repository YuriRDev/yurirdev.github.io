import React from "react";

import {
  Container,
  UpperTitle,
  About,
  Title,
  UpperContainer,
  TextInfoContainer,
} from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <UpperContainer>
        <TextInfoContainer>
          <UpperTitle>Hey! I'm</UpperTitle>
          <Title>Yuri Rousseff</Title>
          <About>{"UI Designer & Dev FullStack"}</About>
        </TextInfoContainer>
      </UpperContainer>
    </Container>
  );
};

export default Main;
