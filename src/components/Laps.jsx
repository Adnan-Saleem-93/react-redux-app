import React from 'react'
import {Stack, Box} from '@mui/material'
import {useSelector} from 'react-redux'

function Laps() {
  const {laps} = useSelector((state) => state.stopwatch)

  return (
    <>
      <Stack
        sx={{width: '30%'}}
        spacing={2}
        style={{display: `${laps.length > 0 ? 'block' : 'none'}`}}
      >
        {laps.map((item, index) => {
          return (
            <Box
              sx={{
                textAlign: 'center',
                backgroundColor: '#add8e69e',
                padding: '4px',
                borderRadius: '4px'
              }}
              key={index}
            >
              {item}
            </Box>
          )
        })}
      </Stack>
    </>
  )
}

export default Laps
