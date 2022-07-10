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
          <UpperTitle
            style={showAll ? { color: "#fff", transition: "1s" } : {}}
          >
            Hey! I'm
          </UpperTitle>
          <Title style={showAll ? { color: "#fff", transition: "1s" } : {}}>
            Yuri Rousseff
          </Title>
          <About style={showAll ? { color: "#CBCBCB", transition: "1s" } : {}}>
            {"UI Designer & Dev FullStack"}
          </About>
        </TextInfoContainer>
        <RevealContainer>
          <RevealBtn
            style={showAll ? { borderColor: "#CBCBCB" } : {}}
            onClick={() => setShowAll(!showAll)}
          >
            <BiShow size={32} color={showAll ? "#CBCBCB" : "#7C7A80"} />
          </RevealBtn>
          <p style={showAll ? { color: "#CBCBCB" } : {}}>
            {!showAll ? "Reveal All" : "Unreveal"}
          </p>
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
          left: showAll ? 0 : cursorX - 100,
          top: showAll ? 0 : cursorY - 100,
          width: showAll ? "100vw" : 200,
          height: showAll ? "100vh" : 200,
          transition: showAll ? "1s" : "0.1s",
          borderRadius: showAll ? 0 : "40%",
        }}
        id="cursor"
      />
    </Container>
  );
};

export default Main;
