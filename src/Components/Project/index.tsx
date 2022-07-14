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
  photo?: any;

  dribble?: string;
  github?: string;
  link?: string;
}

const Project: React.FC<Project> = ({ name, photo, dribble, github, link }) => {
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
          {dribble && (
            <LinkContainer
              onClick={() => {
                document.location.href = dribble;
              }}
            >
              <LinkSvg src={dribbbleSVG} />
              <p style={{ color: "#B2215A" }}>Dribbble</p>
            </LinkContainer>
          )}

          {github && (
            <LinkContainer
              onClick={() => {
                document.location.href = github;
              }}
            >
              <LinkSvg src={githubSVG} />
              <p style={{ color: "#020222" }}>Github</p>
            </LinkContainer>
          )}

          {link && (
            <LinkContainer
              onClick={() => {
                document.location.href = link;
              }}
            >
              <LinkSvg src={linkSVG} />
              <p style={{ color: "#9C9C9C" }}>Site url</p>
            </LinkContainer>
          )}
        </LinkList>
      )}
    </div>
  );
};

export default Project;
