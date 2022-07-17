import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: 64px;
  color: transparent;
  -webkit-text-stroke: 1px #000;
  margin-top: 16px;

  cursor: pointer;

  -webkit-background-clip: text;
  transition: 0.2s;

  &:hover {
    color: ${(props: any) => (props.active ? "transparent" : "#e1e1e1")};
    opacity: ${(props: any) => (props.active ? "0.8" : "1")};
  }

  @media (max-width: 600px) {
    font-size: 52px;
  }
  
  @media (max-width: 500px) {
    font-size: 42px;
  }
  
  @media (max-width: 410px) {
    font-size: 36px;
  }

`;

export const LinkList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;

  flex-wrap: wrap;
`;

export const LinkContainer = styled.div`
margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 8px 16px;
  padding-right: 24px;

  font-size: 16px;
  font-weight: 700;

  border: solid 2px #b9b9b9;
  border-radius: 5px;

  margin-right: 16px;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const LinkSvg = styled.img`
  margin-right: 8px;

  @media (max-width: 600px) {
    width: 18px;
    height: 18px;
}
`;
