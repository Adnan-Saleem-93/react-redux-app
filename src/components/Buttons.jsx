import React, {useEffect, useState} from 'react'
import {ButtonGroup, Button} from '@mui/material'
import {increase, decrease, reset, start, stop, createLap} from '../store/stopwatchSlice'
import {useDispatch, useSelector} from 'react-redux'

function Buttons() {
  let {hours, minutes, seconds} = useSelector((state) => state.stopwatch.timer)
  const [timeInSeconds, setTimeInSeconds] = useState(0)

  useEffect(() => {
    let totalMinutes = hours * 60 + minutes
    let totalSeconds = totalMinutes * 60 + seconds
    setTimeInSeconds(totalSeconds)
  }, [hours, minutes, seconds])

  const dispatch = useDispatch()
  const handleClick = (action) => {
    if (action === start) {
      let count = 0
      let intervalId = setInterval(() => {
        count += 1
        if (count <= timeInSeconds) {
          dispatch(action())
        } else {
          clearInterval(intervalId)
        }
      }, 1000)
    } else {
      dispatch(action())
    }
  }

  return (
    <>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button mr={1} title="Increase Timer" onClick={() => handleClick(increase)}>
          +
        </Button>
        <Button mr={1} title="Start Timer" onClick={() => handleClick(start)}>
          Start
        </Button>
        <Button mr={1} title="Stop Timer" onClick={() => handleClick(stop)}>
          Stop
        </Button>
        <Button mr={1} title="Create Lap" onClick={() => handleClick(createLap)}>
          Lap
        </Button>
        <Button mr={1} title="Reset Timer" onClick={() => handleClick(reset)}>
          Reset
        </Button>
        <Button title="Decrease Timer" onClick={() => handleClick(decrease)}>
          -
        </Button>
      </ButtonGroup>
    </>
  )
}

export default Buttons
