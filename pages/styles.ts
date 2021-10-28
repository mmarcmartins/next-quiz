import styled from 'styled-components';

const placeholderStyle = `
    color: #FFF;
    opacity: 0.5;
`;

export const ImageHolder = styled.div`
    width: 100px;
    height: 100px;
    border: 5px solid rgb(255, 255, 255);    
    margin: 0px;
    position: relative;
    display: flex;
    align-items: flex-end;
    -webkit-box-pack: center;
    justify-content: center;
}
`;

export const InputName = styled.input`
  display: block;
  width: 450px;
  background-color: #7fa7ef;
  border: 2px solid #fff;
  padding: 20px 5px 20px 45px;
  font-size: 1.8em;
  box-sizing: border-box;
  margin-left: -40px;
  color: #fff;
  font-weight: 600;
  &:focus {
    outline: none;
  }
  &::-webkit-input-placeholder {
    ${placeholderStyle}
  }
  &::-moz-placeholder {
    ${placeholderStyle}
  }
`;

export const Image = styled.span`
  width: 100px;
  height: 100px;
  min-height: 110px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
`;

export const Container = styled.div`
  ${({ theme }) => theme.container}
  .centerContent {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 510px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;
