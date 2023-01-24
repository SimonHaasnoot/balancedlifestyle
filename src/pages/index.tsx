import { FitnessCenter, MenuBook, SupervisorAccount } from '@mui/icons-material';
import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { Block } from '../components/molecules/Block';
import { Rating } from '../components/molecules/Rating';
import { Usp } from '../components/molecules/Usp';
import { Hero } from '../components/organisms/Hero';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';
import { HeaderRoutesEnum, getRouteUrl } from '../types/HeaderRoute';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

export const index = (props: any) => {
    const theme = useTheme();
    const { isMobile } = useIsMobile();

    const generateFlowBackground = () => {
        const colors = [theme.palette.secondary.main];
        const color = colors[Math.floor(Math.random() * colors.length)];
        return (
            <div>
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1440 320"
                    fill="none"
                    opacity={0.2}
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    style={{ position: 'absolute', top: 0, left: 0 }}
                >
                    <path
                        fill={color}
                        fillOpacity="0.2"
                        d="M0,128L48,133.3C96,139,192,149,288,154.7C384,160,480,160,576,154.7C672,149,768,139,864,138.7C960,139,1056,149,1152,149.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                    <path
                        fill={color}
                        fillOpacity="0.4"
                        d="M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,170.7C672,149,768,139,864,138.7C960,139,1056,149,1152,160C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320"
                    ></path>
                </svg>
            </div>
        );
    };

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
                            Jouw gezondheid staat centraal
                        </Typography>
                        <Grid container spacing={isMobile ? 5 : 10} justifyContent="center" display="flex">
                            <Grid item xs={12} md={4}>
                                <Usp
                                    title="Professioneel trainingsplan"
                                    body="Persoonlijk trainingsschema op basis van een vragenlijst afgestemd op jouw doelen en wensen."
                                    icon={FitnessCenter}
                                />
                            </Grid>
                            <Grid item xs={12} md={4} sx={{ mt: isMobile ? 0 : 10 }}>
                                <Usp
                                    title="Professioneel voedingsplan"
                                    body="Persoonlijk voedingsschema op basis van een vragenlijst afgestemd op jouw doelen en wensen."
                                    icon={MenuBook}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Usp
                                    title="Gepersonaliseerd"
                                    body="Na het afnemen word je niet aan jouw lot overgelaten. Een maand later is er een check up, waarin je positieve en negatieve ervaringen worden doorgenomen en vanuit daar eventuele veranderingen zullen plaatsvinden in jouw plan van aanpak."
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
                        <StaticImage src="../images/workouts/workout5.jpg" alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    }
                />
                <Box sx={{ backgroundColor: theme.palette.grey[100], position: 'relative' }}>
                    <DefaultContainer maxWidth="lg" sx={{ textAlign: 'center' }}>
                        <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                            Mijn missie
                        </Typography>
                        <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.white, mb: 2 }}>
                            Helpen in het vinden van balans
                        </Typography>
                        <AllInclusiveIcon sx={{ color: theme.palette.common.white, fontSize: 40, mb: 2 }} />

                        <Typography
                            variant="body1"
                            sx={{ color: theme.palette.common.white, lineHeight: 2, maxWidth: isMobile ? '100%' : '60%', margin: 'auto' }}
                        >
                            Het is mijn missie om mensen te helpen om de balans te vinden in hun leven doormiddel van een goed bewegings- en
                            voedingspatroon, een consistent gezond slaapritme en dagelijkse ontspanning in combinatie met het behalen van jouw
                            persoonlijke/werk-leer doelen.
                        </Typography>
                    </DefaultContainer>

                    {generateFlowBackground()}
                </Box>

                <Box sx={{ backgroundColor: theme.palette.primary.main }}>
                    <DefaultContainer maxWidth="lg" sx={{ textAlign: 'center' }}>
                        <Box>
                            <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main, py: 5, mb: isMobile ? 0 : 10 }}>
                                Wat kan ik voor jou betekenen?
                            </Typography>
                        </Box>
                        <Grid container spacing={isMobile ? 2 : 10} justifyContent="center" sx={{ gap: isMobile ? 3 : 0 }}>
                            <Grid
                                item
                                xs={10}
                                sm={4}
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
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        position: 'relative',
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
                                            background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(255,255,255,0) 50%)',
                                        }}
                                    />
                                </Box>

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
                                        sx={{ background: 'rgba(255, 255, 255, 0.3)', color: theme.palette.common.white, border: 0 }}
                                    >
                                        Balanced Lifestyle
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid
                                item
                                xs={10}
                                sm={4}
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
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        position: 'relative',
                                    }}
                                >
                                    <StaticImage
                                        src="../images/workouts/workout8.jpg"
                                        alt="Hero"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(255,255,255,0) 50%)',
                                        }}
                                    />
                                </Box>

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
                                        sx={{ background: 'rgba(255, 255, 255, 0.3)', color: theme.palette.common.white, border: 0 }}
                                    >
                                        Personal training
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid
                                item
                                xs={10}
                                sm={4}
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
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        position: 'relative',
                                    }}
                                >
                                    <StaticImage
                                        src="../images/workouts/workout1.jpg"
                                        alt="Hero"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(255,255,255,0) 50%)',
                                        }}
                                    />
                                </Box>

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
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'rgba(0, 0, 0, 0.3)',
                                            width: '100%',
                                            height: '100%',
                                        }}
                                    />
                                    <Button
                                        variant="contained"
                                        href={getRouteUrl(HeaderRoutesEnum.ONLINE_COACHING)}
                                        sx={{ background: 'rgba(255, 255, 255, 0.3)', color: theme.palette.common.white, border: 0 }}
                                    >
                                        Online Coaching
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
                                    reviewerName="Wiebe"
                                    isMale={true}
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
