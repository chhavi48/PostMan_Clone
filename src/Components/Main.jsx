import { Box } from '@mui/material'
import React from 'react'
import Form from './Form'
import Home from './Home';
import {makeStyles} from '@mui/styles';
import Selectformet from './Selectformet';
import Res from './Res';
import Err from './Err';
import { useContext } from 'react';
import { dataContext } from '../Context/Dataprovider';

const useStyles = makeStyles(
    {
        component: {
            width: '70%',
            margin:'20px solid 0 auto'
        }
    }
)

const Main = () => {
    const classses=useStyles();
    const {formdata,paramdata,headerdata,jsonText}= useContext(dataContext)
    
    const onsendClick=()=>{
      
    }
  return (
    <>
        <Home/>
        <Box className={classses.component}>

        <Form onsendClick={onsendClick}/>
        <Selectformet/>
        <Res/>
        {/* <Err/> */}
        </Box>
    
    </>
  )
}

export default Main