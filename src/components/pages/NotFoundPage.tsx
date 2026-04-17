import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { AppShell } from '../shell/AppShell';
import { Layout } from '../pagelayout/Layout';
import theme from '../../theme';
export default function NotFound(props: any) {

    return (
        <AppShell>
            <Layout disableHeaderTransition={true}>
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
        </AppShell>

    );
}
