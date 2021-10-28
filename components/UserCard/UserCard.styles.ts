import styled from 'styled-components';

export const UserCardStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 5px solid ${({ theme }) => theme.colors.lightPrimary};
  img {
    margin-right: 10px;
    max-width: 100%;
    width: 80px;
  }
  span {
    font-weight: 800;
    font-size: 1.2em;
    padding: 0 20px;
  }
`;
