import { Box, useTheme, Typography, Button, Link } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { SmallHero } from '../components/organisms/SmallHero';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';
import { getRouteUrl, HeaderRoutesEnum } from '../types/HeaderRoute';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Divider } from '../components/molecules/Divider';
import { Banner } from '../components/molecules/Banner';

export const BalancedLifestylePage = (props: any) => {
    const theme = useTheme();
    const { isMobile, isTabletOrSmaller } = useIsMobile();
    const imageHeight = isMobile ? 200 : 300;

    return (
        <>
            <Layout location={props.location}>
                {/* replace heading with SmallHero */}
                <SmallHero
                    title="Balanced Lifestyle"
                    subtitle="De Balanced Lifestyle challenge."
                    image={
                        <StaticImage
                            src="../images/pages/gym.jpg"
                            alt="Random image"
                            placeholder="blurred"
                            style={{ height: '100%', objectFit: 'cover' }}
                        />
                    }
                />

                <Box sx={{ background: theme.palette.grey[100] }}>
                    <DefaultContainer maxWidth="lg">
                        <Grid2
                            container
                            sx={{
                                boxShadow: '0 4px 8px 0 rgba(255, 255, 255, 0.3)',
                                mt: isMobile ? -10 : -20,
                            }}
                        >
                            <Grid2 xs={6} md={3}>
                                <Box sx={{ background: theme.palette.grey[100] }}>
                                    <StaticImage
                                        src="../images/workouts/workout6.jpg"
                                        alt="Workout"
                                        style={{ width: '100%', objectFit: 'cover', height: imageHeight }}
                                    />
                                </Box>
                            </Grid2>
                            <Grid2 xs={6} md={3}>
                                <Box sx={{ background: theme.palette.grey[100] }}>
                                    <StaticImage
                                        src="../images/workouts/workout2.jpg"
                                        alt="Workout"
                                        style={{ width: '100%', objectFit: 'cover', height: imageHeight }}
                                    />
                                </Box>
                            </Grid2>
                            <Grid2 xs={6} md={3}>
                                <Box sx={{ background: theme.palette.grey[100] }}>
                                    <StaticImage
                                        src="../images/workouts/workout3.jpg"
                                        alt="Workout"
                                        style={{ width: '100%', objectFit: 'cover', height: imageHeight }}
                                    />
                                </Box>
                            </Grid2>
                            <Grid2 xs={6} md={3}>
                                <Box sx={{ background: theme.palette.grey[100] }}>
                                    <StaticImage
                                        src="../images/workouts/workout8.jpg"
                                        alt="Workout"
                                        style={{ width: '100%', objectFit: 'cover', height: imageHeight }}
                                    />
                                </Box>
                            </Grid2>
                        </Grid2>

                        <Box py={isMobile ? 5 : 10} textAlign="center">
                            <Typography variant="h2" sx={{ color: theme.palette.secondary.main, mb: 5 }}>
                                Ga de uitdaging aan!
                            </Typography>
                            <Typography variant="body1" sx={{ color: theme.palette.common.white, mb: 5 }}>
                                Ben jij iemand die altijd al het roer heeft willen omgooien? Opzoek is naar een{' '}
                                <span>nieuwe, gezondere en leukere leefstijl</span>, maar toch lekker wilt blijven genieten van al hetgeen wat het
                                leven te bieden heeft?
                                <br />
                                <br />
                                Dan is dit het perfecte traject voor jou! Door een <span>gebalanceerde lifestyle</span> waar een{' '}
                                <span>gezonde geest en een fit lichaam</span> centraal komen te staan, want balans is de sleutel tot een succesvol,
                                fit en gelukkig bestaan.
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: theme.palette.common.white,
                                    display: 'flex',
                                    alignItems: isMobile ? 'inherit' : 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <TrendingFlatIcon sx={{ color: theme.palette.secondary.main, mr: 1 }} />
                                Doelgroep: geschikt voor beginners en gevorderden
                            </Typography>
                        </Box>

                        <Divider />
                        <Box py={5}>
                            <Grid2 container spacing={5}>
                                <Grid2 xs={12} md={6}>
                                    <Box sx={{}}>
                                        <Typography variant="subtitle1" component="h3" sx={{ color: theme.palette.secondary.main, mb: 2 }}>
                                            Wat houdt de Balanced Lifestyle challenge in?
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: theme.palette.common.white }}>
                                            The Balanced Lifestyle challenge is een “life changing” programma. Wij gaan samen in 12 weken tijd jouw
                                            bestaan een nieuw leven in blazen. Een intensief traject waar wij 1 op 1 jou de basis leren van een
                                            gezonder, gelukkiger gebalanceerd bestaan. Met 4 kern elementen een goed en uitdagend beweegpatroon,
                                            gezonde en bewuste voedingskeuzes, een goed en stabiel slaapritme en een mix van plantaardige en dierlijke
                                            producten van een goede oorsprong.
                                        </Typography>
                                    </Box>
                                </Grid2>
                                <Grid2 xs={12} md={6} color={theme.palette.common.white}>
                                    <Typography variant="subtitle1" component="h3" sx={{ color: theme.palette.secondary.main, mb: 2 }}>
                                        Wat kun je verwachten?
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: theme.palette.common.white }}>
                                        We hebben dagelijks online contact en daarnaast gaan we 2x per week samen sporten. Jijzelf sport hiernaast nog
                                        2x zelfstandig vanuit een schema op maat gemaakt voor jou. Je krijgt een persoonlijk voedingsschema, afgestemd
                                        op jouw wensen en voorkeuren. Hier hebben we ook dagelijks contact over indien behoefte aan.
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main, mb: 2, mt: 5 }}>
                                        Extra info
                                    </Typography>
                                    Bekijk <Link href={getRouteUrl(HeaderRoutesEnum.PACKAGES)}>hier</Link> de prijzen of
                                    <Link href={getRouteUrl(HeaderRoutesEnum.CONTACT)}>neem contact op.</Link>
                                </Grid2>
                            </Grid2>
                        </Box>
                    </DefaultContainer>
                </Box>

                <Banner />

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
