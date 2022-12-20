import { FitnessCenter, MenuBook, SupervisorAccount } from '@mui/icons-material';
import { Box, Button, Container, Grid, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { Block } from '../components/molecules/Block';
import { Rating } from '../components/molecules/Rating';
import { Usp } from '../components/molecules/Usp';
import { Hero } from '../components/organisms/Hero';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout, headerRoutes } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';
import { HeaderRoutesEnum, getRouteUrl } from '../types/HeaderRoute';

export const index = (props: any) => {
    const theme = useTheme();
    const { isMobile } = useIsMobile();

    return (
        <>
            <Layout location={props.location}>
                <Hero />

                <Box sx={{ backgroundColor: theme.palette.grey[100] }}>
                    <DefaultContainer maxWidth="lg" sx={{ textAlign: 'center' }} doublePadding>
                        <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                            Waarom?
                        </Typography>
                        <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.white, mb: 5 }}>
                            Samen grenzen verleggen
                        </Typography>
                        <Grid container spacing={isMobile ? 5 : 10} justifyContent="center" display="flex">
                            <Grid item xs={12} md={4}>
                                <Usp
                                    title="Professioneel trainingsplan"
                                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet, nisl vitae tincidunt luctus."
                                    icon={FitnessCenter}
                                />
                            </Grid>
                            <Grid item xs={12} md={4} sx={{ mt: isMobile ? 0 : 10 }}>
                                <Usp
                                    title="Voedingsschema's"
                                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet, nisl vitae tincidunt luctus."
                                    icon={MenuBook}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Usp
                                    title="Gepersonaliseerd"
                                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet, nisl vitae tincidunt luctus."
                                    icon={SupervisorAccount}
                                />
                            </Grid>
                        </Grid>
                    </DefaultContainer>
                </Box>

                <Block
                    title="Iets over mij"
                    subtitle="Terug naar het begin"
                    body="Welkom, mijn naam is Sem van de Griendt. Oprichter van Balanced lifestyle.<br /><br /> Balanced lifestyle in ontstaan uit een persoonlijk verhaal. Ik heb jaren met extreme huidklachten rondgelopen. De
                    milde huidklachten ontstonden toen ik 14 was. In het begin maakte ik mij weinig zorgen en was ik ervan overtuigd
                    dat de pubertijd de veroorzaker was van mijn huidproblemen. 3 Jaar later, tientallen doktersbezoeken en
                    antibioticakuren verder werden mijn problemen niet minder, maar juist erger."
                    button={{
                        text: 'Lees hier verder',
                        link: HeaderRoutesEnum.ABOUT_ME,
                    }}
                    staticImage={
                        <StaticImage src="../images/workouts/workout4.jpg" alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    }
                />

                <Box sx={{ backgroundColor: theme.palette.grey[100] }}>
                    <DefaultContainer maxWidth="lg" sx={{ textAlign: 'center' }}>
                        <Typography variant="subtitle2" sx={{ color: theme.palette.common.white }}>
                            Het is mijn missie om mensen te helpen om de balans te vinden in hun leven doormiddel van een goed bewegings- en
                            voedingspatroon, een consistent gezond slaapritme en dagelijkse ontspanning in combinatie met het behalen van jouw
                            persoonlijke/werkleer doelen.
                        </Typography>
                    </DefaultContainer>
                    <DefaultContainer maxWidth="lg" sx={{ textAlign: 'center' }}>
                        <Grid container spacing={isMobile ? 1 : 10}>
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                position="relative"
                                sx={{
                                    ':hover': {
                                        a: {
                                            transition: 'all 0.3s ease-in-out',
                                            transform: 'scale(1.1)',
                                        },
                                    },
                                }}
                            >
                                <StaticImage
                                    src="../images/workouts/workout1.jpg"
                                    alt="Hero"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        inset: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: 'inherit',
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        href={getRouteUrl(HeaderRoutesEnum.BALANCED_LIFESTYLE)}
                                        sx={{ background: 'rgba(255, 255, 255, 0.3)', color: theme.palette.common.white }}
                                    >
                                        Balanced Lifestyle
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                position="relative"
                                sx={{
                                    ':hover': {
                                        a: {
                                            transition: 'all 0.3s ease-in-out',
                                            transform: 'scale(1.1)',
                                        },
                                    },
                                }}
                            >
                                <StaticImage
                                    src="../images/workouts/workout2.jpg"
                                    alt="Hero"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        inset: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: 'inherit',
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        href={getRouteUrl(HeaderRoutesEnum.PERSONAL_TRAINING)}
                                        sx={{ background: 'rgba(255, 255, 255, 0.3)', color: theme.palette.common.white }}
                                    >
                                        Personal training
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </DefaultContainer>
                </Box>

                <DefaultContainer sx={{ textAlign: 'center' }}>
                    <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                        Reviews
                    </Typography>
                    <Typography variant="h2" component="h2" sx={{ mb: 5, textAlign: 'center' }}>
                        Ervaring van de klant
                    </Typography>
                    <Box>
                        <Grid container spacing={isMobile ? 1 : 3} justifyContent="center" display="flex">
                            <Grid item xs={12} md={4} display="flex">
                                <Rating
                                    rating={4}
                                    reviewerText="Heel erg fijne begeleiding en meedenkend. Ik heb veel geleerd en ben nu veel sterker geworden. Ik ben blij dat ik de stap heb genomen."
                                    reviewerName="Sem van de Gevel"
                                />
                            </Grid>
                            <Grid item xs={12} md={4} display="flex">
                                <Rating
                                    rating={5}
                                    reviewerText="Ik heb genoten en veel geleerd. Ik ben blij dat ik de stap heb genomen."
                                    reviewerName="Avec Izjen"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </DefaultContainer>
            </Layout>
        </>
    );
};

export default index;
