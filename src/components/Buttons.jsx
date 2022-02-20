import React, {useEffect, useState} from 'react'
import {Stack, Button} from '@mui/material'
import {increase, decrease, reset, start, stop, createLap} from '../store/stopwatchSlice'
import {useDispatch, useSelector} from 'react-redux'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

function Buttons() {
  let {hours, minutes, seconds} = useSelector((state) => state.stopwatch.timer)
  let {isTimerStarted} = useSelector((state) => state.stopwatch)
  const [timeInSeconds, setTimeInSeconds] = useState(0)
  const [intervalId, setIntervalId] = useState(0)

  useEffect(() => {
    let totalMinutes = hours * 60 + minutes
    let totalSeconds = totalMinutes * 60 + seconds
    setTimeInSeconds(totalSeconds)
  }, [hours, minutes, seconds])

  const dispatch = useDispatch()
  const handleClick = (action) => {
    if (action === start) {
      let id = 0 // local variable to store setInterval id

      // only dispatch this action if hours, minutes or seconds are not 0
      if (hours !== 0 || minutes !== 0 || seconds !== 0) {
        let count = 0 // count variable used for invoking clearInterval method
        id = setInterval(() => {
          count += 1 // increase counter by 1 each time

          // if count value is less equal to the total seconds timer is supposed to run
          // only then the start action should be dispatched
          if (count <= timeInSeconds) {
            dispatch(action())
          }
          // else invoke the clearInterval method
          else {
            clearInterval(id)
          }
        }, 1000)
      }
      // after the setInterval method is started, assign its ID to 'intervalId' state value
      // this is done so that we can clear the interval when we click the stop timer or reset timer method
      setIntervalId(id)
    } else {
      // if intervalId state value is not 0 and methods are either 'reset' or 'stop'
      // then clear the setInterval method using its ID
      if (intervalId !== 0 && (action === reset || action === stop)) {
        clearInterval(intervalId)
      }
      dispatch(action())
    }
  }

  return (
    <>
      {/* <ButtonGroup variant="outlined" aria-label="outlined button group">
      </ButtonGroup> */}
      <Stack direction="row" spacing={2}>
        <Button
          mr={1}
          title="Increase Timer"
          variant="outlined"
          onClick={() => handleClick(increase)}
          disabled={isTimerStarted}
        >
          <AddIcon />
        </Button>
        <Button
          mr={1}
          title="Start Timer"
          onClick={() => handleClick(start)}
          disabled={isTimerStarted}
          variant="outlined"
        >
          Start
        </Button>
        <Button
          mr={1}
          title="Stop Timer"
          variant="outlined"
          onClick={() => handleClick(stop)}
          disabled={!isTimerStarted}
        >
          Stop
        </Button>
        <Button
          mr={1}
          title="Create Lap"
          variant="outlined"
          onClick={() => handleClick(createLap)}
          disabled={!isTimerStarted}
        >
          Lap
        </Button>
        <Button mr={1} title="Reset Timer" variant="outlined" onClick={() => handleClick(reset)}>
          Reset
        </Button>
        <Button
          title="Decrease Timer"
          variant="outlined"
          onClick={() => handleClick(decrease)}
          disabled={isTimerStarted}
        >
          <RemoveIcon />
        </Button>
      </Stack>
    </>
  )
}

export default Buttons
