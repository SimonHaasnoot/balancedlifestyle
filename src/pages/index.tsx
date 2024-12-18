import { FitnessCenter, MenuBook, SupervisorAccount, ArrowRight } from '@mui/icons-material';
import { Box, Button, Grid, Icon, Typography, useTheme } from '@mui/material';
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
import { Star } from '../components/atoms/Star';

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

                <Box sx={{ backgroundColor: theme.palette.grey[100] }} component="section">
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
                                    title="Persoonlijke trainingen"
                                    body={{ text: 'Personal training in onze moderne studio. Afgestemd op jouw doelen en wensen.' }}
                                    icon={FitnessCenter}
                                />
                            </Grid>
                            <Grid item xs={12} md={4} sx={{ mt: isMobile ? 0 : 10 }}>
                                <Usp
                                    title="Persoonlijk voedingsplan"
                                    body={{ text: 'Persoonlijk voedingsplan in onze eigen app. Afgestemd op jouw doelen en wensen.' }}
                                    icon={MenuBook}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Usp
                                    title="Compleet aanbod"
                                    body={{
                                        text: 'Klik hier voor ons gehele gezondheidsaanbod',
                                        link: getRouteUrl(HeaderRoutesEnum.SPECIALISATIES),
                                    }}
                                    icon={SupervisorAccount}
                                />
                            </Grid>
                        </Grid>
                        <Box sx={{ mt: isMobile ? 5 : 10, display: 'flex', justifyContent: 'center' }}>
                            <Button
                                variant="text"
                                href={getRouteUrl(HeaderRoutesEnum.PERSONAL_TRAINING)}
                                sx={{ color: theme.palette.secondary.main, display: 'flex', alignItems: 'center' }}
                            >
                                <Icon component={ArrowRight} />
                                Lees hier meer over personal training
                            </Button>
                        </Box>
                    </DefaultContainer>
                </Box>
                <Block
                    title="Iets over mij"
                    subtitle="Terug naar het begin"
                    body="Welkom, mijn naam is Sem van de Griendt. Oprichter van Balanced lifestyle.<br /><br /> Balanced lifestyle is ontstaan uit een persoonlijk verhaal. Ik heb jaren met extreme huidklachten rondgelopen. De
                    milde huidklachten ontstonden toen ik 14 was. In het begin maakte ik mij weinig zorgen en was ik ervan overtuigd
                    dat de pubertijd de veroorzaker was van mijn huidproblemen. 3 Jaar later, tientallen doktersbezoeken en
                    antibioticakuren verder werden mijn problemen niet minder, maar juist erger."
                    button={{
                        text: 'Lees hier verder',
                        link: getRouteUrl(HeaderRoutesEnum.ABOUT_ME),
                    }}
                    staticImage={
                        <StaticImage src="../images/workouts/workout5.jpg" alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    }
                />
                <Box sx={{ backgroundColor: theme.palette.grey[100], position: 'relative' }} component="section">
                    <DefaultContainer maxWidth="lg" sx={{ textAlign: 'center' }}>
                        <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                            Onze missie
                        </Typography>
                        <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.white, mb: 2 }}>
                            Jouw gezondheid terug in balans
                        </Typography>
                        <AllInclusiveIcon sx={{ color: theme.palette.common.white, fontSize: 40, mb: 2 }} />

                        <Typography
                            variant="body1"
                            sx={{ color: theme.palette.common.white, lineHeight: 2, maxWidth: isMobile ? '100%' : '60%', margin: 'auto' }}
                        >
                            Onze missie is het coachen in het creëren van een gebalanceerde leefstijl door jou de juiste handvatten te geven in
                            bewegen, voeding en rust.
                        </Typography>
                    </DefaultContainer>

                    {generateFlowBackground()}
                </Box>

                <Box sx={{ backgroundColor: theme.palette.primary.main }} component="section">
                    <DefaultContainer maxWidth="xl" sx={{ textAlign: 'center' }}>
                        <Box>
                            <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main, py: 5, mb: isMobile ? 0 : 10 }}>
                                Waarmee kunnen wij jou van dienst zijn?
                            </Typography>
                        </Box>
                        <Grid container spacing={isMobile ? 2 : 10} justifyContent="center" sx={{ gap: isMobile ? 3 : 0 }}>
                            <Grid
                                item
                                xs={10}
                                sm={3}
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
                                sm={3}
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
                                        src="../images/workouts/workout9.jpg"
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
                                        href={getRouteUrl(HeaderRoutesEnum.GROEPSTRAINING)}
                                        sx={{ background: 'rgba(255, 255, 255, 0.3)', color: theme.palette.common.white, border: 0 }}
                                        style={{
                                            padding: '10px 20px',
                                        }}
                                    >
                                        Groepstraining
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid
                                item
                                xs={10}
                                sm={3}
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
                                        href={getRouteUrl(HeaderRoutesEnum.VOEDING)}
                                        sx={{ background: 'rgba(255, 255, 255, 0.3)', color: theme.palette.common.white, border: 0 }}
                                    >
                                        Voeding
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid
                                item
                                xs={10}
                                sm={3}
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
                                        href={getRouteUrl(HeaderRoutesEnum.SPECIALISATIES)}
                                        sx={{ background: 'rgba(255, 255, 255, 0.3)', color: theme.palette.common.white, border: 0 }}
                                        style={{
                                            padding: '10px 20px',
                                        }}
                                    >
                                        Mentale coaching
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                        <Typography variant="subtitle2" sx={{ color: theme.palette.common.white, my: 10 }}>
                            100% resultaatgarantie!
                        </Typography>
                    </DefaultContainer>
                </Box>
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
                        </Grid>
                    </Box>
                </DefaultContainer>
                <Box sx={{ backgroundColor: theme.palette.secondary.main }} component="section">
                    <DefaultContainer maxWidth="lg" sx={{ textAlign: 'center' }}>
                        <Typography variant="subtitle2" sx={{ color: theme.palette.common.white }}>
                            klanten beoordelen ons gemiddeld met een{' '}
                            <Star
                                style={{
                                    marginRight: '5px',
                                }}
                            />
                            9,4!
                        </Typography>
                    </DefaultContainer>
                </Box>
            </Layout>
        </>
    );
};

export default index;
