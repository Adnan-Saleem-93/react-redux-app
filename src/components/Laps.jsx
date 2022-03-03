import React from 'react'
import {Stack, Box, Button} from '@mui/material'
import {clearLaps} from '../store/stopwatchSlice'
import {useSelector, useDispatch} from 'react-redux'
import Heading from './Heading'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'

function Laps() {
  const dispatch = useDispatch()
  const {laps} = useSelector((state) => state.stopwatch)

  return (
    <>
      <Heading text="Laps" size="h5" fontWeight={500} />
      {laps.length > 0 ? (
        <>
          <Stack direction="row" spacing={2} id="laps">
            {laps.map((item, index) => {
              return (
                <Box key={index} sx={{margin: 2}} className="lapBox">
                  <span>{item}</span>
                  <AccessAlarmIcon />
                </Box>
              )
            })}
          </Stack>
          <Button
            variant="outlined"
            id="btn-clear"
            style={{
              display: `${laps.length > 0 ? 'inherit' : 'none'}`
            }}
            onClick={() => dispatch(clearLaps())}
          >
            Clear Laps
          </Button>
        </>
      ) : (
        <Box className="lapBoxEmpty">
          <span> No Laps Yet</span>
        </Box>
      )}
    </>
  )
}

export default Laps
