import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import {Box, Container, Grid} from '@mui/material'
import Heading from './components/Heading'
import Stopwatch from './components/Stopwatch'
import Buttons from './components/Buttons'
import Laps from './components/Laps'
import './App.css'

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12} sm={10} md={10} lg={10}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignContent: 'space-around',
                p: 2,
                m: 1,
                bgcolor: 'background.paper'
              }}
              className="app"
            >
              <Heading text="Redux Countdown Timer" />
              <Stopwatch />
              <Buttons />
              <Laps />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default App
