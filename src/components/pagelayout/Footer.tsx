import { Box, Grid, List, ListItem, ListItemButton, ListItemText, Typography, useTheme } from '@mui/material';
import React from 'react';
import useIsMobile from '../../hooks/useMobile';
import { projectVariables } from '../../project';
import { SocialMedia } from '../molecules/SocialMedia';
import { DefaultContainer } from '../pagelayout/DefaultContainer';
import { headerRoutes } from './Layout';

export const Footer: React.FC = () => {
    const { isMobile } = useIsMobile();
    const theme = useTheme();

    return (
        <footer>
            <Box sx={{ background: theme.palette.common.black, color: theme.palette.common.white }}>
                <DefaultContainer maxWidth="lg">
                    <Grid container spacing={isMobile ? 2 : 5}>
                        <Grid item xs={12} sm={6} md={3}>
                            <List>
                                {headerRoutes.map((route, index) => {
                                    return (
                                        <ListItemButton sx={{ textAlign: isMobile ? 'center' : 'left' }} component="a" href={route.path} key={index}>
                                            <ListItemText primary={route.name} />
                                        </ListItemButton>
                                    );
                                })}
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <List>
                                <ListItem sx={{ textAlign: isMobile ? 'center' : 'left' }}>
                                    <ListItemText
                                        sx={{ ['> *']: { color: `${theme.palette.common.white} !important` } }}
                                        primary="Adres"
                                        secondary={projectVariables.COMPANY_ADDRESS}
                                    />
                                </ListItem>
                                <ListItemButton
                                    sx={{ textAlign: isMobile ? 'center' : 'left' }}
                                    component="a"
                                    href={`mailto:${projectVariables.COMPANY_EMAIL}`}
                                >
                                    <ListItemText
                                        sx={{ ['> *']: { color: `${theme.palette.common.white} !important` } }}
                                        primary="Email"
                                        secondary={projectVariables.COMPANY_EMAIL}
                                    />
                                </ListItemButton>
                                <ListItemButton
                                    sx={{ textAlign: isMobile ? 'center' : 'left' }}
                                    component="a"
                                    href={`tel:${projectVariables.COMPANY_PHONE}`}
                                >
                                    <ListItemText
                                        sx={{ ['> *']: { color: `${theme.palette.common.white} !important` } }}
                                        primary="Telefoon"
                                        secondary={projectVariables.COMPANY_PHONE}
                                    />
                                </ListItemButton>
                                <ListItem sx={{ textAlign: isMobile ? 'center' : 'left' }}>
                                    <ListItemText
                                        sx={{ ['> *']: { color: `${theme.palette.common.white} !important` } }}
                                        primary="KVK"
                                        secondary={projectVariables.COMPANY_KVK}
                                    />
                                </ListItem>
                                <ListItem>
                                    <SocialMedia gap={2} sx={{ mx: isMobile ? 'auto' : 'inherit', mt: 3 }} color={theme.palette.secondary.main} />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography
                                component="h4"
                                variant="h1"
                                sx={{
                                    textAlign: 'center',
                                    color: theme.palette.common.white,
                                    [theme.breakpoints.down('md')]: {
                                        fontSize: 30,
                                    },
                                    [theme.breakpoints.up('md')]: {
                                        fontSize: 40,
                                    },
                                }}
                            >
                                {projectVariables.COMPANY_NAME}
                            </Typography>
                        </Grid>
                    </Grid>
                </DefaultContainer>

                <DefaultContainer maxWidth="lg">
                    <Box py={2}>
                        <Typography variant="body2" textAlign="center">
                            &copy; {new Date().getFullYear()} {projectVariables.COMPANY_NAME}. Alle rechten voorbehouden.
                        </Typography>
                    </Box>
                </DefaultContainer>
            </Box>
        </footer>
    );
};
