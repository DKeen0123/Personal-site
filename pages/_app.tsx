import { AppProps } from 'next/app';
import Head from 'next/head';
import { Box, Heading, Grommet, ResponsiveContext } from 'grommet';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const AppBar = ({
  children,
}: {
  children: JSX.Element | JSX.Element[] | string;
}) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: 1 }}
  >
    {children}
  </Box>
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Grommet theme={theme} full themeMode="dark">
      <ResponsiveContext.Consumer>
        {(size) => (
          <>
            <Head>
              <title>Daniel Keen</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
              <AppBar>
                <Heading level="3" margin="none">
                  My App
                </Heading>
              </AppBar>
              <Component {...pageProps} />
            </main>
          </>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default MyApp;
