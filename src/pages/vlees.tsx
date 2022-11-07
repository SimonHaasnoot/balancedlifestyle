import { Box, Grid, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Heading } from '../components/molecules/Heading';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';

export const MeatPage = (props: any) => {
    const theme = useTheme();
    const { isMobile, isTabletOrSmaller } = useIsMobile();

    return (
        <>
            <Layout location={props.location}>
                <Heading title="Vlees" subtitle="Wat een blije koe wel niet allemaal kan doen." />

                <Box>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <StaticImage src="../images/cow.jpg" alt="Cow" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                                    Biologisch
                                </Typography>
                                <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.black, mb: 5 }}>
                                    Vlees van biologische boerderij
                                </Typography>
                                <Typography variant="body1" sx={{ color: theme.palette.common.black }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies
                                    tincidunt, nunc nisl aliquam nunc, eget aliquam nisl nisl sit amet lorem. Sed euismod, nisl
                                    vitae ultricies tincidunt, nunc nisl aliquam nunc, eget aliquam nisl nisl sit amet lorem.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Layout>
        </>
    );
};

export default MeatPage;
