import { Box, Grid, useTheme, Typography, Button } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Heading } from '../components/molecules/Heading';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';
import { getRouteUrl, HeaderRoutesEnum } from '../types/HeaderRoute';

export const BalancedLifestylePage = (props: any) => {
    const theme = useTheme();
    const { isMobile, isTabletOrSmaller } = useIsMobile();
    const imageHeight = isMobile ? 200 : 300;

    return (
        <>
            <Layout location={props.location}>
                <Heading title="Challenge" subtitle="De Balanced Lifestyle challenge." />

                <Box>
                    <Grid container>
                        <Grid item xs={4} md={2}>
                            <Box sx={{ background: theme.palette.grey[100] }}>
                                <StaticImage
                                    src="../images/workouts/workout1.jpg"
                                    alt="Workout"
                                    style={{ width: '100%', objectFit: 'cover', height: imageHeight }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={4} md={2}>
                            <Box sx={{ background: theme.palette.grey[100] }}>
                                <StaticImage
                                    src="../images/workouts/workout2.jpg"
                                    alt="Workout"
                                    style={{ width: '100%', objectFit: 'cover', height: imageHeight }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={4} md={2}>
                            <Box sx={{ background: theme.palette.grey[100] }}>
                                <StaticImage
                                    src="../images/workouts/workout3.jpg"
                                    alt="Workout"
                                    style={{ width: '100%', objectFit: 'cover', height: imageHeight }}
                                />
                            </Box>
                        </Grid>
                        {!isMobile && (
                            <>
                                <Grid item xs={4} md={2}>
                                    <Box sx={{ background: theme.palette.grey[100] }}>
                                        <StaticImage
                                            src="../images/workouts/workout1.jpg"
                                            alt="Workout"
                                            style={{ width: '100%', objectFit: 'cover', height: imageHeight }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={4} md={2}>
                                    <Box sx={{ background: theme.palette.grey[100] }}>
                                        <StaticImage
                                            src="../images/workouts/workout2.jpg"
                                            alt="Workout"
                                            style={{ width: '100%', objectFit: 'cover', height: imageHeight }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={4} md={2}>
                                    <Box sx={{ background: theme.palette.grey[100] }}>
                                        <StaticImage
                                            src="../images/workouts/workout3.jpg"
                                            alt="Workout"
                                            style={{ width: '100%', objectFit: 'cover', height: imageHeight }}
                                        />
                                    </Box>
                                </Grid>
                            </>
                        )}
                    </Grid>
                </Box>

                <Box sx={{ background: theme.palette.primary.main }}>
                    <DefaultContainer maxWidth="lg">
                        <Typography variant="subtitle2" sx={{ color: theme.palette.common.white, lineHeight: 2 }}>
                            <b>
                                Ben jij iemand die altijd al het roer heeft willen omgooien? Opzoek is naar een nieuwe, gezondere en leukere
                                leefstijl, maar toch lekker wilt blijven genieten van al hetgeen wat het leven te bieden heef?
                            </b>
                            <br />
                            <br />
                            Dan is dit het perfecte traject voor jou 💪 ! Door een gebalanceerde lifestyle waar een gezonde geest en een fit lichaam
                            centraal komen te staan, want balans is de sleutel tot een succesvol, fit en gelukkig bestaan.
                        </Typography>
                    </DefaultContainer>
                </Box>

                <Box sx={{ background: theme.palette.grey[100] }}>
                    <DefaultContainer maxWidth="lg">
                        <Typography variant="h3" sx={{ color: theme.palette.secondary.main }}>
                            Wat houdt de Balanced Lifestyle challenge in?
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: theme.palette.common.white, lineHeight: 2 }}>
                            The Balanced Lifestyle challenge is een “life changing” programma. Wij gaan samen in 12 weken tijd jouw bestaan een nieuw
                            leven in blazen. Een intensief traject waar wij 1 op 1 jou de basis leren van een gezonder, gelukkiger gebalanceerd
                            bestaan. Met 4 kern elementen een goed en uitdagend beweegpatroon, gezonde en bewuste voedingskeuzes, een goed en stabiel
                            slaapritme en een mix van plantaardige en dierlijke producten van een goede oorsprong.
                        </Typography>
                    </DefaultContainer>
                </Box>

                <Box>
                    <DefaultContainer maxWidth="lg">
                        <Typography variant="h3" sx={{ color: theme.palette.secondary.main }}>
                            Wat kun je verwachten?
                        </Typography>
                        <Typography variant="subtitle2" sx={{ lineHeight: 2 }}>
                            We hebben dagelijks online contact en daarnaast gaan we 2x per week samen sporten. Jijzelf sport hiernaast nog 2x
                            zelfstandig vanuit een schema op maat gemaakt voor jou. Je krijgt een persoonlijk voedingsschema, afgestemd op jouw wensen
                            en voorkeuren. Hier hebben we ook dagelijks contact over indien behoefte aan.
                        </Typography>
                    </DefaultContainer>
                </Box>

                <Box sx={{ background: theme.palette.grey[100] }}>
                    <DefaultContainer maxWidth="lg">
                        <Typography variant="h4" sx={{ color: theme.palette.secondary.main }}>
                            Enthousiast geraakt?
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: theme.palette.common.white }}>
                            Dan is het tijd om in actie te komen!
                        </Typography>
                        <Button
                            variant="contained"
                            href={getRouteUrl(HeaderRoutesEnum.CONTACT)}
                            sx={{ mt: 5, background: theme.palette.secondary.main, color: theme.palette.common.white }}
                        >
                            Neem contact op
                        </Button>
                    </DefaultContainer>
                </Box>
            </Layout>
        </>
    );
};

export default BalancedLifestylePage;
