//https://codepen.io/folaad/pen/YvmRpz
import styled, { keyframes } from 'styled-components';

const colorAnimation = keyframes`
0% {
    fill: white;
}
50% {
    fill: #BCE596;
}
100% {
    fill: white;
}
`;

const btnContent = {
  style: `display: flex;
    padding: 10px 45px;
    text-decoration: none;
    font-size: 40px;
    color: white;    
    transition: 1s;
    box-shadow: 6px 6px 0 black;
    transform: skewX(-15deg);
    &:focus {
    outline: none;
    }`,
  hover: `
    outline: none;
    cursor: pointer;
    transition: 0.5s;    
    span {
        &:nth-child(2) {
            transition: 0.5s;
            margin-right: 45px;
        }
    }
    `,
};

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  background:none;
  border:none;
  .btn-content {
    ${btnContent.style}
    background-color: ${({ theme }) => theme.colors.darkPrimary};
  }
  &:hover .btn-content,
  &:focus .btn-content {
    ${btnContent.hover}
    box-shadow: 10px 10px 0 ${({ theme }) => theme.colors.secondary};
    path {
      &.one {
        transform: translateX(0%);
        animation: ${colorAnimation} 1s infinite 0.6s;
      }
      &.two {
        transform: translateX(0%);
        animation: ${colorAnimation} 1s infinite 0.4s;
      }
      &.three {
        animation: ${colorAnimation} 1s infinite 0.2s;
      }
    }
  }
  span {
    transform: skewX(15deg);
    font-weight: 800;
    &:nth-child(2) {
      width: 20px;
      margin-left: 30px;
      position: relative;
      top: 12%;
      transition: 0.5s;
      margin-right: 0px;
    }
  }
  path {
    &.one {
      transition: 0.4s;
      transform: translateX(-60%);
    }
    &.two {
      transition: 0.5s;
      transform: translateX(-30%);
    }
  }
`;
