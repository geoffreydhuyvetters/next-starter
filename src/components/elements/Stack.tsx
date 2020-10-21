import styled from 'styled-components';
import { Box } from './Box';

const Stack = styled(Box)<LayoutProps>`
  display: flex;
  flex-direction: column;
  > * + * {
    margin-top: ${({ gap }) => gap};
  }
`;

Stack.defaultProps = {
  as: 'section',
  gap: 0,
};

export { Stack };
