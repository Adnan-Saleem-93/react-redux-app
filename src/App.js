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
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={8}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignContent: 'space-around',
                p: 2,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 2
              }}
              className="app"
            >
              <Heading />
              <Stopwatch />
              <Buttons />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Laps />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default App
