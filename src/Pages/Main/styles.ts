import styled from "styled-components";

//@ts-ignore
import background from "../../Assets/background-1.png";

export const Container = styled.div`
  max-width: 930px;
  margin: 0px auto;
  padding-top: 250px;
`;

export const UpperContainer = styled.div``;

export const TextInfoContainer = styled.div``;

export const UpperTitle = styled.h2`
  color: #101114;
  font-size: 32px;
  font-weight: 700;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
`;

export const About = styled.p`
  font-size: 20px;
  color: #7c7a80;
  margin-top: 12px;
  font-weight: 400;
  margin-left: 4px;
`;

/*
    Cursor
*/

export const Cursor = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: center center no-repeat fixed;
  background-size: cover;
  border-radius: 40%;
  z-index: -1;
  background-image: url(${background});
  transition: 0.1s;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.1);
`;
