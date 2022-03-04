import React, {useEffect, useState} from 'react'
import {Stack} from '@mui/material'
import {increase, decrease, reset, start, stop, createLap} from '../store/stopwatchSlice'
import {useDispatch, useSelector} from 'react-redux'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import ButtonComponent from './Button'

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
            dispatch(start())
          }
          // else invoke the clearInterval method
          else {
            clearInterval(id)
            dispatch(stop())
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
      <Stack direction="row" spacing={2} id="buttons">
        <ButtonComponent
          title="Increase Timer"
          onClick={() => handleClick(increase)}
          disabled={isTimerStarted}
          content={<AddIcon />}
        />
        <ButtonComponent
          title="Start Timer"
          onClick={() => handleClick(start)}
          disabled={isTimerStarted}
          content="Start"
        />

        <ButtonComponent
          title="Stop Timer"
          onClick={() => handleClick(stop)}
          disabled={!isTimerStarted}
          content="Stop"
        />

        <ButtonComponent
          title="Create Lap"
          onClick={() => handleClick(createLap)}
          disabled={!isTimerStarted}
          content="Lap"
        />

        <ButtonComponent title="Reset Timer" onClick={() => handleClick(reset)} content="Reset" />
        <ButtonComponent
          title="Decrease Timer"
          onClick={() => handleClick(decrease)}
          disabled={isTimerStarted}
          content={<RemoveIcon />}
        />
      </Stack>
    </>
  )
}

export default Buttons
