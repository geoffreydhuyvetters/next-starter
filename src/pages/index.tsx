import Head from 'next/head';

import { Header } from '@/elements/Header';
import { Text } from '@/elements/Text';
import { Link } from '@/elements/Link';

import { Stack } from '@/elements/Stack';
import { Inline } from '@/elements/Inline';
import { Button } from '@/elements/Button';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Stack
        gap={6}
        css={`
          margin: 2rem;
        `}
      >
        <Header>Home</Header>
        <Inline gap={6}>
          <Text
            css={`
              flex: 1;
            `}
          >
            Lorem ipsum dolor, sit amet consectetur{' '}
            <Link href="testing">testing</Link> elit. Consectetur, quasi.
          </Text>
          <Text
            css={`
              flex: 3;
            `}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            suscipit quos ut ad repellendus nam quam, odit nobis reiciendis
            molestias!
          </Text>
          <Text
            css={`
              flex: 1;
            `}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            suscipit quos ut ad repellendus nam quam, odit nobis reiciendis
            molestias!
          </Text>
        </Inline>
        <Button />
      </Stack>
    </>
  );
};

export default Home;
