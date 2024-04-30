import { Box, useTheme } from '@mui/material';
import React from 'react';
import { Heading } from '../components/molecules/Heading';
import { SuccessStories } from '../components/organisms/SuccessStories';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';

export const ReviewsPage = (props: any) => {
    const theme = useTheme();

    return (
        <Layout location={props.location}>
            <Heading align="center" title="Reviews" />
            <Box>
                <DefaultContainer maxWidth="lg" component="section">
                    <SuccessStories />
                </DefaultContainer>
            </Box>
        </Layout>
    );
};

export default ReviewsPage;
