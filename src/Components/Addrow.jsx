import { TableCell, TableRow,Checkbox, TextField } from '@mui/material'
import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({

    tablecell: {
        padding: ['7px 5px', '!important'],
        border: '1px solid rgba(224, 224, 224, 1)',
        borderCollapse: 'collapse'
    },
    Checkbox:{
        padding:['2px 5px', '!important'],
    },
    textfield:{
             width: '100%',

    }

});

const Addrow = ({addRows,rowId,data,setdata}) => {
    const classes = useStyles();
    const [checkcheckbox,setchcheckcheckbox] = useState(false)
    const handleChange=(e)=>{
        if (!checkcheckbox) {
    setchcheckcheckbox(true);
            addRows(oldArr => [...oldArr, rowId]);
            // result = { ...result, id: rowId, check: true }
        }
        else{
            setchcheckcheckbox(false);
        }

    }
    const ontextChange=(e)=>{
         
    }
  return (
      <TableRow>
        <TableCell className={classes.tablecell}>
            <Checkbox
            checked={checkcheckbox}
            onChange={(e)=>handleChange(e)}
            size='large'
            className={classes.checkbox}
            />
        </TableCell>
        <TableCell  className={classes.tablecell}>
            <TextField
            className={classes.textfield}
            inputProps={{style:{height:30,padding:'0 5px'}}}
            onChange={(e)=>ontextChange(e)}
            />
        </TableCell>
        <TableCell  className={classes.tablecell}>
            <TextField
                        className={classes.textfield}
                        inputProps={{style:{height:30,padding:'0 5px'}}}
                        onChange={(e)=>ontextChange(e)}
            />
        </TableCell>
      </TableRow>

  )
}

export default Addrow