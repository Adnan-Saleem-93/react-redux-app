import React from 'react'
import {Typography} from '@mui/material'

function Heading({text, size = 'h4', fontWeight = 300}) {
  return (
    <Typography variant={size} component={size} sx={{fontWeight: fontWeight}}>
      {text}
    </Typography>
  )
}

export default Heading
