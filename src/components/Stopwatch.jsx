import React from 'react'
import {Typography} from '@mui/material'
import {useSelector} from 'react-redux'

function Stopwatch() {
  let {hours, minutes, seconds} = useSelector((state) => state.stopwatch.timer)

  // this method will be used to format hours, minutes & seconds and return a timer formatted string
  const renderTimer = () => {
    hours = hours < 10 ? `0${hours}` : hours.toString()
    minutes = minutes < 10 ? `0${minutes}` : minutes.toString()
    seconds = seconds < 10 ? `0${seconds}` : seconds.toString()
    return `${hours}:${minutes}:${seconds}`
  }

  return (
    <Typography variant="h2" component="h2" sx={{fontWeight: 500}}>
      {renderTimer()}
    </Typography>
  )
}

export default Stopwatch
