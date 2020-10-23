import styled from 'styled-components';
import NextLink, { LinkProps } from 'next/link';

const LinkBody = styled.a`
  font-family: ${({ theme }) => theme.link.fontFamily};
  color: ${({ theme }) => theme.link.color};
  font-weight: 700;
  :hover {
    color: ${({ theme }) => theme.link.color};
    text-decoration: none;
  }
`;

type Props = LinkProps & { className?: string; children: React.ReactNode };

export const Link = ({ as, ...props }: Props) => (
  <NextLink as={as} passHref {...props}>
    <LinkBody className={props.className}>{props.children}</LinkBody>
  </NextLink>
);
