import styled from 'styled-components';

export const Header = styled.h1`
  font-family: ${({ theme }) => theme.header.fontFamily};
  font-size: 5rem;
  color: ${({ theme }) => theme.header.color};
`;
