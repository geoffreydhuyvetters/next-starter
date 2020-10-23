import styled from 'styled-components';

interface ButtonProps {
  children?: React.ReactNode;
}

export const Button = styled.button<ButtonProps>`
  font-family: ${({ theme }) => theme.button.fontFamily};
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.button.backgroundColor.default};
  border: 0 solid ${({ theme }) => theme.button.backgroundColor.default};
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 0.4rem;
  outline: none;
  cursor: pointer;

  transition: background-color 0.3s;
  transition: color 0.3s;

  :hover {
    background-color: ${({ theme }) => theme.button.backgroundColor.hover};
    color: ${({ theme }) => theme.button.color.hover};
    border: 2px solid ${({ theme }) => theme.button.backgroundColor.default};
  }
`;

Button.defaultProps = {
  children: 'Click me',
};
