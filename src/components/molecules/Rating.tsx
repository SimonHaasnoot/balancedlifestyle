import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Star } from '../atoms/Star';
import { StaticImage } from 'gatsby-plugin-image';

export type RatingProps = {
    rating: number;
    reviewerText: string;
    reviewerName: string;
    isMale?: boolean;
};

const imageHeight = 100;

export const Rating: React.FC<RatingProps> = (props) => {
    const theme = useTheme();

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
                }}
            >
                <Box sx={{ width: imageHeight, height: imageHeight, borderRadius: '100%', overflow: 'hidden', display: props.isMale ?  'none' : 'inherit' }}>
                    <StaticImage src="../../images/silhouette.png" alt="Silhoutte" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
                <Box sx={{ width: imageHeight, height: imageHeight, borderRadius: '100%', overflow: 'hidden', display: !props.isMale ?  'none' : 'inherit' }}>
                    <StaticImage src="../../images/silhouette-male.png" alt="Silhoutte" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
                <Typography variant="body2" sx={{ color: theme.palette.common.white }}>
                    "{props.reviewerText}"
                </Typography>

                <Typography variant="subtitle2" sx={{ color: theme.palette.common.white, mt: 'auto' }}>
                    {props.reviewerName}
                </Typography>

                <Box>
                    {[...Array(5)].map((_, i) => {
                        return <Star key={i} outline={i >= props.rating} />;
                    })}
                </Box>
            </Box>
        </Box>
    );
};
