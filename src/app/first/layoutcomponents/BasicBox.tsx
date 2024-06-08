import Box from '@mui/material/Box';


const BasicBox = () => {
    return (
        <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
            This Box renders as an HTML section element.
        </Box>
    )
}

export default BasicBox