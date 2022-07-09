import React, { useState } from "react";

import {
  Container,
  UpperTitle,
  About,
  Title,
  UpperContainer,
  TextInfoContainer,
  Cursor,
} from "./styles";

const Main: React.FC = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  return (
    <Container>
      <UpperContainer>
        <TextInfoContainer>
          <UpperTitle>Hey! I'm</UpperTitle>
          <Title>Yuri Rousseff</Title>
          <About>{"UI Designer & Dev FullStack"}</About>
        </TextInfoContainer>
      </UpperContainer>

      <Cursor
        style={{
          left: cursorX - 100,
          top: cursorY - 100,
        }}
        id="cursor"
      />
    </Container>
  );
};

export default Main;
