import styled from "styled-components";

export const BigContainer = styled.div`
  background-color: #fafafa;
  width: 100vw;
  display: flex;
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
  min-height: 100vh;
  z-index: 2;

  @media (max-width: 1240px) {
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 64px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const StacksContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 49% 49%;
    justify-content: space-between;
    width: 100%;
  }
`;
