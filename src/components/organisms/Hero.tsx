import { ArrowRightAlt } from '@mui/icons-material';
import { Box, Button, Container, Icon, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Carousel from 'react-material-ui-carousel';
import useMobile from '../../hooks/useMobile';

export type HeroProps = {
    height: string;
};

export const Hero: React.FC<HeroProps> = (props) => {
    const heroHeight = props.height;
    const theme = useTheme();
    const { isMobile } = useMobile();

    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    filter: 'brightness(0.4)',
                    transition: 'filter 0.25s ease-in-out',
                }}
            >
                <Carousel
                    interval={10000}
                    animation="fade"
                    duration={1500}
                    height={heroHeight}
                    navButtonsAlwaysVisible={true}
                    indicators={false}
                    sx={{
                        ['button']: {
                            background: theme.palette.primary.main,
                        },
                    }}
                >
                    <StaticImage
                        src="../../images/example.jpg"
                        alt="Random image"
                        placeholder="blurred"
                        loading="eager"
                        style={{ height: heroHeight, width: '100%' }}
                    />
                </Carousel>
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    inset: '0 0 0 0',
                    display: 'flex',
                    alignItems: isMobile ? 'center' : 'flex-start',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    margin: isMobile ? 0 : '0 50px',
                }}
            >
                <Container maxWidth="lg" sx={{ position: 'relative' }}>
                    <Box>
                        {/* Content here */}
                    </Box>
                </Container>
            </Box>
        </Container>
    );
};
