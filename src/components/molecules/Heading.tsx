import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { DefaultContainer } from '../../components/pagelayout/DefaultContainer';
import useIsMobile from '../../hooks/useMobile';
import { Seo } from '../atoms/Seo';

export type HeadingProps = {
    title: string;
    subtitle?: string | any;
    align?: 'left' | 'center' | 'right';
    children?: any;
    image?: React.ReactNode;
    description?: string;
    pathname?: string;
};

export const Heading: React.FC<HeadingProps> = (props) => {
    const theme = useTheme();
    const { isMobile } = useIsMobile();

    return (
        <>
            <Seo
                title={props.title}
                description={props.description || props.subtitle || props.title}
                pathname={props.pathname}
            />
            <Box sx={{ position: 'relative', background: theme.palette.grey[100], pt: isMobile ? 10 : 20, pb: 0 }}>
                <DefaultContainer maxWidth="lg" sx={{ textAlign: props.align ? props.align : '', zIndex: 2 }}>
                    <Box sx={{ color: 'white' }}>
                        <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
                            {props.title}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            component="h2"
                            sx={{ mb: 3, color: theme.palette.secondary.main, lineHeight: 1.5 }}
                            dangerouslySetInnerHTML={{ __html: props.subtitle }}
                        ></Typography>
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
        </>
    );
};
