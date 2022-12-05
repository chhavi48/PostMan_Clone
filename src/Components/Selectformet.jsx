import { useState, useContext } from 'react';

import { Box, Tabs, Tab } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CreTable from './CreTable';
import Createtext from './Createtext';
import { dataContext } from '../Context/Dataprovider';



const useStyles = makeStyles({
    component: {
        marginTop: 20
    },
    tab: {
        textTransform: ['none', '!important'],
        '&::active': {
            border: '1px solid #fff'
        }
    }
})

const Selectformat= () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const  {paramdata, setparamdata ,headerdata, setheaderdata}= useContext(dataContext)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className={classes.component}>
            <Tabs value={value} onChange={handleChange}
                TabIndicatorProps={{ sx: { backgroundColor: "#F26B3A", height: 4, bottom: 2} }}
            textColor="none">
                <Tab label="Params" className={classes.tab} />
                <Tab label="Headers" className={classes.tab} />
                <Tab label="Body" className={classes.tab} />
            </Tabs>
            <Box
                role="tabpanel"
                hidden={value !== 0}
                id={`simple-tabpanel-${0}`}
                aria-labelledby={`simple-tab-${0}`}
            >

                <CreTable text={'Query Params'} data={paramdata}  setData={setparamdata}/>
            </Box>
            <Box
                role="tabpanel"
                hidden={value !== 1}
                id={`simple-tabpanel-${1}`}
                aria-labelledby={`simple-tab-${1}`}
            >
              <CreTable text={'Headers'} data={headerdata} setData={setheaderdata} />

            </Box>
            <Box
                role="tabpanel"
                hidden={value !== 2}
                id={`simple-tabpanel-${2}`}
                aria-labelledby={`simple-tab-${2}`}
            >
              <Createtext/>

            </Box>
        </Box>
    )
}

export default  Selectformat;