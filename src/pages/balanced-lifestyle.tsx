import { Box, Grid, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Heading } from '../components/molecules/Heading';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';

export const BalancedLifestylePage = (props: any) => {
    const theme = useTheme();
    const { isMobile, isTabletOrSmaller } = useIsMobile();

    return (
        <>
            <Layout location={props.location}>
                <Heading title="Challenge" subtitle="De Balanced Lifestyle challenge." />

                <Box>
                    <Grid container>
                        <Grid item xs={4} md={2}>
                            <Box sx={{ background: theme.palette.grey[100] }}>
                                <StaticImage src="../images/workouts/workout1.jpg" alt="Workout" style={{ width: '100%', objectFit: 'cover', height: 300 }} />
                            </Box>
                        </Grid>
                        <Grid item xs={4} md={2}>
                            <Box sx={{ background: theme.palette.grey[100] }}>
                                <StaticImage src="../images/workouts/workout2.jpg" alt="Workout" style={{ width: '100%', objectFit: 'cover', height: 300 }} />
                            </Box>
                        </Grid>
                        <Grid item xs={4} md={2}>
                            <Box sx={{ background: theme.palette.grey[100] }}>
                                <StaticImage src="../images/workouts/workout1.jpg" alt="Workout" style={{ width: '100%', objectFit: 'cover', height: 300 }} />
                            </Box>
                        </Grid>
                        <Grid item xs={4} md={2}>
                            <Box sx={{ background: theme.palette.grey[100] }}>
                                <StaticImage src="../images/workouts/workout2.jpg" alt="Workout" style={{ width: '100%', objectFit: 'cover', height: 300 }} />
                            </Box>
                        </Grid>
                        <Grid item xs={4} md={2}>
                            <Box sx={{ background: theme.palette.grey[100] }}>
                                <StaticImage src="../images/workouts/workout1.jpg" alt="Workout" style={{ width: '100%', objectFit: 'cover', height: 300 }} />
                            </Box>
                        </Grid>
                        <Grid item xs={4} md={2}>
                            <Box sx={{ background: theme.palette.grey[100] }}>
                                <StaticImage src="../images/workouts/workout2.jpg" alt="Workout" style={{ width: '100%', objectFit: 'cover', height: 300 }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Layout>
        </>
    );
};

export default BalancedLifestylePage;
