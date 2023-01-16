import React from 'react';
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { StaticImage } from 'gatsby-plugin-image';

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

    return (
        <Grid2 container spacing={2} justifyContent="center">
            {props.cards.map((card, index) => {
                return (
                    <Grid2 xs={12} md={4} display="flex" key={index}>
                        <Box p={2} boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.3)">
                            <Box
                                sx={{
                                    height: 0,
                                    overflow: 'hidden',
                                    paddingTop: '90%',
                                    position: 'relative',

                                    ['> div']: {
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                    }
                                }}
                            >
                                {card.image}
                            </Box>
                            <Typography variant="h5" sx={{ color: theme.palette.primary.main, mt: 2 }}>
                                {card.title}
                            </Typography>
                            <Typography variant="subtitle2" sx={{ color: theme.palette.secondary.main }}>
                                {card.subtitle}
                            </Typography>
                            <Typography variant="caption" sx={{ mt: 2 }}>
                                <b>Pakket:</b> {card.package}
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 2 }}>
                                {card.text}
                            </Typography>
                        </Box>
                    </Grid2>
                );
            })}
        </Grid2>
    );
};
