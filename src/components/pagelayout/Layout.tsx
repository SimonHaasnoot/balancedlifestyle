import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Container, IconButton, Link, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useIsMobile from '../../hooks/useMobile';
import { Footer } from './Footer';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { getRouteUrl, headerRoutes, HeaderRoutesEnum } from '../../types/HeaderRoute';
import type { HeaderRouteType } from '../../types/HeaderRoute';
import { MobileMenu } from './MobileMenu';

export type LayoutProps = {
    pathname?: string;
    disableHeaderTransition?: boolean;
    children?: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = (props) => {
    const theme = useTheme();
    const { isTabletOrSmaller, isDesktop } = useIsMobile();
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [currentPath, setCurrentPath] = useState(props.pathname ?? '');
    const { atTopOfPage } = useScrollPosition();

    useEffect(() => {
        document.body.style.overflow = mobileMenuActive ? 'hidden' : 'auto';
    }, [mobileMenuActive]);

    useEffect(() => {
        if (!props.pathname && typeof window !== 'undefined') {
            setCurrentPath(window.location.pathname);
        }
    }, [props.pathname]);

    const isActiveRoute = (route: HeaderRouteType) => {
        if (route.path === '/') return currentPath === '/';
        return currentPath.includes(route.path);
    };

    const primaryRoutes = headerRoutes.filter((r) => !r.isSecondaryLevel);
    const secondaryRoutes = headerRoutes.filter((r) => r.isSecondaryLevel);
    const scrolled = !atTopOfPage || props.disableHeaderTransition;

    return (
        <div>
            <AppBar
                color="transparent"
                position="fixed"
                component="header"
                sx={{
                    transition: 'all 0.2s ease-in-out',
                    border: 0,
                    boxShadow: 'none',
                    background: scrolled ? 'black' : 'transparent',
                }}
            >
                <Container maxWidth="xl">
                    <Box
                        component="nav"
                        aria-label="Hoofdnavigatie"
                        sx={{
                            display: 'flex',
                            justifyContent: isTabletOrSmaller ? 'start' : 'end',
                            alignItems: 'center',
                            height: isTabletOrSmaller ? 'auto' : 60,
                            py: atTopOfPage ? 0 : 1,
                            transition: 'all 0.2s ease-in-out',
                        }}
                    >
                        {!isTabletOrSmaller ? (
                            primaryRoutes.map((route, index) => {
                                const isHome = index === 0;
                                const active = isActiveRoute(route);

                                return isHome ? (
                                    <Link
                                        key={route.path}
                                        href={route.path}
                                        underline="none"
                                        sx={{ mr: 'auto', display: 'flex', alignItems: 'center' }}
                                        aria-label="Home"
                                    >
                                        <img
                                            src="/images/logo-white-v2.png"
                                            alt="Lifestyle & Personal Training Zeist"
                                            height={40}
                                            loading="eager"
                                            style={{ display: 'block' }}
                                        />
                                    </Link>
                                ) : (
                                    <Link
                                        key={route.path}
                                        href={route.path}
                                        underline="none"
                                        sx={{
                                            position: 'relative',
                                            whiteSpace: 'nowrap',
                                            fontWeight: 500,
                                            fontSize: isDesktop ? '1rem' : '0.9rem',
                                            color: active ? theme.palette.secondary.main : theme.palette.common.white,
                                            px: 1.5,
                                            '&:hover': { color: theme.palette.secondary.main },
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                right: 0,
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                width: 2,
                                                height: 10,
                                                background: theme.palette.common.white,
                                            },
                                            '&:last-of-type::after': { display: 'none' },
                                        }}
                                    >
                                        {route.name}
                                    </Link>
                                );
                            })
                        ) : (
                            <IconButton
                                onClick={() => setMobileMenuActive(true)}
                                aria-label="Menu openen"
                                aria-expanded={mobileMenuActive}
                                sx={{ color: '#fff', p: 0.5 }}
                            >
                                <MenuIcon sx={{ fontSize: 40 }} />
                            </IconButton>
                        )}
                    </Box>

                    {isTabletOrSmaller && (
                        <MobileMenu
                            mobileMenuActive={mobileMenuActive}
                            setMobileMenuActive={setMobileMenuActive}
                            pathname={currentPath}
                        />
                    )}
                </Container>

                {!isTabletOrSmaller && (
                    <Box
                        sx={{
                            background: scrolled ? '#5ab7db' : 'transparent',
                            transition: 'all 0.35s ease-in-out',
                        }}
                    >
                        <Container maxWidth="xl">
                            <Box
                                component="nav"
                                aria-label="Secundaire navigatie"
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    py: scrolled ? 1 : 0,
                                    transition: 'all 0.2s ease-in-out',
                                }}
                            >
                                {secondaryRoutes.map((route) => (
                                    <Link
                                        key={route.path}
                                        href={route.path}
                                        underline="none"
                                        sx={{
                                            whiteSpace: 'nowrap',
                                            fontWeight: 500,
                                            fontSize: isDesktop ? '0.85rem' : '0.9rem',
                                            color: theme.palette.common.white,
                                            px: 1.5,
                                            '&:hover': { textDecoration: 'underline' },
                                        }}
                                    >
                                        {route.name}
                                    </Link>
                                ))}
                            </Box>
                        </Container>
                    </Box>
                )}
            </AppBar>

            {props.children}

            <Footer />

            {/* Sticky CTA bar - hidden on contact & bedankt pages */}
            {!currentPath.includes('/contact') && !currentPath.includes('/bedankt') && (
                <Box
                    sx={{
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 1200,
                        background: 'rgba(0, 0, 0, 0.92)',
                        backdropFilter: 'blur(10px)',
                        borderTop: `1px solid rgba(90, 183, 219, 0.2)`,
                        py: 1.5,
                        px: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        transform: scrolled ? 'translateY(0)' : 'translateY(100%)',
                        transition: 'transform 0.3s ease',
                    }}
                >
                    <Box sx={{ color: '#fff', fontSize: isTabletOrSmaller ? '0.8rem' : '0.9rem', fontWeight: 500 }}>
                        Gratis kennismakingsgesprek
                    </Box>
                    <Button
                        variant="contained"
                        size="small"
                        href={getRouteUrl(HeaderRoutesEnum.CONTACT)}
                        sx={{
                            background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, #3a8fb8 100%)`,
                            color: '#fff',
                            fontWeight: 600,
                            px: 3,
                            py: 0.8,
                            fontSize: '0.8rem',
                            whiteSpace: 'nowrap',
                            '&:hover': {
                                boxShadow: `0 4px 15px rgba(90, 183, 219, 0.3)`,
                            },
                        }}
                    >
                        Plan nu in
                    </Button>
                </Box>
            )}
        </div>
    );
};
