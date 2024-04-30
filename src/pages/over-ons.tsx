import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Divider } from '../components/molecules/Divider';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';
import { getRouteUrl, HeaderRoutesEnum } from '../types/HeaderRoute';

export const aboutme = (props: any) => {
    const theme = useTheme();
    const { isMobile, isTabletOrSmaller } = useIsMobile();
    const [readMore, setReadMore] = useState(false);

    return (
        <>
            <Helmet>
                <title>Over ons - Balanced Lifestyle</title>
            </Helmet>
            <Layout location={props.location}>
                <Box sx={{ position: 'relative', background: theme.palette.grey[100], pt: isMobile ? 10 : 20, pb: 0 }} component="section">
                    <DefaultContainer maxWidth="lg" sx={{ mb: isTabletOrSmaller ? 0 : 0 }}>
                        <Grid container spacing={5}>
                            <Grid item xs={12} md={8} sx={{ textAlign: isMobile ? 'center' : 'left' }}>
                                <Box sx={{ color: 'white' }}>
                                    <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
                                        Over ons
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4} sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                                <Box
                                    sx={{
                                        borderRadius: '100%',
                                        overflow: 'hidden',
                                        position: isTabletOrSmaller ? 'inherit' : 'absolute',
                                        bottom: isTabletOrSmaller ? '0' : '-200px',
                                        border: isTabletOrSmaller ? 'none' : '5px solid white',
                                        width: '300px',
                                        height: '300px',
                                    }}
                                >
                                    <StaticImage
                                        src="../images/samen/sem_en_tim.webp"
                                        alt="Sem van de Griendt"
                                        placeholder="blurred"
                                        loading="eager"
                                        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </DefaultContainer>
                </Box>

                <DefaultContainer maxWidth="lg" component="section">
                    <Box sx={{ maxWidth: isTabletOrSmaller ? '100%' : '70%' }}>
                        <Typography variant="body1">
                            Sinds september 2023 zijn we aan samenwerking aangegaan op basis van vertrouwen, ambitie en visie. Beide staan wij voor
                            een gezonde uitdagende leefstijl waarin genieten een belangrijk component is. Effort gecombineerd met genieten is in onze
                            optiek de perfecte formule voor een vitaal en duurzaam succes. In balans!
                            <br /> <br />
                            Door onze kwaliteiten te bundelen en elkaars in onze eigen unieke kracht te zetten vormen we een volmaakt team. Wij
                            coachen elkaar, geven elkaar feedback wat gepaard gaat met een goede grap. Een fijne werksfeer op de vloer is leidend en
                            het creëren van een veilige sportomgeving is ons hoofddoel. Met passie, praktijkervaring en vakkennis kunnen wij overweg
                            met elke doelgroep en de context van elk individu. Het stimuleren van mensen om hun grenzen te verleggen en hun doelen te
                            bereiken is onze expertise.
                            <br /> <br />
                            Een gelijkgestemd duo die jouw leefstijl naar een hoger niveau gaat tillen. Ben jij klaar voor jouw next level fysiek?
                        </Typography>
                        <Divider />
                        <Box sx={{
                            display: 'flex',
                            gap: 2
                        }}>
                        <Button
                            variant="contained"
                            sx={{ outline: '2px solid white', background: 'transparent' }}
                            href={getRouteUrl(HeaderRoutesEnum.OVER_TIM)}
                        >
                            Meer over Tim
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ outline: '2px solid white', background: 'transparent' }}
                            href={getRouteUrl(HeaderRoutesEnum.OVER_SEM)}
                        >
                            Meer over Sem
                        </Button>
                        </Box>
                    </Box>
                </DefaultContainer>

                <DefaultContainer maxWidth="lg" component="section">
                    <Box sx={{ maxWidth: isTabletOrSmaller ? '100%' : '70%' }}></Box>
                </DefaultContainer>

                <Box sx={{ backgroundColor: theme.palette.grey[100], padding: '50px 0' }} component="section">
                    <DefaultContainer maxWidth="lg">
                        <Box sx={{ maxWidth: isTabletOrSmaller ? '100%' : '70%', m: 'auto' }}>
                            <Typography variant="body1" sx={{ color: theme.palette.common.white, lineHeight: 2, textAlign: 'center' }}>
                                "onze missie is om mensen fitter, sterker en gelukkiger te maken door hen de handvaten te geven van een gebalanceerde
                                leefstijl. Waarin gezonde voeding centraal staat in combinatie met een vast slaapritme en dagelijkse beweging en
                                ontspanning. onze missie is niet om jou 100% te laten leven zoals wij dat doen. Wij willen graag onze kennis aan jou
                                over dragen en jou bewust te laten worden van hetgeen wat jij in jouw lichaam stopt.
                                <br /> <br />
                                Met als uitkomst dat je jezelf in de toekomst gezond, fit en gelukkig kan houden en positief terug kan kijken op je
                                eigen keuzes en acties, zonder mijn hulp!
                            </Typography>
                            <Divider />
                            <Typography variant="h3" sx={{ color: theme.palette.common.white, textAlign: 'center', mt: 5 }}>
                                Waar wacht je nog op?
                            </Typography>
                            {/* // contact button */}
                            <Box sx={{ textAlign: 'center', mt: 5 }}>
                                <Button
                                    variant="outlined"
                                    href={getRouteUrl(HeaderRoutesEnum.CONTACT)}
                                    sx={{ textTransform: 'none', fontSize: '1.2rem' }}
                                >
                                    Neem contact op
                                </Button>
                            </Box>
                        </Box>
                    </DefaultContainer>
                </Box>
            </Layout>
        </>
    );
};

export default aboutme;
