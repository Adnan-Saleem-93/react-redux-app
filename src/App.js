import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import {Box} from '@mui/material'
import Heading from './components/Heading'
import Stopwatch from './components/Stopwatch'
import Buttons from './components/Buttons'
import Laps from './components/Laps'
import './App.css'

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          flexWrap: 'wrap',
          alignContent: 'space-around',
          p: 2,
          m: 0,
          bgcolor: 'background.paper',
          borderRadius: 1
        }}
      >
        <Heading />
        <Stopwatch />
        <Buttons />
        <Laps />
      </Box>
    </>
  )
}

export default App
