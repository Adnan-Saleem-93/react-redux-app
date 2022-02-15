import React from 'react'
import {ButtonGroup, Button} from '@mui/material'
import {increase, decrease, reset, start, stop, createLap} from '../store/stopwatchSlice'
import {useDispatch} from 'react-redux'

function Buttons() {
  const dispatch = useDispatch()
  const handleClick = (action) => {
    dispatch(action())
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
