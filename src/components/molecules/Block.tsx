import React from 'react';
import { Box, Container, Grid, SxProps, Theme, Typography, useTheme, Button } from '@mui/material';
import useIsMobile from '../../hooks/useMobile';
import { StaticImage } from 'gatsby-plugin-image';
import { getRouteUrl, HeaderRoutesEnum } from '../../types/HeaderRoute';
import { useInView } from 'react-intersection-observer';

export type BlockProps = {
    staticImage: any;
    title: string;
    subtitle: string;
    body: string;
    button?: {
        link: HeaderRoutesEnum;
        text: string;
    };
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    disableScale?: boolean;
};

export const Block: React.FC<BlockProps> = (props) => {
    const theme = useTheme();
    const { isMobile } = useIsMobile();
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.9,
    });
    const maxWidth = props.maxWidth || false;
    const disableScale = props.disableScale || false;

    return (
        <Container maxWidth={maxWidth} disableGutters>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6} sx={{ transform: !disableScale && inView && !isMobile ? 'scale(1.05)' : 'scale(1)', transition: 'all 0.3s ease-in-out' }}>
                    {props.staticImage}
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        p={10}
                        sx={{
                            [theme.breakpoints.down('md')]: {
                                p: 5,
                            },
                            [theme.breakpoints.up('xl')]: {
                                p: maxWidth ? 10 : 20,
                            },
                        }}
                        ref={ref}
                    >
                        <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                            {props.subtitle}
                        </Typography>
                        <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.black, mb: 5 }}>
                            {props.title}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ color: theme.palette.common.black }}
                            dangerouslySetInnerHTML={{ __html: props.body }}
                        ></Typography>
                        {props.button && (
                            <Button variant="contained" sx={{ mt: 5 }} href={getRouteUrl(props.button.link)}>
                                {props.button.text}
                            </Button>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};
