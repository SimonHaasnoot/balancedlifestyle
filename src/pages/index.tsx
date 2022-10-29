import { FitnessCenter, MenuBook, SupervisorAccount } from '@mui/icons-material';
import { Box, Button, Container, Grid, Icon, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { Usp } from '../components/molecules/Usp';
import { Hero } from '../components/organisms/Hero';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout, headerRoutes } from '../components/pagelayout/Layout';
import '../css/app.css';
import useIsMobile from '../hooks/useMobile';
import { HeaderRoutesEnum } from '../types/HeaderRoute';

export const index = (props: any) => {
    const theme = useTheme();
    const { isMobile } = useIsMobile();

    return (
        <>
            <Layout location={props.location}>
                <Hero />

                <Box sx={{ backgroundColor: theme.palette.grey[100] }}>
                    <DefaultContainer maxWidth="lg" sx={{ textAlign: 'center' }}>
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
                            <Grid item xs={12} md={4}>
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

                <Container maxWidth={false} disableGutters>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={6}>
                            <StaticImage src="../images/aboutme.jpg" alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                p={10}
                                sx={{
                                    [theme.breakpoints.down('md')]: {
                                        p: 5,
                                    },
                                    [theme.breakpoints.up('xl')]: {
                                        p: 20,
                                    },
                                }}
                            >
                                <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                                    Iets over mij
                                </Typography>
                                <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.black, mb: 5 }}>
                                    Terug naar het begin
                                </Typography>
                                <Typography variant="body1" sx={{ color: theme.palette.common.black }}>
                                    Welkom, mijn naam is Sem van de Griendt. Oprichter van Balanced lifestyle.
                                    <br />
                                    <br />
                                    Balanced lifestyle in ontstaan uit een persoonlijk verhaal. Ik heb jaren met extreme huidklachten rondgelopen. De
                                    milde huidklachten ontstonden toen ik 14 was. In het begin maakte ik mij weinig zorgen en was ik ervan overtuigd
                                    dat de pubertijd de veroorzaker was van mijn huidproblemen. 3 Jaar later, tientallen doktersbezoeken en
                                    antibioticakuren verder werden mijn problemen niet minder, maar juist erger.
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{ mt: 5 }}
                                    href={headerRoutes.find((x) => x.name === HeaderRoutesEnum.ABOUT_ME)?.path}
                                >
                                    Lees hier verder
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                <Box sx={{ backgroundColor: theme.palette.grey[100] }}>
                    <DefaultContainer maxWidth="lg" sx={{ textAlign: 'center' }}>
                        <Grid container spacing={isMobile ? 1 : 10}>
                            <Grid item xs={6} md={6}>
                                <StaticImage
                                    src="../images/workouts/workout1.jpg"
                                    alt="Hero"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <StaticImage
                                    src="../images/workouts/workout2.jpg"
                                    alt="Hero"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Grid>
                        </Grid>
                    </DefaultContainer>
                </Box>

                <DefaultContainer sx={{ textAlign: 'center' }}>
                    <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                        Reviews
                    </Typography>
                    <Typography variant="h2" component="h2" sx={{ mb: 3, textAlign: 'center' }}>
                        Ervaring van de klant
                    </Typography>
                </DefaultContainer>
            </Layout>
        </>
    );
};

export default index;
