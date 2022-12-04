import { Typography, Box, TextareaAutosize } from "@mui/material"

const textareaStyle = { 
    width: '100%', 
    padding: 10,  
    background: `url(http://i.imgur.com/2cOaJ.png)`,
    backgroundAttachment: 'local',
    backgroundRepeat: 'no-repeat',
    paddingLeft: 35,
    paddingTop: 10,
    borderColor: '#ccc' 
}

const Res = () => {


    return (
        <Box>
            <Typography mt={2} mb={2}>Response</Typography>
            <TextareaAutosize 
                minRows={3}
                maxRows={5}
                style={textareaStyle}
                disabled="disabled"
                // value={readableobj}
            />
        </Box>
    )
}

export default Res;