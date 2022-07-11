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
`;

export const Time = styled.text`
  font-size: 14px;
  font-weight: 500;
  color: #7c7a80;
`;

export const SvgContainer = styled.img`
  margin-right: 12px;
`;
