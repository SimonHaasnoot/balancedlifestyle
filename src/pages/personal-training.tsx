import { Box, Button, Icon, List, ListItem, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Heading } from '../components/molecules/Heading';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';
import Carousel from 'react-material-ui-carousel';
import { getRouteUrl, HeaderRoutesEnum } from '../types/HeaderRoute';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const PersonalTrainingPage = (props: any) => {
    const theme = useTheme();
    const { isMobile, isTabletOrSmaller } = useIsMobile();

    return (
        <>
            <Layout location={props.location}>
                <Heading
                    title="Personal training"
                    subtitle="Ben jij iemand die streeft naar meer fysieke en mentale inspanning, een fitter lichaam en een verbeterd zelfbeeld, maar hiervoor een stukje motivatie, kennis en directe feedback mist? Dan is personal training de oplossing voor jou!"
                />

                <Box sx={{ background: theme.palette.common.white, position: 'relative' }}>
                    <Box sx={{ inset: 0, position: 'absolute' }}>
                        <StaticImage src="../images/hero.jpg" alt="Personal training" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>

                    <DefaultContainer maxWidth="lg">
                        <Box sx={{ maxWidth: isMobile ? '100%' : '70%', background: '#ffffffd1', padding: isMobile ? 3 : 5 }}>
                            <Typography
                                variant="h3"
                                sx={{ color: theme.palette.secondary.main, marginTop: '-70px', background: theme.palette.common.white, padding: 3 }}
                            >
                                Hoe werkt het?
                            </Typography>
                            <Typography variant="body1" sx={{ color: theme.palette.common.black, lineHeight: 2, mb: 5 }}>
                                <b>Samen gaan wij aan de slag om jouw doelen te realiseren en de beste versie van jou naar boven te halen.</b>{' '}
                                Wekelijks gaan wij op 1 op 1 sporten op een locatie naar jouw keuze. In een veilige omgeving, waarin jouw
                                prestatieverbetering voorop staat.
                            </Typography>
                        </Box>
                    </DefaultContainer>
                </Box>

                <Box sx={{ background: theme.palette.grey[100] }}>
                    <DefaultContainer maxWidth="lg">
                        <Box sx={{ display: 'flex', gap: 5, mb: isMobile ? 2 : 5 }}>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h3" sx={{ color: theme.palette.secondary.main }}>
                                    Wat gaan we doen?
                                </Typography>
                                <Typography variant="body1" sx={{ color: theme.palette.common.white, lineHeight: 2 }}>
                                    Trainingen zullen bestaan uit kracht en conditie oefeningen, mobiliteitsoefeningen en technieklessen. Daarnaast
                                    gaan wij ook samen aan de slag met jouw eetgewoontes. Wij gaan jou aanleren om gezondere en bewustere keuzes te
                                    maken thuis en buitenshuis, waarin balans voorop staat. Daarnaast gaan we werken aan een vast slaapritme, waarin
                                    naar een dagelijkse ontspanning centraal staat.
                                    <br />
                                    <br />
                                    Dus, even in het kort:
                                </Typography>
                                <List>
                                    <ListItem sx={{ color: theme.palette.common.white }}><Icon component={ChevronRightIcon} sx={{color: theme.palette.secondary.main}} /> Gevarieerde trainingen; kracht en conditie oefeningen, mobiliteitsoefeningen en technieklessen</ListItem>
                                    <ListItem sx={{ color: theme.palette.common.white }}><Icon component={ChevronRightIcon} sx={{color: theme.palette.secondary.main}} /> Aanpakken van eetgewoontes</ListItem>
                                    <ListItem sx={{ color: theme.palette.common.white }}><Icon component={ChevronRightIcon} sx={{color: theme.palette.secondary.main}} /> Aanleren van gezonde en bewuste keuzes</ListItem>
                                    <ListItem sx={{ color: theme.palette.common.white }}><Icon component={ChevronRightIcon} sx={{color: theme.palette.secondary.main}} /> Slaapritme</ListItem>
                                    <ListItem sx={{ color: theme.palette.common.white }}><Icon component={ChevronRightIcon} sx={{color: theme.palette.secondary.main}} /> Ontspanning</ListItem>
                                </List>
                                <Box sx={{ mt: isMobile ? 2 : 5 }}>
                                    <Button variant="outlined" sx={{ mb: 10 }} href={getRouteUrl(HeaderRoutesEnum.CONTACT)}>
                                        Contact opnemen
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Carousel animation="slide" duration={1500} navButtonsAlwaysVisible={true}>
                                <Box sx={{ height: isMobile ? '350px' : '700px' }}>
                                    <StaticImage
                                        placeholder="blurred"
                                        src="../images/aboutme.jpg"
                                        alt="alt"
                                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                    />
                                </Box>
                                <Box sx={{ height: isMobile ? '350px' : '700px' }}>
                                    <StaticImage
                                        placeholder="blurred"
                                        src="../images/aboutme2.jpg"
                                        alt="alt"
                                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                    />
                                </Box>
                                <Box sx={{ height: isMobile ? '350px' : '700px' }}>
                                    <StaticImage
                                        placeholder="blurred"
                                        src="../images/aboutme3.jpg"
                                        alt="alt"
                                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                    />
                                </Box>
                            </Carousel>
                        </Box>
                    </DefaultContainer>
                </Box>

                <Box>
                    <DefaultContainer maxWidth="lg">
                        <Box sx={{ maxWidth: isMobile ? '80%' : '60%', margin: 'auto' }}>
                            <Typography
                                variant="h1"
                                component="h4"
                                sx={{
                                    'color': theme.palette.common.black,
                                    'fontSize': isMobile ? '30px !important' : '40px !important',
                                    'lineHeight': 1.5,
                                    '> span': {
                                        color: theme.palette.secondary.main,
                                    },
                                }}
                            >
                                "<span>Samen</span> aan de slag gaan en <span>jouw doelen</span> realiseren!"
                            </Typography>
                        </Box>
                    </DefaultContainer>
                </Box>
            </Layout>
        </>
    );
};

export default PersonalTrainingPage;
