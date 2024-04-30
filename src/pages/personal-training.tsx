import { Box, Button, Icon, Link, List, ListItem, Typography, useTheme } from '@mui/material';
import React from 'react';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';
import { getRouteUrl, HeaderRoutesEnum } from '../types/HeaderRoute';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { SmallHero } from '../components/organisms/SmallHero';
import ptVideo from '../images/pt/C0056-2.mp4';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { StaticImage } from 'gatsby-plugin-image';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { SuccessStories } from '../components/organisms/SuccessStories';

export const PersonalTrainingPage = (props: any) => {
    const theme = useTheme();
    const { isMobile, isTabletOrSmaller } = useIsMobile();

    return (
        <>
            <Layout location={props.location}>
                <SmallHero
                    image={
                        <video autoPlay={true} muted loop style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4)' }}>
                            <source src={ptVideo} type="video/mp4" />
                        </video>
                    }
                    title="Personal training"
                    subtitle="Ben jij iemand die streeft naar meer fysieke en mentale inspanning, een fitter lichaam en een verbeterd zelfbeeld, maar hiervoor een stukje motivatie, kennis en directe feedback mist? Dan is personal training de oplossing voor jou!"
                    linkTo={{
                        link: '#succesverhalen',
                        text: 'Of, ga naar succesverhalen',
                    }}
                />

                <Box sx={{ background: theme.palette.primary.main, position: 'relative' }} component="section">
                    <DefaultContainer maxWidth="lg">
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                                Hoe het werkt
                            </Typography>
                            <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.white, mb: 5 }}>
                                Wat we gaan doen
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ color: theme.palette.common.white, lineHeight: 2, mb: 5, maxWidth: !isMobile ? '70%' : '100%' }}
                            >
                                Samen gaan wij aan de slag om <span>jouw doelen te realiseren</span> en de beste versie van jou naar boven te halen.
                                Wekelijks gaan wij op 1 op 1 sporten op een locatie naar jouw keuze. In een <span>veilige omgeving</span>, waarin jouw
                                <span> prestatieverbetering</span> voorop staat.
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: theme.palette.common.white,
                                    mb: 5,
                                    display: 'flex',
                                    alignItems: isMobile ? 'inherit' : 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <TrendingFlatIcon sx={{ color: theme.palette.secondary.main, mr: 1 }} />
                                Doelgroep: geschikt voor beginners en gevorderden
                            </Typography>
                        </Box>
                    </DefaultContainer>
                </Box>

                <Box sx={{ background: theme.palette.grey[100], position: 'relative' }} component="section">
                    <DefaultContainer maxWidth="lg">
                        <Grid2 container>
                            <Grid2 xs={12} md={6}>
                                <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main, mb: 3 }}>
                                    Wat je kan verwachten
                                </Typography>
                                {isTabletOrSmaller && (
                                    <StaticImage
                                        src="../images/Sem/1nbg.png"
                                        alt="Sem"
                                        style={{ objectFit: 'cover', float: 'right', margin: '10px', width: '165px' }}
                                    />
                                )}

                                <Typography variant="body1" sx={{ color: theme.palette.common.white, lineHeight: 2, wordBreak: 'break-word' }}>
                                    "Trainingen bestaan uit <span>kracht, conditie en mobiliteitsoefeningen</span> in combinatie met <span>kickboksen en technieklessen</span>.
                                    Naast het sporten gaan wij aan de slag met jouw <span>eetgewoontes</span> door het aan te leren om <span>gezondere en bewustere </span>
                                    keuzes te maken. Dit geldt ook voor buitenshuis/sociale gelegenheden, waarin <span>balans</span> voorop staat. Hiernaast gaan
                                    wij ook werken aan jouw <span>slaapritme</span> voor meer ritme en regelmaat. Als laatste gaan wij jouw <span>stressniveau verlagen </span>
                                    en ontspanningsbezigheid verhogen met als uitkomst een <span>positieve verandering in mindset</span>."
                                </Typography>
                            </Grid2>
                        </Grid2>
                        {!isTabletOrSmaller && (
                            <Box sx={{ position: 'absolute', right: '20%', bottom: 0, width: '300px' }}>
                                <StaticImage src="../images/Sem/1nbg.png" alt="Sem" style={{ height: '100%', objectFit: 'cover' }} />
                            </Box>
                        )}
                    </DefaultContainer>
                </Box>
                <Box sx={{ backgroundColor: theme.palette.primary.main, py: isMobile ? 5 : 10 }} component="section">
                    <DefaultContainer maxWidth="lg">
                        <Box sx={{ color: theme.palette.common.white }}>
                            <Grid2 container spacing={isMobile ? 0 : 5} sx={{ textAlign: 'left' }}>
                                <Grid2 xs={12} md={6}>
                                    <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main, mb: 1 }}>
                                        Nog even alles op een rijtje
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 5 }}>
                                        <List sx={{ listStyleType: isMobile ? '' : 'decimal' }}>
                                            <ListItem sx={{ display: 'list-item' }}>
                                                Gevarieerde trainingen; kracht, conditie, mobiliteitsoefeningen en technieklessen
                                            </ListItem>
                                            <ListItem sx={{ display: 'list-item' }}>Kickboksen</ListItem>
                                            <ListItem sx={{ display: 'list-item' }}>Verbeteren van eetgewoontes</ListItem>
                                            <ListItem sx={{ display: 'list-item' }}>Verbeteren van slaapritme</ListItem>
                                            <ListItem sx={{ display: 'list-item' }}>Verlagen van stress en verhogen ontspanning</ListItem>
                                            <ListItem sx={{ display: 'list-item' }}>Aanleren gezonde en bewuste keuzes</ListItem>
                                            <ListItem sx={{ display: 'list-item' }}>Positieve verandering in mindset</ListItem>
                                        </List>
                                    </Typography>
                                </Grid2>
                                <Grid2 xs={12} md={6}>
                                    <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main, mb: 1 }}>
                                        Na inschrijving
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 5 }}>
                                        Op het moment dat je een personal training pakket afneemt zal er telefonisch contact worden opgenomen. Als
                                        beide partijen groen licht geven zal ik er een kennismakingsgesprek plaatsvinden voor de intake en hierop
                                        volgend een 0 meting. De intake bedraagt eenmalig €50. Inschrijfkosten bedraagt €30.
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main, mb: 1 }}>
                                        Extra info
                                    </Typography>
                                    <Link href={getRouteUrl(HeaderRoutesEnum.CONTACT)}>Neem hier contact op.</Link>
                                </Grid2>
                            </Grid2>
                        </Box>
                    </DefaultContainer>
                </Box>

                <SuccessStories />
            </Layout>
        </>
    );
};

export default PersonalTrainingPage;
