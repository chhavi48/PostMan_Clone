import { Button, MenuItem, Select, TextField} from '@mui/material'
import { Box, height } from '@mui/system'
import { makeStyles } from '@mui/styles';
import React from 'react'
import { useContext } from 'react';
import { dataContext } from '../Context/Dataprovider';
const useStyles = makeStyles(
    {

        select:{
            width:150,
            height:50,
            justifyContent:'space-between'
        },
        textfield:{
            width:'100%',
            background: '#F6F6F6'

        },
        component:{
              display:'flex',
              alignItems:'center'

        },
        Button: {
          width: 100,
          height: 40,
          marginLeft: [5, '!important']
        }

    }
)

const Form = () => {
    const classses=useStyles();
    const {formdata,setformdata}=useContext(dataContext)
    const handleChange = (e) => {
       setformdata({...formdata,type:e.target.value})
       //log the form type
   console.log(formdata)
    }
    const urlchange =(e)=>{
      setformdata({...formdata,url:e.target.value})  
    }
  return (
   <>
   <Box className={classses.component}>
   <Select
   value={formdata.type}
    label="POST"
    onChange={(e)=>handleChange(e)}
    className={classses.select}
   
  >
    <MenuItem value={'GET'}>GET</MenuItem>
    <MenuItem value={'POST'}>POST</MenuItem>
    
  </Select>
  <TextField 
  className={classses.textfield}
  onChange={(e)=>urlchange(e)}
  ></TextField>

<Button
className={classses.Button}
variant='contained'
>Send</Button>

   </Box>
   </>
  )
}

export default Form