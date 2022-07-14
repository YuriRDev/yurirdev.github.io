import React, { useState } from "react";
import Stack from "../../Components/Stack";

import { Container, Title, StacksContainer, BigContainer } from "./styles";

/*
  Importing SVG files
*/

//@ts-ignore
import htmlSVG from "../../Assets/Languages/html.svg"; //@ts-ignore
import cssSVG from "../../Assets/Languages/css.svg"; //@ts-ignore
import jsSVG from "../../Assets/Languages/javascript.svg"; //@ts-ignore
import tsSVG from "../../Assets/Languages/typescript.svg"; //@ts-ignore
import nodeSVG from "../../Assets/Languages/node.svg"; //@ts-ignore
import reactSVG from "../../Assets/Languages/react.svg"; //@ts-ignore
import reactnativeSVG from "../../Assets/Languages/react-native.svg"; //@ts-ignore
import figmaSVG from "../../Assets/Languages/figma.svg"; //@ts-ignore
import boostrapSVG from "../../Assets/Languages/bootstrap.svg"; //@ts-ignore
import mongodbSVG from "../../Assets/Languages/mongodb.svg"; //@ts-ignore

interface StackItem {
  title: string;
  subtitle: string;
  svg: any;
  siize?: any;
}

const Stacks: React.FC = () => {
  const StacksList = [
    {
      title: "Html",
      subtitle: "+7 Years",
      svg: htmlSVG,
    },
    {
      title: "Css",
      subtitle: "+7 Years",
      svg: cssSVG,
    },
    {
      title: "Javascript",
      subtitle: "+7 Years",
      svg: jsSVG,
    },
    {
      title: "Typescript",
      subtitle: "+3 Years",
      svg: tsSVG,
    },
    {
      title: "NodeJs",
      subtitle: "+3 Years",
      svg: nodeSVG,
    },
    {
      title: "React",
      subtitle: "+3 Years",
      svg: reactSVG,
    },
    {
      title: "React Native",
      subtitle: "+3 Years",
      svg: reactnativeSVG,
    },
    {
      title: "UI Design",
      subtitle: "+3 Years",
      svg: figmaSVG,
    },
    {
      title: "Bootstrap",
      subtitle: "+2 Years",
      svg: boostrapSVG,
    },
    {
      title: "Mongoose",
      subtitle: "+1 Year",
      svg: mongodbSVG,
    },
  ];

  return (
    <BigContainer>
      <Container>
        <Title>Stacks</Title>
        <StacksContainer style={{ display: "flex" }}>
          {StacksList.map((item: StackItem) => (
            <Stack title={item.title} subtitle={item.subtitle} svg={item.svg} />
          ))}
        </StacksContainer>
      </Container>
    </BigContainer>
  );
};

export default Stacks;
