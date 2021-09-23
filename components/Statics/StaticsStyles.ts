import styled from "styled-components";

export const StaticsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export const ValueStyled = styled.div`
  display: flex;
  height: 180px;
  width: 180px;
  font-size: 5rem;
  justify-content: center;
  align-items: center;
  border-radius: 90px;
  font-size: 4rem;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#FDD60F"}}
  color: ${({ fontColor }) => fontColor ?? "#FDD60F"}}
`;

export const TextStyled = styled.span`
  font-size: 2rem;
`;
