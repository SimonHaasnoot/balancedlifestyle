import { Box, Chip, Container, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Countdown } from '../components/organisms/Countdown';
import { Layout } from '../components/pagelayout/Layout';
import useMobile from '../hooks/useMobile';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { ContactForm } from '../components/organisms/ContactForm';
import { SmallHero } from '../components/organisms/SmallHero';
import { Block } from '../components/molecules/Block';

export default function InschrijvenPage(props: any) {
    const { isMobile } = useMobile();
    const theme = useTheme();

    return (
        <Layout location={props.location}>
            <Helmet>
                <title>Inschrijven - Balanced Lifestyle</title>
            </Helmet>
            <SmallHero
                image={
                    <StaticImage
                        src="../images/studio/studio-buiten.webp"
                        alt="Hero"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2)' }}
                    />
                }
                countdownDate='2024-06-01T00:00:00+02:00'
                title="Nieuwe studio!"
                subtitle="Wij zijn zojuist geopend en hebben een speciale inschrijfactie voor jou!"
            />
            <Block
                title="Personal Training inschrijfactie 2024"
                subtitle="Inhoud"
                body="In het kort; wij zijn gespecialiseerd in Personal Training, Voeding, Dietiek en Gezondheid!
                Wij begeleiden jou naar een gezonde levensstijl en garanderen jou 100% resultaat!
                Meld je voor 1 juni aan en ontvang een gratis proefles!
                <br /><br />
                <b>Geheel vrijblijvend en zonder verplichtingen.</b>
                <br /><br />
                Schrijf je hieronder in en wij nemen zo snel mogelijk contact met je op!
                "

                staticImage={
                    <StaticImage src="../images/workouts/tim_bokzak3.jpg" alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                }
            />
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
                        Neem hier contact op
                    </Typography>
                    <ContactForm description="Inschrijfactie 2024"  />
                </DefaultContainer>
            </Box>
        </Layout>
    );
}
