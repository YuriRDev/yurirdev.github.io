import styled from "styled-components";

//@ts-ignore
import background from "../../Assets/background-1.png";

export const Container = styled.div`
  max-width: 1170px;
  margin: 0px auto;
  padding-top: 250px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;

  @media (max-width: 1240px) {
    width: 100%;
    padding-right: 24px;
    padding-left: 24px;
  }

  @media (max-width: 600px) {
    padding-top: 128px;
    position: relative;
    background-size: cover;
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
      ),
      url(${background});
  }
`;

export const UpperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TextInfoContainer = styled.div``;

export const UpperTitle = styled.h2`
  color: #101114;
  font-size: 32px;
  font-weight: 700;
  @media (max-width: 600px) {
    color: #fff;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  @media (max-width: 600px) {
    color: #fff;
  }
`;

export const About = styled.p`
  font-size: 20px;
  color: #b3b0b8;
  margin-top: 12px;
  font-weight: 400;
  margin-left: 4px;
`;

export const LowerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  bottom: 0px;
  p {
    color: #cbcbcb;
    font-size: 14px;
    font-weight: 600;
  }
`;

export const LineStyle = styled.div`
  height: 30vh;
  width: 3px;
  background-color: #d0d0d0;
  @media (max-width: 600px) {
    height: 22vh;
  }
`;

/*
  Button for reveal
*/

export const RevealContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 600px) {
    display: none;
  }

  P {
    font-size: 14px;
    color: #7c7a80;
    font-weight: 500;
  }
`;

export const RevealBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: solid 2px #7c7a80;
  margin-bottom: 8px;
  cursor: pointer;

  border-radius: 15px;
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
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ),
    url(${background});
  transition: 0.1s;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    display: none;
  }
`;
