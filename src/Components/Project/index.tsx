import React, { useState } from "react";

import { Container, LinkContainer, LinkList, LinkSvg, Title } from "./styles";

//@ts-ignore
import background from "../../Assets/background-1.png";

//@ts-ignore
import dribbbleSVG from "../../Assets/dribbble.svg"; //@ts-ignore
import githubSVG from "../../Assets/github.svg"; //@ts-ignore
import linkSVG from "../../Assets/link.svg"; //@ts-ignore

interface Project {
  name: string;
  isOpen?: boolean;
}

const Project: React.FC<Project> = ({ name }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <Title
        //@ts-ignore
        active={isOpen}
        style={
          isOpen
            ? {
                backgroundImage: `url(${background})`,
              }
            : {}
        }
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {name}
      </Title>
      {isOpen && (
        <LinkList>
          {/** Dribbble */}
          <LinkContainer>
            <LinkSvg src={dribbbleSVG} />
            <p style={{ color: "#B2215A" }}>Dribbble</p>
          </LinkContainer>

          {/** Github */}
          <LinkContainer>
            <LinkSvg src={githubSVG} />
            <p style={{ color: "#020222" }}>Github</p>
          </LinkContainer>

          {/** Link */}
          <LinkContainer>
            <LinkSvg src={linkSVG} />
            <p style={{ color: "#9C9C9C" }}>Site url</p>
          </LinkContainer>
        </LinkList>
      )}
    </div>
  );
};

export default Project;
