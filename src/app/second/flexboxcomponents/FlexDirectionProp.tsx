import { Box } from '@mui/material'
import React from 'react'

const FlexDirectionProp = () => {
    const elements = { fontSize: '30px', margin: '10px', padding: '20px', backgroundColor: '#f1f1f1' }
    return (
        <>
            flexDirection: column
            <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'dodgerblue' }}>

                <Box sx={elements}>
                    1
                </Box>

                <Box sx={elements}>
                    2
                </Box>

                <Box sx={elements}>
                    3
                </Box>





            </Box>

            flexDirection: column-reverse

            <Box sx={{ display: 'flex', flexDirection: 'column-reverse', backgroundColor: 'dodgerblue' }}>

                <Box sx={elements}>
                    1
                </Box>

                <Box sx={elements}>
                    2
                </Box>

                <Box sx={elements}>
                    3
                </Box>
            </Box>





            flexDirection: row

            <Box sx={{ display: 'flex', flexDirection: 'row', backgroundColor: 'dodgerblue' }}>

                <Box sx={elements}>
                    1
                </Box>

                <Box sx={elements}>
                    2
                </Box>

                <Box sx={elements}>
                    3
                </Box>
            </Box>


            flexDirection: row-reverse

            <Box sx={{ display: 'flex', flexDirection: 'row-reverse', backgroundColor: 'dodgerblue' }}>

                <Box sx={elements}>
                    1
                </Box>

                <Box sx={elements}>
                    2
                </Box>

                <Box sx={elements}>
                    3
                </Box>
            </Box>


            flexWrap: wrap, no-wrap(default), wrap-reverse

            <Box sx={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'dodgerblue' }}>

                <Box sx={elements}>
                    1
                </Box>

                <Box sx={elements}>
                    2
                </Box>

                <Box sx={elements}>
                    3
                </Box>
                <Box sx={elements}>
                    4
                </Box>

                <Box sx={elements}>
                    5
                </Box>

                <Box sx={elements}>
                    6
                </Box>
                <Box sx={elements}>
                    7
                </Box>

                <Box sx={elements}>
                    8
                </Box>

                <Box sx={elements}>
                    9
                </Box>
                <Box sx={elements}>
                    10
                </Box>

                <Box sx={elements}>
                    11
                </Box>

                <Box sx={elements}>
                    12
                </Box>
            </Box>

                the flex-flow property (sets both flex-direction and wrap )

                <Box sx={{ display: 'flex', flexFlow: 'row wrap', backgroundColor: 'dodgerblue' }}>

                <Box sx={elements}>
                    1
                </Box>

                <Box sx={elements}>
                    2
                </Box>

                <Box sx={elements}>
                    3
                </Box>
                <Box sx={elements}>
                    4
                </Box>

                <Box sx={elements}>
                    5
                </Box>

                <Box sx={elements}>
                    6
                </Box>
                <Box sx={elements}>
                    7
                </Box>

                <Box sx={elements}>
                    8
                </Box>

                <Box sx={elements}>
                    9
                </Box>
                <Box sx={elements}>
                    10
                </Box>

                <Box sx={elements}>
                    11
                </Box>

                <Box sx={elements}>
                    12
                </Box>
                </Box>


        </>



    )
}

export default FlexDirectionProp
