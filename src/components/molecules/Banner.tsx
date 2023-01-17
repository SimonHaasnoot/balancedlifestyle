import React from 'react';
import { Box, Typography } from '@mui/material';
import { DefaultContainer } from '../pagelayout/DefaultContainer';
import useIsMobile from '../../hooks/useMobile';
import { useTheme } from '@mui/material/styles';

export const Banner: React.FC = () => {
    const { isMobile } = useIsMobile();
    const theme = useTheme();

    return (
        <Box>
            <DefaultContainer maxWidth="lg">
                <Box sx={{ maxWidth: isMobile ? '80%' : '60%', margin: 'auto' }}>
                    <Typography
                        variant="h1"
                        component="h4"
                        sx={{
                            'color': theme.palette.common.black,
                            'fontSize': isMobile ? '30px !important' : '40px !important',
                            'lineHeight': 1.5,
                            '> span': {
                                color: theme.palette.secondary.main,
                            },
                        }}
                    >
                        "<span>Samen</span> aan de slag gaan en <span>jouw doelen</span> realiseren!"
                    </Typography>
                </Box>
            </DefaultContainer>
        </Box>
    );
};
