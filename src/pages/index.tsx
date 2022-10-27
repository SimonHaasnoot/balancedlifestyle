import { Box, Typography } from '@mui/material';
import * as React from 'react';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';
import '../css/app.css';

export const index = () => {
    return (
        <>
            <Layout>
                {/* <Hero height='95vh' /> */}

                <DefaultContainer maxWidth="lg">
                    <Typography sx={{mb: '20px'}} variant="h1">This is H1</Typography>
                    <Typography sx={{mb: '20px'}} variant="h2">This is H2</Typography>
                    <Typography sx={{mb: '20px'}} variant="h3">This is H3</Typography>
                    <Typography sx={{mb: '20px'}} variant="h4">This is H4</Typography>
                    <Typography sx={{mb: '20px'}} variant="subtitle1">This is subtitle1</Typography>
                    <Typography sx={{mb: '20px'}} variant="subtitle2">This is subtitle2</Typography>
                    <Typography sx={{mb: '20px'}} variant="body1">This is body1</Typography>
                    <Typography sx={{mb: '20px'}} variant="body2">This is body2</Typography>
                    <Box>
                        <Typography sx={{mb: '20px'}} variant="caption">This is a caption</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{mb: '20px'}} variant="overline">This is an overline</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{mb: '20px'}} variant="button">This is a button</Typography>
                    </Box>
                </DefaultContainer>
            </Layout>
        </>
    );
};

export default index;
