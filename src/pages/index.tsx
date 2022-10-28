import { FitnessCenter, MenuBook, SupervisorAccount } from '@mui/icons-material';
import { Box, Button, Container, Grid, Icon, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { Usp } from '../components/molecules/Usp';
import { Hero } from '../components/organisms/Hero';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';
import '../css/app.css';
import useIsMobile from '../hooks/useMobile';

export const index = () => {
    const theme = useTheme();
    const { isMobile } = useIsMobile();

    return (
        <>
            <Layout>
                <Hero />

                <Box sx={{ backgroundColor: theme.palette.grey[100] }}>
                    <DefaultContainer maxWidth="lg" sx={{ textAlign: 'center' }}>
                        <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                            Waarom wij?
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
                            <StaticImage src="../images/pt1.jpg" alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                                    Waarom Personal Training
                                </Typography>
                                <Typography variant="body1" sx={{ color: theme.palette.common.black }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet, nisl vitae tincidunt luctus, nunc nisl
                                    ultricies nunc, nec aliquam nisl nunc vel lorem. Sed tincidunt, nisl vitae tincidunt luctus, nunc nisl ultricies
                                    nunc, nec aliquam nisl nunc vel lorem. Sed tincidunt, nisl vitae tincidunt luctus, nunc nisl ultricies nunc, nec
                                    aliquam nisl nunc vel lorem. Sed tincidunt, nisl vitae tincidunt luctus, nunc nisl
                                </Typography>
                                <Button variant="contained" sx={{ mt: 5 }}>
                                    Neem contact op
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                <Box sx={{ backgroundColor: theme.palette.grey[100] }}>
                    <DefaultContainer maxWidth="lg" sx={{ textAlign: 'center' }}>
                        <Typography variant="h2" sx={{ color: theme.palette.secondary.main }}>
                            Onze trainer
                        </Typography>
                    </DefaultContainer>
                </Box>
            </Layout>
        </>
    );
};

export default index;
