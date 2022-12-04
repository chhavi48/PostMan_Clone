import { Box } from '@mui/material'
import React from 'react'
import Form from './Form'
import Home from './Home';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(
    {
        component: {
            width: '70%',
            margin:'20px solid 0 auto'
        }
    }
)

const Main = () => {
    const classses=useStyles()
  return (
    <>
        <Home/>
        <Box className={classses.component}>
        <Form/>
        </Box>
    
    </>
  )
}

export default Main