import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export type CardsProps = {
    cards: {
        image: React.ReactNode;
        title: string;
        subtitle: string;
        package: string;
        text: string;
    }[];
};

export const Cards: React.FC<CardsProps> = (props) => {
    const theme = useTheme();
    const accent = theme.palette.secondary.main;

    return (
        <Grid container spacing={3} justifyContent="center">
            {props.cards.map((card, index) => {
                return (
                    <Grid size={{ xs: 12, md: 4 }} display="flex" key={index}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                                borderRadius: 4,
                                overflow: 'hidden',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.06)',
                                backdropFilter: 'blur(10px)',
                                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    border: `1px solid rgba(90,183,219,0.2)`,
                                    boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(90,183,219,0.06)`,
                                    '& .card-image': {
                                        transform: 'scale(1.05)',
                                    },
                                    '& .card-badge': {
                                        background: accent,
                                        color: '#0c0c0c',
                                    },
                                },
                            }}
                        >
                            {/* Image */}
                            <Box
                                sx={{
                                    position: 'relative',
                                    height: 0,
                                    paddingTop: '85%',
                                    overflow: 'hidden',
                                }}
                            >
                                <Box
                                    className="card-image"
                                    sx={{
                                        position: 'absolute',
                                        inset: 0,
                                        transition: 'transform 0.6s ease',
                                        ['> *']: {
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            display: 'block',
                                        },
                                    }}
                                >
                                    {card.image}
                                </Box>

                                {/* Gradient overlay on image bottom */}
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: '40%',
                                    background: 'linear-gradient(180deg, transparent, rgba(12,12,12,0.8))',
                                    pointerEvents: 'none',
                                }} />

                                {/* Package badge */}
                                <Box
                                    className="card-badge"
                                    sx={{
                                        position: 'absolute',
                                        top: 16,
                                        right: 16,
                                        background: 'rgba(0,0,0,0.5)',
                                        backdropFilter: 'blur(12px)',
                                        color: accent,
                                        fontSize: '0.65rem',
                                        fontWeight: 600,
                                        letterSpacing: 1.5,
                                        textTransform: 'uppercase',
                                        px: 1.5,
                                        py: 0.5,
                                        borderRadius: '20px',
                                        border: `1px solid rgba(90,183,219,0.2)`,
                                        transition: 'all 0.4s ease',
                                    }}
                                >
                                    {card.package}
                                </Box>

                                {/* Result subtitle overlaid on image */}
                                <Box sx={{ position: 'absolute', bottom: 12, left: 16, right: 16 }}>
                                    <Typography sx={{
                                        color: accent,
                                        fontSize: '0.78rem',
                                        fontWeight: 600,
                                        lineHeight: 1.4,
                                        textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                                    }}>
                                        {card.subtitle}
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Content */}
                            <Box sx={{
                                p: 3,
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <Typography sx={{
                                    color: theme.palette.common.white,
                                    fontWeight: 700,
                                    fontSize: '1.15rem',
                                    mb: 2,
                                    fontFamily: 'Exo',
                                }}>
                                    {card.title}
                                </Typography>

                                <Box sx={{ position: 'relative', flex: 1 }}>
                                    <FormatQuoteIcon sx={{
                                        color: accent,
                                        fontSize: 28,
                                        opacity: 0.3,
                                        position: 'absolute',
                                        top: -4,
                                        left: -4,
                                        transform: 'rotate(180deg)',
                                    }} />
                                    <Typography sx={{
                                        color: 'rgba(255,255,255,0.6)',
                                        fontSize: '0.82rem',
                                        lineHeight: 1.8,
                                        fontStyle: 'italic',
                                        pl: 3,
                                    }}>
                                        {card.text}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                );
            })}
        </Grid>
    );
};
