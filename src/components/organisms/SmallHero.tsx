import { Box, Button, Container, Typography } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import useMobile from '../../hooks/useMobile';
import { SocialMedia } from '../molecules/SocialMedia';
import { getRouteUrl, HeaderRoutesEnum } from '../../types/HeaderRoute';

export type SmallHeroProps = {
    image: React.ReactNode;
    title: string;
    subtitle: string;
}
export const SmallHero: React.FC<SmallHeroProps> = (props) => {
    const { isMobile } = useMobile();

    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                position: 'relative',
                overflow: 'hidden',
                height: '65vh',
                backgroundColor: '#1C1D1F',
            }}
        >
            <Box sx={{ position: 'absolute', inset: '0 0 0 0' }}>
                {props.image}
                {/* <StaticImage
                    src="../../images/aboutme21.jpg"
                    alt="Random image"
                    placeholder="blurred"
                    loading="eager"
                    layout="fixed"
                    style={{ height: '100%', width: '100%', objectFit: 'cover', filter: 'brightness(0.4)' }}
                    transformOptions={{
                        cropFocus: 'entropy',
                    }}
                /> */}
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
                            {props.title}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ mb: 3, maxWidth: isMobile ? '100%' : '60%', padding: 3, background: '#ffffff4f' }}>
                            {props.subtitle}
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Container>
    );
};
