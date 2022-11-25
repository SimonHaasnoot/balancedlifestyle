import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';
import { DefaultContainer } from '../../components/pagelayout/DefaultContainer';
import useIsMobile from '../../hooks/useMobile';

export type HeadingProps = {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
};

export const Heading: React.FC<HeadingProps> = (props) => {
    const theme = useTheme();
    const { isMobile } = useIsMobile();

    return (
        <>
            <Helmet>
                <title>{props.title} - Balanced Lifestyle</title>
            </Helmet>
            <Box sx={{ position: 'relative', background: theme.palette.grey[100], pt: isMobile ? 10 : 20, pb: 0 }}>
                <DefaultContainer maxWidth="lg" sx={{ textAlign: props.align ? props.align : '' }}>
                    <Box sx={{ color: 'white' }}>
                        <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
                            {props.title}
                        </Typography>
                        <Typography variant="subtitle2" component="h2" sx={{ mb: 3, color: theme.palette.secondary.main, lineHeight: 1.5 }}>
                            {props.subtitle}
                        </Typography>
                    </Box>
                </DefaultContainer>
            </Box>
        </>
    );
};
