import React from 'react'
import {ButtonGroup, Button} from '@mui/material'
import store from '../store/store'
import * as actions from '../store/actionCreators'

function Buttons() {
  const handleClick = (action) => {
    store.dispatch(action())
  }

  return (
    <>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button mr={1} title="Increase Timer" onClick={() => handleClick(actions.timerIncreased)}>
          +
        </Button>
        <Button mr={1} title="Start Timer" onClick={() => handleClick(actions.timerStarted)}>
          Start
        </Button>
        <Button mr={1} title="Stop Timer" onClick={() => handleClick(actions.timerStopped)}>
          Stop
        </Button>
        <Button mr={1} title="Create Lap" onClick={() => handleClick(actions.lapCreated)}>
          Lap
        </Button>
        <Button mr={1} title="Reset Timer" onClick={() => handleClick(actions.timerReset)}>
          Reset
        </Button>
        <Button title="Decrease Timer" onClick={() => handleClick(actions.timerDecreased)}>
          -
        </Button>
      </ButtonGroup>
    </>
  )
}

export default Buttons
