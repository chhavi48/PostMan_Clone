import { TableCell, TableRow,Checkbox, TextField } from '@mui/material'
import React from 'react'
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

const Addrow = () => {
    const classes = useStyles();
  return (
      <TableRow>
        <TableCell className={classes.tablecell}>
            <Checkbox
            size='large'
            className={classes.checkbox}
            />
        </TableCell>
        <TableCell  className={classes.tablecell}>
            <TextField
            className={classes.textfield}
            inputProps={{style:{height:30,padding:'0 5px'}}}
            />
        </TableCell>
        <TableCell  className={classes.tablecell}>
            <TextField
                        className={classes.textfield}
                        inputProps={{style:{height:30,padding:'0 5px'}}}
            />
        </TableCell>
      </TableRow>

  )
}

export default Addrow