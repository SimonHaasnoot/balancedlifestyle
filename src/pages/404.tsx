import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from '../components/pagelayout/Layout';
import { projectVariables } from '../project';

export default function NotFound(props: any) {
    const theme = useTheme();

    return (
        <>
            <Helmet>
                <title>Pagina niet gevonden - {projectVariables.COMPANY_NAME}</title>
            </Helmet>
            <Layout location={props.location} disableHeaderTransition={true}>
                <Container maxWidth="lg" sx={{ minHeight: '95vh', display: 'flex', alignItems: 'center' }}>
                    <Box py={5}>
                        <Typography component="h1" variant="h1" sx={{ color: theme.palette.common.black }}>
                            Pagina niet gevonden
                        </Typography>
                        <Button href="/" variant={'contained'} sx={{ my: 5 }}>
                            Ga terug naar de homepage
                        </Button>
                    </Box>
                </Container>
            </Layout>
        </>
    );
}
