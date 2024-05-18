import { Box, Button, Container, Icon, Link, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import useMobile from '../../hooks/useMobile';
import { SocialMedia } from '../molecules/SocialMedia';
import { getRouteUrl, HeaderRoutesEnum } from '../../types/HeaderRoute';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

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
                    src="../../images/samen/sem_en_tim.webp"
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
                                href={getRouteUrl(HeaderRoutesEnum.GROEPSTRAINING)}
                            >
                                Groepstrainingen
                            </Button>
                        </Box>
                        <SocialMedia sx={{ mb: 5 }} />
                        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                            <Link
                                href={getRouteUrl(HeaderRoutesEnum.CONTACT)}
                                variant="subtitle2"
                                sx={{ color: theme.palette.common.white, display: 'flex', alignItems: 'center' }}
                            >
                                Klik
                                <Box sx={{ color: theme.palette.warning.main, display: 'flex', alignItems: 'center', mx: 1 }}>
                                    <Icon component={KeyboardDoubleArrowRightIcon} />
                                    hier
                                </Box>
                                voor een gratis proefles
                            </Link>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Container>
    );
};
