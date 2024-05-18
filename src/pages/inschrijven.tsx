import { Box, Chip, Container, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Countdown } from '../components/organisms/Countdown';
import { Layout } from '../components/pagelayout/Layout';
import useMobile from '../hooks/useMobile';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { ContactForm } from '../components/organisms/ContactForm';

export default function InschrijvenPage(props: any) {
    const { isMobile } = useMobile();
    const theme = useTheme();

    return (
        <Layout location={props.location}>
            <Helmet>
                <title>Inschrijven - Balanced Lifestyle</title>
            </Helmet>
            <Container
                maxWidth={false}
                disableGutters
                component={'section'}
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: isMobile ? '100%' : '100vh',
                    pt: '40px',
                    pb: '40px',
                    backgroundColor: '#1C1D1F',
                }}
            >
                <Box sx={{ position: 'absolute', inset: '0 0 0 0' }}>
                    <StaticImage
                        src="../images/studio/studio-buiten.webp"
                        alt="Random image"
                        placeholder="blurred"
                        loading="eager"
                        layout="fixed"
                        style={{ height: '100%', width: '100%', objectFit: 'cover', filter: isMobile ? 'brightness(0.2)' : 'brightness(0.2)' }}
                        transformOptions={{
                            cropFocus: 'entropy',
                        }}
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
                        <Box>
                            <Typography variant="h1" component="h1" sx={{ mb: 10, pt: 10 }}>
                                Schrijf je nu in!
                            </Typography>
                            {/* <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                                <Chip label="Nieuw" color="primary" sx={{ ['> *']: { color: 'white' } }} />
                                <Chip label="Inschrijf actie" color="primary" sx={{ ['> *']: { color: 'white' } }} />
                            </Box> */}
                            <Typography variant="body2" component="p" sx={{ mb: 3, maxWidth: 800, lineHeight: 2, color: 'white' }}>
                                <span>Balanced Lifestyle. </span>
                                De prive studio van Zeist! Wij zijn gespecialiseerd in Personal Training, Voeding, Dietiek en Gezondheid! Wij
                                begeleiden jou naar een gezonde levensstijl en garanderen jou 100% resultaat! Meld je voor 1 juni aan en ontvang een
                                <span> gratis proefles!</span>
                                <br />
                                <br />
                                De actie loopt nog voor:
                            </Typography>
                            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                                <Countdown date="2024-06-01T00:00:00" />
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Container>
            <Box
                sx={{
                    backgroundColor: theme.palette.secondary.main,
                }}
            >
                <DefaultContainer
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h3" component="h2" sx={{ mb: 5 }}>
                        Neem contact op
                    </Typography>
                    <ContactForm description='Inschrijfactie 2024' />
                </DefaultContainer>
            </Box>
        </Layout>
    );
}
