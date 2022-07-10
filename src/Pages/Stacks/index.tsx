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

const Stacks: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

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
    </Container>
  );
};

export default Stacks;
