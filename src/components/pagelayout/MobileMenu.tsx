import { Box, Icon, Link, List, ListItem } from '@mui/material';
import { HeaderRouteType } from '../../types/HeaderRoute';
import React from 'react';
import { Close } from '@mui/icons-material';
import { headerRoutes } from './Layout';
import { projectVariables } from '../../project';

type MobileMenuProps = {
    location?: Location;
    mobileMenuActive: boolean;
    setMobileMenuActive: (active: boolean) => void;
    theme: any;
};

export const MobileMenu: React.FC<MobileMenuProps> = ({ location, mobileMenuActive, setMobileMenuActive, theme }) => {
    return (
        <List
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1000,
                visibility: mobileMenuActive ? 'visible' : 'hidden',
                opacity: mobileMenuActive ? 1 : 0,
                background: 'rgba(0, 0, 0, 0.9)',
                lineHeight: 2,
                transition: 'opacity 0.35s ease-in-out, visibility 0.35s ease-in-out',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box position="relative">
                {headerRoutes.filter(x => !x.notVisible).map((route, index) => {
                    const isActive = route.path.replace('#', '') === location?.pathname;

                    return (
                        <ListItem key={index}>
                            <Link
                                component="a"
                                onClick={() => setMobileMenuActive(false)}
                                underline="none"
                                href={`${route.path}`}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: isActive ? theme.palette.secondary.main : theme.palette.common.white,
                                    [':hover']: {
                                        color: theme.palette.secondary.main,
                                    },
                                }}
                            >
                                {route.name}
                            </Link>
                        </ListItem>
                    );
                })}
            </Box>
            {/* small copyright text bottom right */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '20px',
                    color: theme.palette.common.white,
                    fontSize: '0.8rem',
                }}
            >
                © {new Date().getFullYear()} {projectVariables.COMPANY_NAME}
            </Box>
            <Icon
                component={Close}
                sx={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    fontSize: '40px',
                    color: theme.palette.common.white,
                }}
                onClick={() => setMobileMenuActive(false)}
            />
        </List>
    );
};
