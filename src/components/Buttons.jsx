import React from 'react'
import {ButtonGroup, Button} from '@mui/material'

function Buttons() {
  return (
    <>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button mr={1} title="Increase Timer">
          +
        </Button>
        <Button mr={1} title="Start Timer">
          Start
        </Button>
        <Button mr={1} title="Stop Timer">
          Stop
        </Button>
        <Button mr={1} title="Create Lap">
          Lap
        </Button>
        <Button mr={1} title="Reset Timer">
          Reset
        </Button>
        <Button title="Decrease Timer">-</Button>
      </ButtonGroup>
    </>
  )
}

export default Buttons
