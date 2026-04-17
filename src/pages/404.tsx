import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import React from 'react';
import { Layout } from '../components/pagelayout/Layout';
import { Seo } from '../components/atoms/Seo';

export default function NotFound(props: any) {
    const theme = useTheme();

    return (
        <>
            <Seo title="Pagina niet gevonden" description="Deze pagina bestaat niet." noIndex />
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
