import { Box, Button, Container, Icon, Link, Typography, useTheme, keyframes } from '@mui/material';
import * as React from 'react';
import useMobile from '../../hooks/useMobile';
import { SocialMedia } from '../molecules/SocialMedia';
import { getRouteUrl, HeaderRoutesEnum } from '../../types/HeaderRoute';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { OptimizedImage } from '../atoms/OptimizedImage';

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
`;

const breathe = keyframes`
    0%, 100% { transform: scale(1); }
    50%      { transform: scale(1.03); }
`;

const lineGrow = keyframes`
    from { width: 0; }
    to   { width: 60px; }
`;

const scrollBounce = keyframes`
    0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.6; }
    50%      { transform: translateX(-50%) translateY(6px); opacity: 1; }
`;

export const Hero: React.FC = () => {
    const { isMobile } = useMobile();
    const theme = useTheme();
    const accent = theme.palette.secondary.main;

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                overflow: 'hidden',
                height: '100vh',
                minHeight: 600,
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#0c0c0c',
            }}
        >
            {/* ── Background image ── */}
            <Box sx={{
                position: 'absolute',
                inset: 0,
                animation: `${breathe} 20s ease-in-out infinite`,
                willChange: 'transform',
            }}>
                <OptimizedImage
                    src="/images/2026/2026-1.jpg"
                    alt="Lifestyle en Personal Training studio Zeist"
                    loading="eager"
                    fetchPriority="high"
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: isMobile ? 'center 30%' : 'center center',
                    }}
                />
            </Box>

            {/* ── Overlay: soft vignette ── */}
            <Box sx={{
                position: 'absolute',
                inset: 0,
                background: isMobile
                    ? 'linear-gradient(180deg, rgba(12,12,12,0.3) 0%, rgba(12,12,12,0.55) 100%)'
                    : 'radial-gradient(ellipse 120% 100% at 75% 50%, rgba(12,12,12,0) 0%, rgba(12,12,12,0.55) 50%, rgba(12,12,12,0.88) 100%)',
                zIndex: 1,
            }} />

            {/* ── Top accent ── */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
                zIndex: 4,
            }} />

            {/* ── Main content ── */}
            <Box sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 2,
            }}>
                <Container
                    maxWidth="lg"
                    sx={{
                        px: isMobile ? 3 : undefined,
                    }}
                >
                    <Box sx={{
                        maxWidth: isMobile ? '100%' : 560,
                        textAlign: isMobile ? 'center' : 'left',
                    }}>
                        {/* Overline */}
                        <Typography
                            sx={{
                                color: accent,
                                fontSize: '0.7rem',
                                fontWeight: 500,
                                letterSpacing: 5,
                                textTransform: 'uppercase',
                                mb: 1.5,
                                animation: `${fadeIn} 0.7s ease 0.1s both`,
                            }}
                        >
                            Zeist
                        </Typography>

                        {/* Heading */}
                        <Typography
                            variant="h1"
                            component="h1"
                            sx={{
                                fontSize: isMobile ? '42px !important' : undefined,
                                lineHeight: 0.95,
                                color: theme.palette.common.white,
                                mb: 0.5,
                                animation: `${fadeIn} 0.7s ease 0.25s both`,
                            }}
                        >
                            Personal{isMobile ? ' ' : <br />}Training
                        </Typography>

                        {/* Sub heading */}
                        <Typography
                            component="h2"
                            sx={{
                                fontSize: isMobile ? '1rem' : '1.6rem',
                                fontWeight: 300,
                                fontFamily: 'Nunito',
                                letterSpacing: isMobile ? 3 : 5,
                                color: accent,
                                mb: 2.5,
                                animation: `${fadeIn} 0.7s ease 0.4s both`,
                            }}
                        >
                            & Lifestyle
                        </Typography>

                        {/* Animated accent line */}
                        <Box sx={{
                            height: 2,
                            background: accent,
                            borderRadius: 1,
                            mb: 2.5,
                            mx: isMobile ? 'auto' : 0,
                            animation: `${lineGrow} 0.8s ease 0.6s both`,
                            overflow: 'hidden',
                        }} />

                        {/* Body */}
                        <Typography
                            sx={{
                                color: 'rgba(255,255,255,0.72)',
                                fontSize: isMobile ? '0.85rem' : '0.95rem',
                                lineHeight: 1.8,
                                mb: 3.5,
                                mx: isMobile ? 'auto' : 0,
                                maxWidth: 440,
                                animation: `${fadeIn} 0.7s ease 0.7s both`,
                            }}
                        >
                            Jouw gezondheid terug in balans door beweging, voeding en rust.
                            Persoonlijke begeleiding in onze studio in Zeist.
                        </Typography>

                        {/* Buttons */}
                        <Box sx={{
                            display: 'flex',
                            gap: 2,
                            justifyContent: isMobile ? 'center' : 'flex-start',
                            mb: 3.5,
                            animation: `${fadeIn} 0.7s ease 0.85s both`,
                        }}>
                            {/* Primary CTA — filled with glow */}
                            <Button
                                href={getRouteUrl(HeaderRoutesEnum.PERSONAL_TRAINING)}
                                sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    background: `linear-gradient(135deg, ${accent} 0%, #3a9bc4 100%)`,
                                    color: '#0c0c0c',
                                    fontWeight: 700,
                                    fontSize: isMobile ? '0.72rem' : '0.82rem',
                                    px: isMobile ? 3 : 4,
                                    py: isMobile ? 1.3 : 1.5,
                                    borderRadius: '50px',
                                    textTransform: 'none',
                                    letterSpacing: 0.8,
                                    border: 'none',
                                    boxShadow: `0 4px 20px rgba(90,183,219,0.3), inset 0 1px 0 rgba(255,255,255,0.25)`,
                                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: '-100%',
                                        width: '100%',
                                        height: '100%',
                                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                                        transition: 'left 0.5s ease',
                                    },
                                    '&:hover': {
                                        transform: 'translateY(-3px) scale(1.02)',
                                        boxShadow: `0 8px 32px rgba(90,183,219,0.45), 0 0 60px rgba(90,183,219,0.15), inset 0 1px 0 rgba(255,255,255,0.3)`,
                                        '&::before': {
                                            left: '100%',
                                        },
                                    },
                                    '&:active': {
                                        transform: 'translateY(-1px) scale(0.98)',
                                    },
                                }}
                            >
                                Personal training
                            </Button>

                            {/* Secondary CTA — glass with border glow */}
                            <Button
                                href={getRouteUrl(HeaderRoutesEnum.GROEPSTRAINING)}
                                sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    background: 'rgba(255,255,255,0.04)',
                                    backdropFilter: 'blur(16px)',
                                    WebkitBackdropFilter: 'blur(16px)',
                                    color: theme.palette.common.white,
                                    fontWeight: 500,
                                    fontSize: isMobile ? '0.72rem' : '0.82rem',
                                    px: isMobile ? 3 : 4,
                                    py: isMobile ? 1.3 : 1.5,
                                    borderRadius: '50px',
                                    textTransform: 'none',
                                    letterSpacing: 0.8,
                                    border: '1.5px solid rgba(255,255,255,0.15)',
                                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
                                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        inset: -1,
                                        borderRadius: '50px',
                                        padding: '1.5px',
                                        background: `linear-gradient(135deg, rgba(255,255,255,0.1), ${accent}44, rgba(255,255,255,0.1))`,
                                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                        maskComposite: 'exclude',
                                        WebkitMaskComposite: 'xor',
                                        opacity: 0,
                                        transition: 'opacity 0.4s ease',
                                    },
                                    '&:hover': {
                                        borderColor: 'rgba(255,255,255,0.3)',
                                        background: 'rgba(255,255,255,0.08)',
                                        color: accent,
                                        transform: 'translateY(-3px)',
                                        boxShadow: `0 8px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.12)`,
                                        '&::before': {
                                            opacity: 1,
                                        },
                                    },
                                    '&:active': {
                                        transform: 'translateY(-1px)',
                                    },
                                }}
                            >
                                Groepstrainingen
                            </Button>
                        </Box>

                        {/* Social + link */}
                        <Box sx={{ animation: `${fadeIn} 0.7s ease 1s both` }}>
                            <SocialMedia
                                sx={{ mb: 2, justifyContent: isMobile ? 'center' : 'flex-start' }}
                                gap={isMobile ? 3 : 4}
                                fontSize={isMobile ? 22 : 26}
                            />
                            <Link
                                href={getRouteUrl(HeaderRoutesEnum.CONTACT)}
                                underline="none"
                                sx={{
                                    color: 'rgba(255,255,255,0.55)',
                                    fontSize: '0.78rem',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 0.5,
                                    transition: 'color 0.3s',
                                    '&:hover': { color: theme.palette.common.white },
                                }}
                            >
                                Vrijblijvende kennismaking
                                <Icon component={KeyboardDoubleArrowRightIcon} sx={{ fontSize: 16, color: accent }} />
                            </Link>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* ── Scroll indicator ── */}
            {!isMobile && (
                <Box sx={{
                    position: 'absolute',
                    bottom: 28,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 3,
                    animation: `${scrollBounce} 2.5s ease-in-out infinite`,
                }}>
                    <Box sx={{
                        width: 24,
                        height: 38,
                        border: '1.5px solid rgba(255,255,255,0.25)',
                        borderRadius: '12px',
                        position: 'relative',
                    }}>
                        <Box sx={{
                            width: 3,
                            height: 8,
                            background: accent,
                            borderRadius: 2,
                            position: 'absolute',
                            top: 6,
                            left: '50%',
                            transform: 'translateX(-50%)',
                        }} />
                    </Box>
                </Box>
            )}
        </Box>
    );
};
