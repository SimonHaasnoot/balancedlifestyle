import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Star } from '../atoms/Star';

export type RatingProps = {
    rating: number;
    reviewerText: string;
    reviewerName: string;
    isMale?: boolean;
};

const imageHeight = 100;

export const Rating: React.FC<RatingProps> = (props) => {
    const theme = useTheme();
    const silhouette = props.isMale ? '/images/silhouette-male.png' : '/images/silhouette.png';

    return (
        <Box flex={1}>
            <Box
                sx={{
                    display: 'flex',
                    gap: 2,
                    flexDirection: 'column',
                    background: theme.palette.grey[100],
                    borderRadius: '20px',
                    padding: 3,
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: `linear-gradient(90deg, ${theme.palette.secondary.main}, #FFC107)`,
                    },
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ width: imageHeight, height: imageHeight, borderRadius: '100%', overflow: 'hidden', flexShrink: 0 }}>
                        <img src={silhouette} alt="Silhouette" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                    <Box>
                        <Typography variant="subtitle2" sx={{ color: theme.palette.common.white, fontWeight: 700 }}>
                            {props.reviewerName}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 0.3, mt: 0.5 }}>
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} outline={i >= props.rating} size={18} />
                            ))}
                        </Box>
                    </Box>
                </Box>

                <Typography variant="body2" sx={{ color: theme.palette.common.white, fontStyle: 'italic', lineHeight: 1.7 }}>
                    &ldquo;{props.reviewerText}&rdquo;
                </Typography>
            </Box>
        </Box>
    );
};
