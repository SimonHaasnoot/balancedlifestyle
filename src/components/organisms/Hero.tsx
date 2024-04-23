import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import useMobile from '../../hooks/useMobile';
import { SocialMedia } from '../molecules/SocialMedia';
import { getRouteUrl, HeaderRoutesEnum } from '../../types/HeaderRoute';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const Hero: React.FC = () => {
    const { isMobile } = useMobile();
    const theme = useTheme();

    return (
        <Container
            maxWidth={false}
            disableGutters
            component={'section'}
            sx={{
                position: 'relative',
                overflow: 'hidden',
                height: '95vh',
                backgroundColor: '#1C1D1F',
            }}
        >
            <Box sx={{ position: 'absolute', inset: '0 0 0 0' }}>
                <StaticImage
                    src="../../images/aboutme21.jpg"
                    alt="Random image"
                    placeholder="blurred"
                    loading="eager"
                    layout="fixed"
                    style={{ height: '100%', width: '100%', objectFit: 'cover', filter: 'brightness(0.4)' }}
                    transformOptions={{
                        cropFocus: 'entropy',
                    }}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: isMobile ? 'center' : 'flex-start',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                }}
            >
                <Container maxWidth="lg" sx={{ position: 'relative' }}>
                    <Box sx={{ color: 'white', textAlign: isMobile ? 'center' : 'inherit' }}>
                        <Typography variant="h1" component="h1" sx={{ mb: 3, pt: 10 }}>
                            Balanced <br /> Lifestyle
                        </Typography>
                        <Box sx={{ mb: 10, display: 'flex', gap: 2, flexDirection: isMobile ? 'column' : 'row' }}>
                            <Button variant="outlined" href={getRouteUrl(HeaderRoutesEnum.PERSONAL_TRAINING)}>
                                Personal training
                            </Button>

                            <Button
                                variant="outlined"
                                sx={{ outline: '2px solid white', background: 'transparent' }}
                                href={getRouteUrl(HeaderRoutesEnum.ONLINE_COACHING)}
                            >
                                Online coaching
                            </Button>
                        </Box>
                        <SocialMedia sx={{ mb: 5 }} />
                        <Box sx={{ position: 'relative', p: 3, display: 'inline-flex' }}>
                            <Typography variant="caption" sx={{ position: 'absolute', top: 0, left: 0, color: theme.palette.warning.main, display: 'flex', alignItems: 'center', }}>
                                <InfoOutlinedIcon sx={{ mr: 1 }} />
                                Laatste update
                            </Typography>
                            <Typography variant="subtitle2" sx={{ color: 'white', textDecoration: 'underline', textDecorationColor: theme.palette.warning.main }}>
                                Neem vrijblijvend contact op voor een gratis proefles
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Container>
    );
};
