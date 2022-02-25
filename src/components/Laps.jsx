import React from 'react'
import {Stack, Box, Button} from '@mui/material'
import {clearLaps} from '../store/stopwatchSlice'
import {useSelector, useDispatch} from 'react-redux'

function Laps() {
  const dispatch = useDispatch()
  const {laps} = useSelector((state) => state.stopwatch)

  return (
    <>
      <Stack sx={{width: '100%'}} spacing={2} className="laps">
        <h3>Laps</h3>
        {/* {laps.length > 0 && (
          <Button
            variant="outlined"
            style={{width: '100%', color: 'white'}}
            onClick={() => dispatch(clearLaps())}
          >
            Clear Laps
          </Button>
        )} */}
        {laps.length > 0 ? (
          laps.map((item, index) => {
            return <Box key={index}>{item}</Box>
          })
        ) : (
          <Box>0 Laps</Box>
        )}
        <Button
          variant="outlined"
          id="btn-clear"
          style={{width: '50%', color: 'black'}}
          onClick={() => dispatch(clearLaps())}
        >
          Clear Laps
        </Button>
      </Stack>
    </>
  )
}

export default Laps
