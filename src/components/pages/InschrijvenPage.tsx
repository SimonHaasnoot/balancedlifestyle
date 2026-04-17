import { Box, GridLegacy as Grid, Typography } from '@mui/material';
import { AppShell } from '../shell/AppShell';
import { Layout } from '../pagelayout/Layout';
import useMobile from '../../hooks/useMobile';
import { DefaultContainer } from '../pagelayout/DefaultContainer';
import { ContactForm } from '../organisms/ContactForm';
import { SmallHero } from '../organisms/SmallHero';
import { Block } from '../molecules/Block';
import { Rating } from '../molecules/Rating';
import { OptimizedImage } from '../atoms/OptimizedImage';

import theme from '../../theme';
export default function InschrijvenPage(props: any) {
    const { isMobile } = useMobile();

    return (
        <AppShell>
            <Layout>
            <SmallHero
                image={
                    <img
                        src="/images/pages/grouptraining.jpg"
                        alt="Inschrijven personal training Zeist"
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
                staticImage={<OptimizedImage src="/images/3photos.png" alt="Resultaten personal training Zeist" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
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
    </AppShell>
);
}
