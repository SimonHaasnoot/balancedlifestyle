import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Container, IconButton, Link, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useIsMobile from '../../hooks/useMobile';
import { Footer } from './Footer';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { HeaderRouteType } from '../../types/HeaderRoute';
import { MobileMenu } from './MobileMenu';
import { StaticImage } from 'gatsby-plugin-image';

export const headerRoutes = [
    { name: 'Home', path: '/' },
    { name: 'Personal training', path: '/personal-training' },
    { name: 'Onze studio', path: '/onze-studio' },
    { name: 'Groepstraining', path: '/groepstraining' },
    { name: 'Leefstijl', path: '/leefstijl' },
    { name: 'Specialisaties', path: '/specialisaties' },
    { name: 'Over mij', path: '/over-sem', isSecondaryLevel: true },
    { name: 'Reviews', path: '/reviews', isSecondaryLevel: true },
    { name: 'Contact', path: '/contact', isSecondaryLevel: true },
] as HeaderRouteType[];

export type LayoutProps = {
    location?: Location;
    disableHeaderTransition?: boolean;
    children?: any;
};

export const Layout: React.FC<LayoutProps> = (props) => {
    const theme = useTheme();
    const { isTabletOrSmaller, isDesktop } = useIsMobile();
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const { atTopOfPage } = useScrollPosition();

    useEffect(() => {
        document.body.style.overflow = mobileMenuActive ? 'hidden' : 'auto';
    }, [mobileMenuActive]);

    useEffect(() => {
        setShowContent(true);
    }, []);

    const isActiveRoute = (route: HeaderRouteType) => {
        if (route.path === '/') return props.location?.pathname === '/';
        return props.location?.pathname?.includes(route.path) ?? false;
    };

    const primaryRoutes = headerRoutes.filter((r) => !r.isSecondaryLevel);
    const secondaryRoutes = headerRoutes.filter((r) => r.isSecondaryLevel);
    const scrolled = !atTopOfPage || props.disableHeaderTransition;

    return (
        <div style={{ display: showContent ? 'block' : 'none' }}>
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
                                        <StaticImage
                                            src="../../images/logo-white-v2.png"
                                            alt="Lifestyle & Personal Training Zeist"
                                            placeholder="blurred"
                                            loading="eager"
                                            layout="fixed"
                                            height={40}
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
                            location={props.location}
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
        </div>
    );
};
