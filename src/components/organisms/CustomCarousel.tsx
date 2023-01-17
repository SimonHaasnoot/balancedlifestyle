import React from 'react';
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { StaticImage } from 'gatsby-plugin-image';
import useMobile from '../../hooks/useMobile';

export const CustomCarousel: React.FC = () => {
    const { isMobile } = useMobile();

    return (
        <Box>
            <Carousel animation="slide" duration={1500} navButtonsAlwaysVisible={true}>
                <Box sx={{ height: isMobile ? '350px' : '700px' }}>
                    <StaticImage
                        placeholder="blurred"
                        src="../../images/aboutme.jpg"
                        alt="alt"
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                </Box>
                <Box sx={{ height: isMobile ? '350px' : '700px' }}>
                    <StaticImage
                        placeholder="blurred"
                        src="../../images/aboutme2.jpg"
                        alt="alt"
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                </Box>
                <Box sx={{ height: isMobile ? '350px' : '700px' }}>
                    <StaticImage
                        placeholder="blurred"
                        src="../../images/aboutme3.jpg"
                        alt="alt"
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                </Box>
            </Carousel>
        </Box>
    );
};
