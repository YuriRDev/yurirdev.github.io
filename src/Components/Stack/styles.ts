import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  padding: 14px 20px;
  padding-right: 32px;

  border-radius: 5px;

  background-color: #f5f5f5;
  border: solid 1px #d9d9d9;

  margin-right: 24px;
  margin-bottom: 32px;

  @media (max-width: 600px) {
    width: 100%;
    align-items: center;
    justify-content: flex-start;

    padding: 12px 16px;
 }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;


`;

export const Name = styled.text`
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 15px
}
`;

export const Time = styled.text`
  font-size: 14px;
  font-weight: 500;
  color: #7c7a80;
  @media (max-width: 600px) {
    font-size: 12px
}
`;

export const SvgContainer = styled.img`
  margin-right: 12px;
  @media (max-width: 600px) {
    margin-right: 8px;
    height: 28px;
    width: 28px;
}
`;
