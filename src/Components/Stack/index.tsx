import React from "react";

import { Container, Name, SvgContainer, TextContainer, Time } from "./styles";

interface StackInterface {
  title: string;
  subtitle: string;
  svg: any;
  size?: any;
}

const Stack: React.FC<StackInterface> = ({ title, subtitle, svg, size }) => {
  return (
    <Container>
      <SvgContainer src={svg} />
      <TextContainer>
        <Name>{title}</Name>
        <Time>{subtitle}</Time>
      </TextContainer>
    </Container>
  );
};

export default Stack;
