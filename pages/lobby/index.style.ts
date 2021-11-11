import styled from 'styled-components';

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${({ theme }) => theme.colors.darkBackground};
  height: 100vh;
  width: 300px;
  .total-players {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.lightPrimary};
    & > span,
    & > h1 {
      font-size: 1.5em;
      color: #fff;
      font-weight: 800;
    }
    & > span {
      margin-right: 10px;
    }
  }
  ul {
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.darkBackground};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 25px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.darkBackground};
    }
  }
`;

export const Container = styled.div`
  ${({ theme }) => theme.container}
  width: 100%;
  padding: 0;
  justify-content: flex-start;
`;

export const QuestionDiv = styled.div`
  display: block;
  position: relative;
  margin: 0 auto;
  width: 1000px;
  .current-user {
    width: 330px;
    margin: 0 auto;
    display: block;
    position: relative;
    background-color: #fff;
    padding: 8px 0;
    max-width: 100%;
    border-radius: 15px;
    text-align: center;
    span {
      display: block;
      font-weight: 800;
      margin-top: 10px;
      font-size: 1.3em;
      color: #000;
    }
    .user-image {
      display: block;
      position: relative;
      margin: 0 auto;
      width: 80px;
    }
  }
`;

export const QuestionForm = styled.form`
  width: 100%;
  margin: 0 auto;
  display: flex;
  max-height: 700px;
  flex-direction: column;
  position: relative;
  margin-top: 10px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.primary};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 25px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.darkBackground};
  }
`;

export const AddQuestionPlaceholder = styled.button`
  display: flex;
  border: 0;
  padding: 0;
  position: relative;
  border-radius: 35px;
  background-color: #fff;
  align-items: center;
  width: 330px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 20px;
  .icon-placeholder {
    z-index: 2;
    display: block;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.lightSecondary};
    border-radius: 50%;
    border: 2px solid #fff;
    width: 50px;
    height: 50px;
    svg {
      color: #fff;
      width: 25px;
      height: 35px;
    }
  }
  span {
    z-index: 2;
    font-weight: 800;
    color: #000;
    font-size: 1.2em;
    display: block;
    margin-left: 45px;
    transition: color 0.3s cubic-bezier(0.35, 0.88, 0.98, 1);
  }
  &:hover {
    cursor: pointer;
  }
  &:hover,
  &:focus {
    span {
      color: #fff;
    }
    &:after {
      bottom: 0;
    }
  }
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: -100%;
    background-color: ${({ theme }) => theme.colors.lightSecondary};
    z-index: 1;
    transition: bottom 0.3s cubic-bezier(0.35, 0.88, 0.98, 1);
  }
`;
