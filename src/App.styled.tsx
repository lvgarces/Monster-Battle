import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const AppContainer = styled(Box)(() => ({
  background: `url(/monsterattacking.webp) no-repeat center center`,
  backgroundSize: 'cover',
  backgroundColor: 'white',
  width: '100%',
  height: 'calc(100vh - 69px)',
  maxHeight: '100vh',
  paddingTop: '69px',
}));
