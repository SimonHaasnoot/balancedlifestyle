import { Box, Button, Typography, useTheme } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';

export const ThanksPage = (props: any) => {
    const theme = useTheme();
    const { isMobile } = useIsMobile();

    return (
        <>
            <Helmet>
                <title>Bedankt - Balanced Lifestyle</title>
            </Helmet>
            <Layout location={props.location} disableHeaderTransition={true}>
                <DefaultContainer
                    sx={{ minHeight: isMobile ? '70vh' : '95vh', display: 'flex', alignItems: 'center', textAlign: isMobile ? 'center' : 'left' }}
                >
                    <Typography component="h1" variant="h1" sx={{ color: theme.palette.common.black }}>
                        Bedankt.
                    </Typography>
                    <Typography component="h2" variant="subtitle2" sx={{ color: theme.palette.common.black }}>
                        Je formulier is in goede handen ontvangen! <br />
                        we nemen zo snel mogelijk contact met je op.
                    </Typography>
                    <Button href="/" variant="contained" sx={{ my: 5 }}>
                        Ga terug naar de homepage
                    </Button>
                </DefaultContainer>
            </Layout>
        </>
    );
};

export default ThanksPage;
