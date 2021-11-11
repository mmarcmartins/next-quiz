import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  display: block;
  position: relative;
  width: 100%;
  margin-top: auto;
  background-color: ${({ theme }) => theme.colors.lightSecondary};
  overflow: hidden;
  border: none;
  padding: 15px 0;
  span {
    position: relative;
    z-index: 3;
    color: ${({ theme }) => theme.colors.darkBackground};
    font-size: 1.8em;
    font-weight: 800;
    transition: color 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  }
  &:after,
  &:before {
    position: absolute;
    left: 0;
    top: -100%;
    width: 100%;
    height: 100%;
    display: block;
    content: '';
  }

  &:after {
    background-color: ${({ theme }) => theme.colors.darkPrimary};
    z-index: 1;
    transition: top 0.2s cubic-bezier(0.75, 0, 0.125, 1);
  }
  &:before {
    z-index: 2;
    background-color: ${({ theme }) => theme.colors.contrast};
    transition: top 0.7s cubic-bezier(0.75, 0, 0.125, 1);
  }
  &:hover,
  &:focus {
    cursor: pointer;
    span {
      color: #fff;
    }
    &:after,
    &:before {
      top: 0;
    }
  }
`;
