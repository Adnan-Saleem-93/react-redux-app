import React from 'react'
import {Button} from '@mui/material'

const ButtonComponent = ({title, onClick, disabled, content}) => {
  return (
    <Button mr={1} title={title} variant="outlined" onClick={onClick} disabled={disabled}>
      {content}
    </Button>
  )
}

export default ButtonComponent
