import React from 'react'
import {Stack, Box, Button} from '@mui/material'
import {clearLaps} from '../store/stopwatchSlice'
import {useSelector, useDispatch} from 'react-redux'
import Heading from './Heading'

function Laps() {
  const dispatch = useDispatch()
  const {laps} = useSelector((state) => state.stopwatch)

  return (
    <>
      <Stack sx={{width: '100%'}} spacing={2} className="laps">
        <Heading text="Laps" />

        {laps.length > 0 ? (
          <div style={{maxHeight: '50%', overflow: 'auto'}}>
            {laps.map((item, index) => {
              return (
                <Box key={index} sx={{margin: 2}}>
                  {item}
                </Box>
              )
            })}
          </div>
        ) : (
          <Box>No Laps Yet</Box>
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
