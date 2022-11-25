import { Box, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Heading } from '../components/molecules/Heading';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';
import Carousel from 'react-material-ui-carousel';

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

                <Box sx={{ background: theme.palette.common.white }}>
                    <DefaultContainer maxWidth="lg">
                        <Typography variant="h3" sx={{ color: theme.palette.secondary.main }}>
                            Hoe werkt het?
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: theme.palette.common.black, lineHeight: 2, mb: 5 }}>
                            <b>Samen gaan wij aan de slag om jouw doelen te realiseren en de beste versie van jou naar boven te halen.</b> Wekelijks
                            gaan wij op 1 op 1 sporten op een locatie naar jouw keuze. In een veilige omgeving, waarin jouw prestatieverbetering
                            voorop staat.
                        </Typography>
                    </DefaultContainer>
                </Box>

                <Box sx={{ background: theme.palette.grey[100] }}>
                    <DefaultContainer maxWidth="lg">
                        <Box sx={{ display: 'flex', gap: 5 }}>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h3" sx={{ color: theme.palette.secondary.main }}>
                                    Wat gaan we doen?
                                </Typography>
                                <Typography variant="subtitle2" sx={{ color: theme.palette.common.white, lineHeight: 2 }}>
                                    Trainingen zullen bestaan uit kracht en conditie oefeningen, mobiliteitsoefeningen en technieklessen. Daarnaast
                                    gaan wij ook samen aan de slag met jouw eetgewoontes. Wij gaan jou aanleren om gezondere en bewustere keuzes te
                                    maken thuis en buitenshuis, waarin balans voorop staat. Daarnaast gaan we werken aan een vast slaapritme, waarin
                                    naar een dagelijkse ontspanning centraal staat.
                                </Typography>
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                <StaticImage placeholder="blurred" src="../images/gym1.png" alt="Balanced stones" style={{ float: 'right' }} />
                            </Box>
                        </Box>
                    </DefaultContainer>
                </Box>

                <Box>
                    <DefaultContainer maxWidth="lg">
                        <Carousel animation="slide" duration={1500}>
                            <Box sx={{ height: '700px' }}>
                                <StaticImage
                                    placeholder="blurred"
                                    src="../images/aboutme.jpg"
                                    alt="alt"
                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                />
                            </Box>
                            <Box sx={{ height: '700px' }}>
                                <StaticImage
                                    placeholder="blurred"
                                    src="../images/aboutme2.jpg"
                                    alt="alt"
                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                />
                            </Box>
                            <Box sx={{ height: '700px' }}>
                                <StaticImage
                                    placeholder="blurred"
                                    src="../images/aboutme3.jpg"
                                    alt="alt"
                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                />
                            </Box>
                        </Carousel>
                    </DefaultContainer>
                </Box>
            </Layout>
        </>
    );
};

export default PersonalTrainingPage;
