import styled from 'styled-components';
import NextLink, { LinkProps } from 'next/link';

const LinkBody = styled.a``;

type Props = LinkProps & { className?: string; children: React.ReactNode };

const Link = ({ as, ...props }: Props) => (
  <NextLink as={as} passHref {...props}>
    <LinkBody className={props.className}>{props.children}</LinkBody>
  </NextLink>
);

export { Link };
