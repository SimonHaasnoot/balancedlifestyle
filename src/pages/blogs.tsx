import { useTheme, Grid, Typography, Chip, Box } from '@mui/material';
import React from 'react';
import { Heading } from '../components/molecules/Heading';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';

export const BlogPage = (props: any) => {
    const theme = useTheme();
    const { isMobile, isTabletOrSmaller } = useIsMobile();

    return (
        <>
            <Layout location={props.location}>
                <Heading
                    title="Blogs"
                    subtitle="Elke maand wordt er een blog geüpload over belangrijke vraagstukken, feitjes, fabels en de nieuwste informatie betreft
                                een gebalanceerde leefstijl."
                />
                <DefaultContainer maxWidth="lg">
                    <Grid container>
                        <Grid item xs={12} md={9}>
                            <Typography variant="h4" sx={{ fontWeight: 700, mb: 0 }}>
                                #1 De hype van de blije koe
                            </Typography>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="caption">
                                    2 November 2022
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                                <Chip label="Voeding" />
                                <Chip label="Lifestyle" />
                            </Box>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies tincidunt, nisl nisl
                                aliquet nisl, nec lacinia nunc lorem eget nunc. Nullam eget nisl condimentum, lacinia nisl vitae, tincidunt nisl.
                                Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
                                facilisi.
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies tincidunt, nisl nisl
                                aliquet nisl, nec lacinia nunc lorem eget nunc. Nullam eget nisl condimentum, lacinia nisl vitae, tincidunt nisl.
                                Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
                                facilisi.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3}></Grid>
                    </Grid>
                </DefaultContainer>
            </Layout>
        </>
    );
};

export default BlogPage;
