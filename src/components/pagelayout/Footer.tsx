import React from 'react';
import { Box, Container, Grid, Typography, List, ListItem, ListItemText, ListItemButton, Divider } from '@mui/material';
import useIsMobile from '../../hooks/useMobile';
import { DefaultContainer } from './DefaultContainer';
import { headerRoutes } from './Layout';
import { projectVariables } from '../../project';

export const Footer: React.FC = () => {
    const { isMobile } = useIsMobile();

    return (
        <footer>
            <Box>
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
                                    <ListItemText primary="Adres" secondary={projectVariables.COMPANY_ADDRESS} />
                                </ListItem>
                                <ListItemButton
                                    sx={{ textAlign: isMobile ? 'center' : 'left' }}
                                    component="a"
                                    href={`mailto:${projectVariables.COMPANY_EMAIL}`}
                                >
                                    <ListItemText primary="Email" secondary={projectVariables.COMPANY_EMAIL} />
                                </ListItemButton>
                                <ListItemButton
                                    sx={{ textAlign: isMobile ? 'center' : 'left' }}
                                    component="a"
                                    href={`tel:${projectVariables.COMPANY_PHONE}`}
                                >
                                    <ListItemText primary="Telefoon" secondary={projectVariables.COMPANY_PHONE} />
                                </ListItemButton>
                            </List>
                        </Grid>
                    </Grid>
                </DefaultContainer>

                <Container maxWidth="lg">
                    <Divider sx={{ borderWidth: '2px', borderColor: 'rgba(255, 255, 255, 0.6)' }} />
                </Container>

                <DefaultContainer maxWidth="lg">
                    <Box py={2}>
                        <Typography variant="body2" textAlign="center">
                            &copy; {new Date().getFullYear()} {projectVariables.COMPANY_NAME}. Alle rechten voorbehouden
                        </Typography>
                    </Box>
                </DefaultContainer>
            </Box>
        </footer>
    );
};
