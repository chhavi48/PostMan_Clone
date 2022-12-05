import { Box } from '@mui/material'
import React, { useState } from 'react'
import Form from './Form'
import Home from './Home';
import {makeStyles} from '@mui/styles';
import Selectformet from './Selectformet';
import Res from './Res';
import Err from './Err';
import { useContext } from 'react';
import { dataContext } from '../Context/Dataprovider';
import {checkParams} from "../Utils/CommonUtils"
import Snake from './Snake';
import { getData } from '../Service/Api';
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
    const [error,seterror]=useState(false)
    const [errmsg,seterrmsg]=useState('');
    const [errorResponse, setErrorResponse] = useState(false);
    const [apiResponse, setApiResponse] = useState({})
    const {formdata,paramdata,headerdata,jsonText}= useContext(dataContext)
    
    const onSendClick = async () => {
        if(!checkParams(formdata, jsonText, paramdata, headerdata, seterrmsg)) {
            // setError(true);
            seterror(true)
            return false;
        }
     let response=   await getData(formdata, jsonText, paramdata, headerdata);
     console.log(response);
     if (response === 'error') {
         setErrorResponse(true);
         return;
     }
     setErrorResponse(false);
     setApiResponse(response.data) 
    }
  return (
    <>
        <Home/>
        <Box className={classses.component}>

        <Form onsendClick={onSendClick}/>
        <Selectformet/>
        {/* <Res/> */}
    
        {errorResponse ? <Err/> :<Res data={apiResponse}/>}
        {error && <Snake error={error} seterror={seterror} errmsg={errmsg}/>}
        </Box>
    
    </>
  )
}

export default Main