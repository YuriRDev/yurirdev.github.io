import React, { useState } from "react";
import Stack from "../../Components/Stack";

import { Container, Title, StacksContainer } from "./styles";

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
import mongodbSVG from "../../Assets/Languages/mongodb.svg"; //@ts-ignore

const Stacks: React.FC = () => {
  return (
    <Container>
      <Title>Stacks</Title>
      <StacksContainer style={{ display: "flex" }}>
        <Stack
          title="Html"
          subtitle="+7 Years"
          svg={htmlSVG}
          size={{ height: 28, width: 32 }}
        />
        <Stack
          title="Css"
          subtitle="+7 Years"
          svg={cssSVG}
          size={{ height: 28, width: 32 }}
        />
        <Stack
          title="Javascript"
          subtitle="+7 Years"
          svg={jsSVG}
          size={{ height: 28, width: 32 }}
        />
        <Stack
          title="Typescript"
          subtitle="+3 Years"
          svg={tsSVG}
          size={{ height: 28, width: 32 }}
        />
        <Stack
          title="NodeJS"
          subtitle="+3 Years"
          svg={nodeSVG}
          size={{ height: 28, width: 32 }}
        />
        <Stack
          title="React"
          subtitle="+3 Years"
          svg={reactSVG}
          size={{ height: 28, width: 32 }}
        />
        <Stack
          title="React Native"
          subtitle="+3 Years"
          svg={reactnativeSVG}
          size={{ height: 28, width: 32 }}
        />
        <Stack
          title="Figma"
          subtitle="+3 Years"
          svg={figmaSVG}
          size={{ height: 28, width: 32 }}
        />
        <Stack
          title="Mongoose"
          subtitle="+1 Year"
          svg={mongodbSVG}
          size={{ height: 28, width: 32 }}
        />
      </StacksContainer>
    </Container>
  );
};

export default Stacks;
