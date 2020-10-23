import styled from 'styled-components';
import { Box } from './Box';

const Stack = styled(Box)<LayoutProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > * + * {
    margin-top: ${({ theme, gap }) => theme.methods.calculateGap(gap)};
  }
`;

Stack.defaultProps = {
  as: 'section',
  gap: 0,
};

export { Stack };
