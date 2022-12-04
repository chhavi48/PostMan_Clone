import { Button, MenuItem, Select, TextField} from '@mui/material'
import { Box, height } from '@mui/system'
import { makeStyles } from '@mui/styles';
import React from 'react'

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
            height:55,
            width:150
        }

    }
)

const Form = () => {
    const classses=useStyles()
  return (
   <>
   <Box className={classses.component}>
   <Select
    label="POST"
    className={classses.select}
  >
    <MenuItem value={'GET'}>GET</MenuItem>
    <MenuItem value={'POST'}>POST</MenuItem>
    
  </Select>
  <TextField 
  className={classses.textfield}
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