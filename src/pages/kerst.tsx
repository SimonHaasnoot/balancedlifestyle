import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from '../components/pagelayout/Layout';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import pushupsVideo from '../images/special/kerst.mp4';

export default function ChristmasPage(props: any) {
    const theme = useTheme();

    return (
        <Layout location={props.location}>
            <Helmet>
                <title>Kerst - Balanced Lifestyle</title>
            </Helmet>
            <Box sx={{ backgroundColor: theme.palette.grey[100] }} component="section" py={20}>
                <DefaultContainer maxWidth="lg" sx={{ textAlign: 'center' }} doublePadding>
                    <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }} mb={10}>
                        Bekijk onderstaande video voor jouw nieuwjaarscadeau
                    </Typography>

                    <video controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                        <source src={pushupsVideo} type="video/mp4" />
                    </video>

                    <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.white, mb: 10, mt: 10 }}>
                        Namens Balanced Lifestyle wensen wij u fijne feestdagen en een gezond 2024!
                    </Typography>
                </DefaultContainer>
            </Box>
        </Layout>
    );
}
