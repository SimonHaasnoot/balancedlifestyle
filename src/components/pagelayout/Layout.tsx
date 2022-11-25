import { Close } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Container, Icon, Link, List, ListItem, SvgIconProps, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useIsMobile from '../../hooks/useMobile';
import { Footer } from './Footer';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { HeaderRoutesEnum, HeaderRouteType } from '../../types/HeaderRoute';

export const headerRoutes = [
    { name: 'Home', path: '/' },
    { name: 'Balanced Lifestyle', path: '/balanced-lifestyle' },
    { name: 'Online coaching', path: '/online-coaching' },
    { name: 'Pakketten', path: '/pakketten' },
    { name: 'Personal training', path: '/personal-training' },
    // { name: 'Blogs', path: '/blogs' },
    { name: 'Goed vlees', path: '/vlees' },
    { name: 'Over mij', path: '/over-mij' },
    { name: 'Contact', path: '/contact' },
] as HeaderRouteType[];

export type LayoutProps = {
    location?: Location;
    disableHeaderTransition?: boolean;
    children?: any;
};

export const Layout: React.FC<LayoutProps> = (props) => {
    const theme = useTheme();
    const { isTabletOrSmaller, isDesktop } = useIsMobile();
    const [mobileMenuActive, setMobileMenuActive] = useState<boolean>(false);
    const [showContent, setShowContent] = useState(false);
    const { atTopOfPage } = useScrollPosition();

    useEffect(() => {
        document.body.style.overflow = mobileMenuActive ? 'hidden' : 'auto';
    }, [mobileMenuActive]);

    useEffect(() => {
        //Otherwise SSR will cause layoutshift
        setShowContent(true);
    }, []);

    return showContent ? (
        <>
            <AppBar
                color="transparent"
                position="fixed"
                sx={{
                    visibility: 'visible',
                    opacity: 1,
                    transition: 'all 0.2s ease-in-out',
                    border: 0,
                    boxShadow: 'none',
                    background: props.disableHeaderTransition ? 'black' : !atTopOfPage ? 'black' : 'transparent',
                }}
            >
                <Box>
                    <Container maxWidth="lg">
                        <List sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Box
                                sx={{
                                    marginRight: 'auto',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: isTabletOrSmaller ? 'auto' : !atTopOfPage ? '80px' : '100px',
                                    transition: 'all 0.35s ease-in-out',
                                }}
                            >
                                {!isTabletOrSmaller ? (
                                    <>
                                        {headerRoutes.map((route, index) => {
                                            const isActive = route.path.replace('#', '') === props.location?.pathname;

                                            return (
                                                <ListItem key={index}>
                                                    <Link
                                                        component="a"
                                                        underline="none"
                                                        href={`${route.path}`}
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            whiteSpace: 'nowrap',
                                                            fontWeight: 500,
                                                            fontSize: isDesktop ? 'inherit' : '0.9rem',
                                                            color: isActive ? theme.palette.secondary.main : theme.palette.common.white,
                                                            [':hover']: {
                                                                color: theme.palette.secondary.main,
                                                            },
                                                        }}
                                                    >
                                                        {route.icon && <Icon component={route.icon} sx={{ marginRight: 1 }} />}
                                                        {route.name}
                                                    </Link>
                                                </ListItem>
                                            );
                                        })}
                                    </>
                                ) : (
                                    <Box sx={{ display: 'flex', flexDirection: 'column', color: '#ffffff' }}>
                                        <Icon component={MenuIcon} sx={{ fontSize: '40px' }} onClick={() => setMobileMenuActive(true)} />
                                        <small>Menu</small>
                                    </Box>
                                )}
                            </Box>
                        </List>

                        {isTabletOrSmaller && (
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
                                    {headerRoutes.map((route, index) => {
                                        const isActive = route.path.replace('#', '') === props.location?.pathname;

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
                        )}
                    </Container>
                </Box>
            </AppBar>

            {props.children}

            <Footer />
        </>
    ) : null;
};
