import { Box, Container, Link, Typography, useTheme } from '@mui/material';
import * as React from 'react';
import useMobile from '../../hooks/useMobile';
import { Helmet } from 'react-helmet';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Countdown } from './Countdown';

export type SmallHeroProps = {
    image: React.ReactNode;
    title: string;
    subtitle: string;
    linkTo?: {
        link: string;
        text: string;
    };
    countdownDate?: string;
    customHeight?: string;
};

export const SmallHero: React.FC<SmallHeroProps> = (props) => {
    const { isMobile } = useMobile();
    const theme = useTheme();

    return (
        <>
            <Helmet>
                <title>{props.title} - Balanced Lifestyle</title>
            </Helmet>
            <Container
                maxWidth={false}
                disableGutters
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: isMobile ? '90vh' : props.customHeight ? props.customHeight : '75vh',
                    backgroundColor: '#1C1D1F',
                }}
                component="section"
            >
                <Box sx={{ position: 'absolute', inset: '0 0 0 0' }}>{props.image}</Box>
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
                            <Typography
                                variant="subtitle2"
                                sx={{ mb: 3, maxWidth: isMobile ? '100%' : '60%', padding: 3, background: '#5ab7db38', lineHeight: 1.5 }}
                                dangerouslySetInnerHTML={{ __html: props.subtitle }}
                            ></Typography>
                            {props.linkTo && (
                                <Link
                                    href={props.linkTo.link}
                                    sx={{
                                        p: 1,
                                        border: `1px solid ${theme.palette.warning.main}`,
                                        display: 'inline-flex',
                                        fontSize: '15px',
                                    }}
                                >
                                    {props.linkTo.text}
                                    <ChevronRightIcon sx={{ ml: 1 }} />
                                </Link>
                            )}
                            {props.countdownDate && (
                                <Box sx={{ mt: 5 }}>
                                    <Countdown date={props.countdownDate} />
                                </Box>
                            )}
                        </Box>
                    </Container>
                </Box>
            </Container>
        </>
    );
};
