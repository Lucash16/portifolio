import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';

function App() {
  return <AppBar position='static'>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Box>
          <IconButton
          size='large'
          >
            <Typography>
              TEtse
            </Typography>
          </IconButton>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
}

export default App
