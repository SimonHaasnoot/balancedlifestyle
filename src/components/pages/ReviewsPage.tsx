import { Box } from '@mui/material';
import React from 'react';
import { AppShell } from '../shell/AppShell';
import { Heading } from '../molecules/Heading';
import { SuccessStories } from '../organisms/SuccessStories';
import { DefaultContainer } from '../pagelayout/DefaultContainer';
import { Layout } from '../pagelayout/Layout';

export const ReviewsPage = (props: any) => {

    return (
        <AppShell>
            <Layout>
            <Heading align="center" title="Reviews" />
            <Box>
                <DefaultContainer maxWidth="lg" component="section">
                    <SuccessStories />
                </DefaultContainer>
            </Box>
        </Layout>
    </AppShell>
);
};

export default ReviewsPage;
