import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.container}
  width: 800px;
  max-width: 100;
`;
