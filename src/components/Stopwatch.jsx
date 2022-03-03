import React from 'react'
import {useSelector} from 'react-redux'
import Heading from './Heading'

function Stopwatch() {
  let {hours, minutes, seconds} = useSelector((state) => state.stopwatch.timer)

  // this method will be used to format hours, minutes & seconds and return a timer formatted string
  const renderTimer = () => {
    hours = hours < 10 ? `0${hours}` : hours.toString()
    minutes = minutes < 10 ? `0${minutes}` : minutes.toString()
    seconds = seconds < 10 ? `0${seconds}` : seconds.toString()
    return `${hours}:${minutes}:${seconds}`
  }

  return <Heading text={renderTimer()} size="h3" fontWeight={500} />
}

export default Stopwatch
