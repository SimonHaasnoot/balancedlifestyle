import { Box, IconButton, Link, useTheme } from '@mui/material';
import { HeaderRouteType } from '../../types/HeaderRoute';
import React, { useCallback, useEffect } from 'react';
import { Close } from '@mui/icons-material';
import { headerRoutes } from './Layout';
import { projectVariables } from '../../project';

type MobileMenuProps = {
    location?: Location;
    mobileMenuActive: boolean;
    setMobileMenuActive: (active: boolean) => void;
};

export const MobileMenu: React.FC<MobileMenuProps> = ({ location, mobileMenuActive, setMobileMenuActive }) => {
    const theme = useTheme();

    const handleClose = useCallback(() => setMobileMenuActive(false), [setMobileMenuActive]);

    useEffect(() => {
        if (!mobileMenuActive) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose();
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [mobileMenuActive, handleClose]);

    return (
        <Box
            component="nav"
            role="dialog"
            aria-modal="true"
            aria-label="Mobiel menu"
            sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 1000,
                visibility: mobileMenuActive ? 'visible' : 'hidden',
                opacity: mobileMenuActive ? 1 : 0,
                background: 'rgba(0, 0, 0, 0.9)',
                transition: 'opacity 0.35s ease-in-out, visibility 0.35s ease-in-out',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            <IconButton
                onClick={handleClose}
                aria-label="Menu sluiten"
                sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    color: theme.palette.common.white,
                }}
            >
                <Close sx={{ fontSize: 40 }} />
            </IconButton>

            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {headerRoutes.map((route) => {
                    const isActive = route.path === location?.pathname;

                    return (
                        <Box component="li" key={route.path} sx={{ lineHeight: 2.5 }}>
                            <Link
                                href={route.path}
                                onClick={handleClose}
                                underline="none"
                                sx={{
                                    color: isActive ? theme.palette.secondary.main : theme.palette.common.white,
                                    fontSize: '1.1rem',
                                    '&:hover': { color: theme.palette.secondary.main },
                                }}
                            >
                                {route.name}
                            </Link>
                        </Box>
                    );
                })}
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    bottom: 20,
                    color: theme.palette.common.white,
                    fontSize: '0.8rem',
                }}
            >
                © {new Date().getFullYear()} {projectVariables.COMPANY_NAME}
            </Box>
        </Box>
    );
};
