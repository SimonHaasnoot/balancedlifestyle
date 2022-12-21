import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';

export type TeaserProps = {
    title: string;
    description: string;
    staticImage: any;
};

export const Teaser: React.FC<TeaserProps> = (props) => {
    const theme = useTheme();

    return (
        <Box sx={{ position: 'relative' }}>
            <Container maxWidth={false} disableGutters>
                <Grid container spacing={0}>
                    <Box
                        sx={{
                            // position: 'absolute',
                            height: '100%',
                            width: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            p: 5,
                        }}
                    >
                        <Box sx={{ maxWidth: '500px' }}>{props.staticImage}</Box>
                    </Box>
                    <Grid item xs={12} p={5} sx={{ display: 'flex', justifyContent: 'flex-end', backgroundColor: theme.palette.primary.main }}>
                        <Grid item md={6}>
                            <Typography variant="subtitle1" component="h2" sx={{ color: theme.palette.secondary.main, mb: 0, mt: 10 }}>
                                {props.title}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} py={10} px={10} sx={{ display: 'flex', justifyContent: 'flex-end', backgroundColor: theme.palette.grey[100] }}>
                        <Grid item md={6}>
                            <Typography variant="body1" sx={{ color: theme.palette.common.white, mb: 5 }}>
                                {props.description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
