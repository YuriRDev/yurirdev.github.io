import styled from "styled-components";

export const BigContainer = styled.div`
  width: 100%;
  background: #fff;
  transition: 0.2s;
`;

export const Container = styled.div`
  max-width: 1170px;
  margin: 0px auto;
  padding-top: 128px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
  z-index: 2;

  @media (max-width: 1240px) {
    padding-right: 24px;
    padding-left: 24px;
  }
  @media (max-width: 600px) {
    padding-top: 64px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;
