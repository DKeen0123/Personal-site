import { Box } from 'grommet';

export default function Home() {
  return (
    <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
      <Box flex align="center" justify="center">
        app body
      </Box>
    </Box>
  );
}
