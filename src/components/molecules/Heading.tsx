import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { DefaultContainer } from '../pagelayout/DefaultContainer';
import useIsMobile from '../../hooks/useMobile';

export type HeadingProps = {
    title: string;
    subtitle?: string | any;
    align?: 'left' | 'center' | 'right';
    children?: React.ReactNode;
    image?: React.ReactNode;
};

export const Heading: React.FC<HeadingProps> = (props) => {
    const theme = useTheme();
    const { isMobile } = useIsMobile();

    return (
        <Box sx={{ position: 'relative', background: theme.palette.grey[100], pt: isMobile ? 10 : 20, pb: 0 }}>
            <DefaultContainer maxWidth="lg" sx={{ textAlign: props.align ? props.align : 'inherit', zIndex: 2 }}>
                <Box sx={{ color: 'white' }}>
                    <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
                        {props.title}
                    </Typography>
                    {props.subtitle && (
                        <Typography
                            variant="subtitle2"
                            component="h2"
                            sx={{ mb: 3, color: theme.palette.secondary.main, lineHeight: 1.5 }}
                            dangerouslySetInnerHTML={{ __html: props.subtitle }}
                        />
                    )}
                    <Box>{props.children}</Box>
                </Box>
            </DefaultContainer>

            {props.image && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                    }}
                >
                    {props.image}
                </Box>
            )}
        </Box>
    );
};
