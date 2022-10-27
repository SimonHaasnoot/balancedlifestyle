import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Layout } from '../components/pagelayout/Layout';

export default function NotFound() {
    return (
        <>
            <Layout>
                <Container maxWidth="lg" sx={{ minHeight: '95vh', display: 'flex', alignItems: 'center' }}>
                    <Box py={5}>
                        <Typography component="h1" variant="h1">
                            Pagina niet gevonden.
                        </Typography>
                    </Box>
                </Container>
            </Layout>
        </>
    );
}
