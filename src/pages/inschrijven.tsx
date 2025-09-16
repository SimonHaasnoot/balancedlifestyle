import { Box, Grid, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from '../components/pagelayout/Layout';
import useMobile from '../hooks/useMobile';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { ContactForm } from '../components/organisms/ContactForm';
import { SmallHero } from '../components/organisms/SmallHero';
import { Block } from '../components/molecules/Block';
import { HeaderRoutesEnum, getRouteUrl } from '../types/HeaderRoute';
import { Rating } from '../components/molecules/Rating';
import { projectVariables } from '../project';

export default function InschrijvenPage(props: any) {
    const { isMobile } = useMobile();
    const theme = useTheme();

    return (
        <Layout location={props.location}>
            <Helmet>
                <title>Inschrijven - {projectVariables.COMPANY_NAME}</title>
            </Helmet>
            <SmallHero
                image={
                    <StaticImage
                        src="../images/pages/grouptraining.jpg"
                        alt="Hero"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2)' }}
                    />
                }
                countdownDate="2024-06-30T00:00:00+02:00"
                title="Geef je gezondheid een boost!"
                subtitle="Neem contact op voor een gratis healthcheck en proefles! Geheel vrijblijvend."
                customHeight="85vh"
            />
            <Box sx={{ backgroundColor: theme.palette.secondary.main, mb: 10 }} component="section">
                <DefaultContainer maxWidth="xl" sx={{ textAlign: 'center' }}>
                    <Typography variant="subtitle2" sx={{ color: theme.palette.common.white }}>
                        🏆 100% resultaatgarantie! 🏆
                    </Typography>
                </DefaultContainer>
            </Box>
            <Block
                subtitle="Inhoud"
                body="In het kort; wij zijn gespecialiseerd in Personal Training, Voeding, Dietiek en Gezondheid!
                Wij begeleiden jou naar een gezonde levensstijl en garanderen jou 100% resultaat!
                Meld je voor eind juni aan en ontvang een gratis proefweek en healthcheck!
                <br /><br />
                <b>Geheel vrijblijvend en zonder verplichtingen.</b>
                <br /><br />
                ✅ Altijd Persoonlijke begeleiding<br />
                ✅ Personal Training<br />
                ✅ Small Group Training<br />
                ✅ Persoonlijk voedingsplan<br />
                ✅ Trainen op afspraak<br /><br />
                Schrijf je hieronder in en wij nemen zo snel mogelijk contact met je op!
                <br /><br />
                🌟 Wij worden beoordeeld met een 9.4! 🌟
                "
                button={{
                    link: '#contact',
                    text: 'Neem contact op',
                }}
                staticImage={<StaticImage src="../images/3photos.png" alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
            />
            <DefaultContainer sx={{ textAlign: 'center' }} component="section">
                <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                    Reviews
                </Typography>
                <Typography variant="h4" component="h3" sx={{ mb: 5, textAlign: 'center' }}>
                    Ervaring van de klant
                </Typography>
                <Box>
                    <Grid container spacing={isMobile ? 1 : 3} justifyContent="center" display="flex">
                        <Grid item xs={12} md={4} display="flex">
                            <Rating
                                rating={5}
                                reviewerText="Door Sem heb ik de juiste motivatie gekregen en hij heeft een gepersonaliseerd schema opgesteld met de juiste voeding. Heel tevreden dus!"
                                reviewerName="Miron Jansen"
                                isMale={true}
                            />
                        </Grid>
                        <Grid item xs={12} md={4} display="flex">
                            <Rating
                                rating={4}
                                reviewerText="Ik heb genoten en veel geleerd. Ik ben blij dat ik de stap heb genomen."
                                reviewerName="Wiebe Palstra"
                                isMale={true}
                            />
                        </Grid>
                        <Grid item xs={12} md={4} display="flex">
                            <Rating
                                rating={5}
                                reviewerText=" Ik voel me fitter, sterker en klaar voor de zomer! Dankzij het voedingsplan heb ik ook mijn eetgewoonten verbeterd."
                                reviewerName="Nathan"
                                isMale={true}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </DefaultContainer>
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
                    id="contact"
                >
                    <Typography variant="h3" component="h2" sx={{ mb: 5 }}>
                        Neem hier contact op
                    </Typography>
                    <ContactForm description="Inschrijfactie 2024" />
                </DefaultContainer>
            </Box>
        </Layout>
    );
}
