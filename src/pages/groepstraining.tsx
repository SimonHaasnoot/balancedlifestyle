import { Box, Link, List, ListItem, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Divider } from '../components/molecules/Divider';
import { SmallHero } from '../components/organisms/SmallHero';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { getRouteUrl, HeaderRoutesEnum } from '../types/HeaderRoute';
import { SuccessStories } from '../components/organisms/SuccessStories';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export const GroupsTrainingPage = () => {
    const theme = useTheme();
    const { isMobile } = useIsMobile();

    return (
        <Layout>
            <SmallHero
                image={
                    <StaticImage
                        src="../images/pages/grouptraining.jpg"
                        alt="Hero"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2)' }}
                    />
                }
                title="Groepstraining"
                subtitle="Trainen in groepsverband in onze moderne studio."
                linkTo={{
                    link: getRouteUrl(HeaderRoutesEnum.CONTACT),
                    text: 'Neem contact op',
                }}
            />

            <Box sx={{ backgroundColor: theme.palette.grey[100] }} component="section">
                <DefaultContainer maxWidth="lg" sx={{ textAlign: 'center' }} doublePadding={true}>
                    <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                        In het kort
                    </Typography>
                    <Typography variant="body1" sx={{ color: theme.palette.common.white, mb: 5, mt: 5, maxWidth: 700, mx: 'auto' }}>
                        Met maximaal 6 gemotiveerde fanatiekelingen jouw gezondheidsdoelen behalen op een leuke manier. Vaste trainingsmomenten voor
                        routine en vastigheid. Voedingsadvies in leefstijl optimalisatie en toegang tot onze app inbegrepen. Onze groepstrainingen
                        zijn van de hoogste kwaliteit!
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: theme.palette.common.white,
                            mb: 5,
                            display: 'flex',
                            alignItems: isMobile ? 'inherit' : 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <TrendingFlatIcon sx={{ color: theme.palette.secondary.main, mr: 1 }} />
                        Doelgroep: geschikt voor beginners en gevorderden
                    </Typography>
                </DefaultContainer>
            </Box>

            <SuccessStories />
        </Layout>
    );
};

export default GroupsTrainingPage;
