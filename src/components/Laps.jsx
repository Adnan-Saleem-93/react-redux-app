import React from 'react'
import {Stack, Box, Button} from '@mui/material'
import {clearLaps} from '../store/stopwatchSlice'
import {useSelector, useDispatch} from 'react-redux'

function Laps() {
  const dispatch = useDispatch()
  const {laps} = useSelector((state) => state.stopwatch)

  return (
    <>
      <Stack
        sx={{width: '30%'}}
        spacing={2}
        style={{display: `${laps.length > 0 ? 'block' : 'none'}`}}
        className="laps"
      >
        {laps.length > 0 && (
          <Button
            variant="outlined"
            style={{width: '100%', color: 'white'}}
            onClick={() => dispatch(clearLaps())}
          >
            Clear Laps
          </Button>
        )}
        {laps.map((item, index) => {
          return (
            <Box
              sx={{
                textAlign: 'center',
                backgroundColor: '#add8e69e',
                padding: '4px',
                borderRadius: '4px',
                color: 'black !important'
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
