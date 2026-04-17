import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { AppShell } from '../shell/AppShell';
import { DefaultContainer } from '../pagelayout/DefaultContainer';
import { Layout } from '../pagelayout/Layout';
import useIsMobile from '../../hooks/useMobile';
import theme from '../../theme';
export const ThanksPage = (props: any) => {
    const { isMobile } = useIsMobile();

    return (
        <AppShell>
            <Layout disableHeaderTransition={true}>
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
        </AppShell>

    );
};

export default ThanksPage;
