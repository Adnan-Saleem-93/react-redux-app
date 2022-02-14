import React from 'react'
import {ButtonGroup, Button} from '@mui/material'

function Buttons() {
  const handleClick = (action) => {}

  return (
    <>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button mr={1} title="Increase Timer" onClick={() => handleClick()}>
          +
        </Button>
        <Button mr={1} title="Start Timer" onClick={() => handleClick()}>
          Start
        </Button>
        <Button mr={1} title="Stop Timer" onClick={() => handleClick()}>
          Stop
        </Button>
        <Button mr={1} title="Create Lap" onClick={() => handleClick()}>
          Lap
        </Button>
        <Button mr={1} title="Reset Timer" onClick={() => handleClick()}>
          Reset
        </Button>
        <Button title="Decrease Timer" onClick={() => handleClick()}>
          -
        </Button>
      </ButtonGroup>
    </>
  )
}

export default Buttons
