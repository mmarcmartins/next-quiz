import styled from 'styled-components';

export const UserList = styled.div`
  display: block;
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
`;

export const Container = styled.div`
  ${({ theme }) => theme.container}
  width: 100%;
  padding: 0;
  justify-content: flex-start;
`;

export const QuestionForm = styled.div`
  display: block;
  position: relative;
  margin-left: 100px;
  width: 1000px;
  .user-image {
    display: block;
    position: relative;
    margin: 0 auto;
    width: 150px;
  }
`;
