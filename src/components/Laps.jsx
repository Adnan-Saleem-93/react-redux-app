import React from 'react'
import {Stack, Box} from '@mui/material'

function Laps() {
  return (
    <>
      <Stack sx={{width: '30%'}} spacing={2}>
        <Box
          sx={{
            textAlign: 'center',
            backgroundColor: '#add8e69e',
            padding: '4px',
            borderRadius: '4px'
          }}
        >
          00:00:00
        </Box>
      </Stack>
    </>
  )
}

export default Laps
