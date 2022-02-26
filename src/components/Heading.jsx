import React from 'react'
import {Typography} from '@mui/material'

function Heading({text}) {
  return (
    <Typography variant="h3" component="h3" sx={{fontWeight: 300}}>
      {text}
    </Typography>
  )
}

export default Heading
