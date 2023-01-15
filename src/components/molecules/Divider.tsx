import React from 'react';
import { Box, Typography } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

export const Divider: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                py: 5
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '3px',
                    backgroundColor: '#5ab7db38',
                }}
            />
            <Box>
                <Typography variant="h6" sx={{ color: '#5ab7db', mx: 2 }}>
                    <FitnessCenterIcon />
                </Typography>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    height: '3px',
                    backgroundColor: '#5ab7db38',
                }}
            />
        </Box>
    );
};
