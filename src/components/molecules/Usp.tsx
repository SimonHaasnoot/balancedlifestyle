import { Box, SvgIconTypeMap, Typography, useMediaQuery, useTheme } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React from 'react';

export type UspProps = {
    title: string;
    body: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
    sx?: {};
    children?: any;
};

export const Usp: React.FC<UspProps> = (props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'), {
        defaultMatches: true,
    });

    return (
        <Box p={isMobile ? 0 : 4} display="flex" flexDirection="column" alignItems="center" flex="1 1 0px">
            <Box
                sx={{
                    width: 250,
                    height: 250,
                    position: 'relative',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 30,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '100%',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3)',
                        background: 'white',
                        overflow: 'hidden',
                    }}
                >
                    {props.children}
                </Box>
            </Box>
            <Typography variant="subtitle2" mb={3}>
                {props.title}
            </Typography>
            <Typography variant="body1" textAlign="center" dangerouslySetInnerHTML={{ __html: props.body }} />
        </Box>
    );
};
