import styled from 'styled-components';
import { Box } from './Box';

export const Inline = styled(Box)<LayoutProps>`
  display: flex;
  flex-direction: row;
  > * + * {
    margin-left: ${({ theme, gap }) => theme.methods.calculateGap(gap)};
  }
`;

Inline.defaultProps = {
  as: 'section',
  gap: 0,
};
