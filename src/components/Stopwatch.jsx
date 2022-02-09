import React from 'react'
import {Typography} from '@mui/material'
import store from '../store/store'

function Stopwatch() {
  // store.subscribe(() => {
  //   console.log(store.getState())
  // })
  let {timer} = store.getState()
  let {hours, minutes, seconds} = timer
  return (
    <Typography variant="h2" component="h2" sx={{fontWeight: 500}}>
      {hours}:{minutes}:{seconds}
    </Typography>
  )
}

export default Stopwatch
