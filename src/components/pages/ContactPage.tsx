import { Box, Button, Container, GridLegacy as Grid, Link, Typography } from '@mui/material';
import { AppShell } from '../shell/AppShell';
import { Layout } from '../pagelayout/Layout';
import useIsMobile from '../../hooks/useMobile';
import { DefaultContainer } from '../pagelayout/DefaultContainer';
import { ContactForm } from '../organisms/ContactForm';
import { projectVariables } from '../../project';
import theme from '../../theme';
export const contact = (props: any) => {
    const { isMobile } = useIsMobile();

    return (
        <AppShell>
            <Layout>
            <Container
                maxWidth={false}
                disableGutters
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: '75vh',
                    backgroundColor: theme.palette.grey[100],
                }}
            >
                <Box sx={{ position: 'absolute', inset: '0 0 0 0' }}>
                    <img
                        src="/images/contact.png"
                        alt="Contact Lifestyle Personal Training Zeist"
                        loading="eager"
                        style={{ height: '100%', width: '100%', objectFit: 'cover', filter: 'brightness(0.4)' }}
                    />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: isMobile ? 'center' : 'flex-start',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Container maxWidth="lg" sx={{ position: 'relative' }}>
                        <Box sx={{ color: 'white' }}>
                            <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
                                Contact opnemen
                            </Typography>
                            <Typography variant="subtitle2" sx={{ mb: 3, maxWidth: isMobile ? '100%' : '60%', color: theme.palette.secondary.main }}>
                                Zet de eerste stap naar een gezonder en gelukkiger bestaan!
                            </Typography>
                        </Box>
                    </Container>
                </Box>
            </Container>
            <Box sx={{ background: theme.palette.grey[100], mt: -30 }}>
                <DefaultContainer maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <ContactForm />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                            <Box sx={{ mt: 'auto', p: isMobile ? 0 : 5 }}>
                                <Typography variant="h3" sx={{ color: theme.palette.common.white, mb: 2 }}>
                                    Liever bellen?
                                </Typography>
                                <Button variant="outlined" sx={{ mt: 2, mb: 5 }} href={`tel:${projectVariables.COMPANY_PHONE}`}>
                                    Bel Sem op {projectVariables.COMPANY_PHONE}
                                </Button>{' '}
                                <Typography variant="subtitle2" sx={{ color: theme.palette.common.white }}>
                                    Of stuur ons een e-mail
                                </Typography>
                                <Link sx={{ color: theme.palette.common.white }} href={`mailto:${projectVariables.COMPANY_EMAIL}`}>
                                    {projectVariables.COMPANY_EMAIL}
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: 10, color: theme.palette.common.white }}>
                        <Typography variant="body1">Al onze verdere contactgegevens kun je vinden onderaan de pagina.</Typography>
                    </Box>
                </DefaultContainer>
            </Box>
        </Layout>
    </AppShell>
);
};

export default contact;
