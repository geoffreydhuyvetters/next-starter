import styled from 'styled-components';
import { Box } from './Box';

const Inline = styled(Box)<LayoutProps>`
  display: flex;
  flex-direction: row;
  > * + * {
    margin-left: ${({ gap }) => gap};
  }
`;

Inline.defaultProps = {
  as: 'section',
  gap: 0,
};

export { Inline };
