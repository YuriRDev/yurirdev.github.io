import React, { useState } from "react";

import { BiShow } from "react-icons/bi";

import {
  Container,
  UpperTitle,
  About,
  Title,
  UpperContainer,
  TextInfoContainer,
  Cursor,
  LowerContainer,
  LineStyle,
  RevealContainer,
  RevealBtn,
} from "./styles";

const Main: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

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
        <RevealContainer>
          <RevealBtn onClick={() => setShowAll(!showAll)}>
            <BiShow size={32} color="#7C7A80" />
          </RevealBtn>
          <p>{!showAll ? "Reveal All" : "Unreveal"}</p>
        </RevealContainer>
      </UpperContainer>

      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LowerContainer>
          <p>SCROLL</p>
          <LineStyle />
        </LowerContainer>
      </div>

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
