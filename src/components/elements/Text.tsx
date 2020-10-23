import styled from 'styled-components';

const Text = styled.p`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: 1.6rem;
  line-height: 140%;
  color: ${({ theme }) => theme.text.color};
`;

export { Text };
