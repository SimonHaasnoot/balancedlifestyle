import { Box, Container, Link, Typography, useTheme } from '@mui/material';
import * as React from 'react';
import useMobile from '../../hooks/useMobile';
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
    sideImage?: boolean;
};

export const SmallHero: React.FC<SmallHeroProps> = (props) => {
    const { isMobile } = useMobile();
    const theme = useTheme();

    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                position: 'relative',
                overflow: 'hidden',
                height: isMobile ? 'auto' : props.customHeight ? props.customHeight : '70vh',
                minHeight: isMobile ? '70vh' : undefined,
                backgroundColor: '#1C1D1F',
            }}
            component="section"
        >
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    ...(props.sideImage && !isMobile && { left: '30%' }),
                }}
            >
                {props.image}
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 1,
                    background:
                        props.sideImage && !isMobile
                            ? 'linear-gradient(90deg, #1C1D1F 25%, rgba(28,29,31,0.6) 50%, transparent 70%)'
                            : isMobile
                            ? 'linear-gradient(0deg, rgba(28,29,31,0.95) 30%, rgba(28,29,31,0.5) 60%, rgba(28,29,31,0.3) 100%)'
                            : 'linear-gradient(0deg, rgba(28,29,31,0.85) 10%, rgba(28,29,31,0.4) 50%, rgba(28,29,31,0.2) 100%)',
                }}
            />

            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, transparent 0%, ${theme.palette.secondary.main} 50%, transparent 100%)`,
                    zIndex: 3,
                }}
            />

            <Box
                sx={{
                    display: 'flex',
                    alignItems: isMobile ? 'flex-end' : 'flex-start',
                    flexDirection: 'column',
                    justifyContent: isMobile ? 'flex-end' : 'center',
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    zIndex: 2,
                    pb: isMobile ? 6 : 0,
                    pt: isMobile ? 15 : 0,
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{ color: 'white', textAlign: isMobile ? 'center' : 'inherit' }}>
                        <Typography
                            variant="overline"
                            sx={{
                                color: theme.palette.secondary.main,
                                fontSize: isMobile ? '0.7rem' : '0.85rem',
                                letterSpacing: '4px',
                                mb: 1.5,
                                display: 'block',
                            }}
                        >
                            Lifestyle & Personal Training
                        </Typography>

                        <Typography
                            variant="h1"
                            component="h1"
                            sx={{
                                mb: 3,
                                background: `linear-gradient(135deg, ${theme.palette.common.white} 0%, ${theme.palette.secondary.main} 100%)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            {props.title}
                        </Typography>

                        <Box
                            sx={{
                                width: 60,
                                height: 3,
                                backgroundColor: theme.palette.secondary.main,
                                mb: 3,
                                mx: isMobile ? 'auto' : 0,
                                borderRadius: 2,
                            }}
                        />

                        <Typography
                            variant="subtitle2"
                            sx={{
                                mb: 4,
                                maxWidth: isMobile ? '100%' : '55%',
                                py: 2,
                                px: 3,
                                lineHeight: 1.8,
                                borderLeft: isMobile ? 'none' : `3px solid ${theme.palette.secondary.main}`,
                                background: 'rgba(90, 183, 219, 0.08)',
                                backdropFilter: 'blur(8px)',
                                borderRadius: isMobile ? 2 : '0 8px 8px 0',
                            }}
                            dangerouslySetInnerHTML={{ __html: props.subtitle }}
                        />

                        {props.linkTo && (
                            <Link
                                href={props.linkTo.link}
                                sx={{
                                    py: 1.5,
                                    px: 3,
                                    border: `1px solid ${theme.palette.secondary.main}`,
                                    borderRadius: 1,
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    fontSize: '15px',
                                    color: theme.palette.common.white,
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease',
                                    ':hover': {
                                        background: theme.palette.secondary.main,
                                        color: theme.palette.common.white,
                                        transform: 'translateY(-2px)',
                                        boxShadow: `0 4px 20px ${theme.palette.secondary.main}40`,
                                    },
                                }}
                            >
                                {props.linkTo.text}
                                <ChevronRightIcon sx={{ ml: 1, transition: 'transform 0.3s ease' }} />
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
    );
};
