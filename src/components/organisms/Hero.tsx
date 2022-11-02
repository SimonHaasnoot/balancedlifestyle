import { Box, Button, Container, Typography } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import useMobile from '../../hooks/useMobile';
import { SocialMedia } from '../molecules/SocialMedia';
import { getRouteUrl, HeaderRoutesEnum } from '../../types/HeaderRoute';

export const Hero: React.FC = () => {
    const { isMobile } = useMobile();

    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                position: 'relative',
                overflow: 'hidden',
                height: '95vh',
                backgroundColor: '#1C1D1F',
            }}
        >
            <Box sx={{ position: 'absolute', inset: '0 0 0 0' }}>
                <StaticImage
                    src="../../images/hero.png"
                    alt="Random image"
                    placeholder="blurred"
                    loading="eager"
                    style={{ height: '100%', width: '100%', objectFit: 'cover', filter: 'brightness(0.4)' }}
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
                        <Typography variant="subtitle2" sx={{ mb: 3, maxWidth: isMobile ? '100%' : '60%' }}>
                            Join the balanced living!
                        </Typography>
                        <Button variant="outlined" sx={{ mb: 10 }} href={getRouteUrl(HeaderRoutesEnum.BALANCED_LIFESTYLE)}>
                            Start hier
                        </Button>

                        <SocialMedia />
                    </Box>
                </Container>
            </Box>
        </Container>
    );
};
