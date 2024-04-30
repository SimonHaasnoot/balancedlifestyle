import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Divider } from '../components/molecules/Divider';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';
import { getRouteUrl, HeaderRoutesEnum } from '../types/HeaderRoute';

export const AboutTimPage = (props: any) => {
    const theme = useTheme();
    const { isMobile, isTabletOrSmaller } = useIsMobile();
    const [readMore, setReadMore] = useState(false);

    return (
        <>
            <Helmet>
                <title>Over Tim - Balanced Lifestyle</title>
            </Helmet>
            <Layout location={props.location}>
                <Box sx={{ position: 'relative', background: theme.palette.grey[100], pt: isMobile ? 10 : 20, pb: 0 }} component="section">
                    <DefaultContainer maxWidth="lg" sx={{ mb: isTabletOrSmaller ? 0 : 0 }}>
                        <Grid container spacing={5}>
                            <Grid item xs={12} md={8} sx={{ textAlign: isMobile ? 'center' : 'left' }}>
                                <Box sx={{ color: 'white' }}>
                                    <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
                                        Over Tim
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
                                        src="../images/tim/IMG_5633.JPG"
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
                            Mijn naam is Tim Cleuskens, al ruim 20 jaar werkzaam binnen de fitness / gezondheidsbranche en trotse eigenaar van
                            Balanced Lifestyel!
                            <br />
                            <br />
                            Na het volgen van meerdere opleidingen bij o.a. Cios, Alo en Chivo en hier verschillende specialisaties in gevolgd te
                            hebben, ben ik werkzaam geweest in verschillende Personal Training studio’s. Werken met mensen zowel op het fysieke als
                            mentale vlak en hierbij een persoonlijke band opbouwen is hetgeen wat dit werk zo leuk maakt! Wat mij motiveert is samen
                            doelstellingen te bepalen en door een gerichte plan van aanpak deze doelen daadwerkelijke te behalen. Ik geloof in een
                            aanpak waarin alle facetten van training, voeding, mindset en fysiek in balans moeten zijn om langetermijndoelstellingen
                            te behalen. Door mijn expertise in de bewegingswetenschap kan ik mensen naast training en voeding ook begeleiden op het
                            gebied van revalidatie en blessure behandeling, hierdoor is bij Balanced lifestyle het gehele pakket aan kennis aanwezig!
                            <br />
                            <br />
                            Graag tot snel bij Balanced Lifestyle! Met sportieve groet, Tim Cleuskens
                        </Typography>
                    </Box>
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

export default AboutTimPage;
