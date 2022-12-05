import React from 'react'
import { Snackbar } from '@mui/material'
const Snake = ({error,seterror,errmsg}) => {
    const handleClose = () => {
        seterror(false)
    }
  return (
        <>

<Snackbar
  open={error}
  autoHideDuration={6000}
  onClose={handleClose}
  message={errmsg}

/>
        </>
  )
}

export default Snake