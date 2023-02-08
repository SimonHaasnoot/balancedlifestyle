import { Box, useTheme, Typography, Button, Link, List, ListItem } from '@mui/material';
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
                                        src="../images/workouts/workout4.jpg"
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
                                Ben jij iemand die altijd al het roer heeft willen omgooien? Op zoek is naar een{' '}
                                <span>nieuwe, gezondere en leukere leefstijl</span>, maar toch lekker wil blijven genieten van al hetgeen wat het
                                leven te bieden heeft?
                                <br />
                                <br />
                                <span>Dan is dit het perfecte traject voor jou!</span>
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
                                            The balanced lifestyle challenge is een "life changing" programma. Een intensief traject waarin wij 1 op 1
                                            aan de slag gaan en in 12 weken tijd het roer in jouw lifestyle met 360 graden gaan omgooien. Een
                                            uitdagend bewegingspatroon, bewuste voedingskeuzes, een stabiel slaapritme en stress management door middel
                                            van ontspanning zijn de kern elementen van een gebalanceerd bestaan. Kracht en conditie training in
                                            combinatie met plantaardige en dierlijke producten van goede afkomst staan centraal in het "life changing"
                                            traject.
                                        </Typography>
                                    </Box>
                                </Grid2>
                                <Grid2 xs={12} md={6} color={theme.palette.common.white}>
                                    <Typography variant="subtitle1" component="h3" sx={{ color: theme.palette.secondary.main, mb: 2 }}>
                                        Wat kun je verwachten?
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 5 }}>
                                        <List sx={{ listStyleType: isMobile ? '' : 'decimal' }}>
                                            <ListItem sx={{ display: 'list-item' }}>Vet verlies en spieropbouw</ListItem>
                                            <ListItem sx={{ display: 'list-item' }}>
                                                Dagelijks online contact
                                            </ListItem>
                                            <ListItem sx={{ display: 'list-item' }}>3x een fysieke check-up</ListItem>
                                            <ListItem sx={{ display: 'list-item' }}>Trainingsschema op maat</ListItem>
                                            <ListItem sx={{ display: 'list-item' }}>Voedingsschema op maat</ListItem>
                                            <ListItem sx={{ display: 'list-item' }}>Minimaal 1x per week samen sporten</ListItem>
                                            <ListItem sx={{ display: 'list-item' }}>Progressie foto van het begin en einde traject</ListItem>
                                            <ListItem sx={{ display: 'list-item' }}>De handvaten voor een gebalanceerde leefstijl</ListItem>
                                            <ListItem sx={{ display: 'list-item' }}>Positieve verandering in mindset</ListItem>
                                        </List>
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main, mb: 2, mt: 5 }}>
                                        Extra info
                                    </Typography>
                                    Bekijk <Link href={getRouteUrl(HeaderRoutesEnum.PACKAGES)}>hier</Link> de prijzen of{' '}
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
