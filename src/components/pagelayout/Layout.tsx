import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Container, Icon, Link, List, ListItem, SvgIconProps, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import useIsMobile from '../../hooks/useMobile';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Footer } from './Footer';
import useScrollPosition from '../../hooks/useScrollPosition';

type HeaderRouteType = {
    name: string;
    path: string;
    activeYAxis?: boolean;
    icon?: (props: SvgIconProps) => JSX.Element;
};

export const headerRoutes = [
    { name: 'Home', path: '#', activeYAxis: 0 },
    { name: 'Visie', path: '#' },
    { name: 'Over mij', path: '#' },
    { name: 'Aanbod', path: '#' },
    { name: 'Contact', path: '#' },
] as HeaderRouteType[];

export const Layout = (props: { children: any }) => {
    const theme = useTheme();
    const { isMobile } = useIsMobile();
    const [mobileMenuActive, setMobileMenuActive] = useState<boolean>(false);
    const [showContent, setShowContent] = useState(false);
    const hasScrolled = useScrollPosition() > 0;

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
                    background: hasScrolled ? 'black' : 'transparent',
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
                                    height: hasScrolled ? '80px' : '100px',
                                    transition: 'all 0.35s ease-in-out',
                                }}
                            >
                                {!isMobile ? (
                                    <>
                                        {headerRoutes.map((route, index) => {
                                            const isActive = false;

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
                                                            color: isActive ? theme.palette.secondary.main : '#ffffff',
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
                                    <Icon
                                        component={MenuIcon}
                                        sx={{ fontSize: '40px', color: theme.palette.primary.main }}
                                        onClick={() => setMobileMenuActive(true)}
                                    />
                                )}
                            </Box>
                            {/* <ListItem sx={{ maxWidth: isMobile ? '180px' : '300px' }}>
                                <Link href="#">
                                    <StaticImage
                                        src="../../images/gatsby-icon.png"
                                        alt="Logo"
                                        height={100}
                                        style={{ position: 'absolute', top: 0, left: 0, borderRadius: '73% 27% 55% 45% / 45% 64% 36% 55% ' }}
                                    />
                                </Link>
                            </ListItem> */}
                        </List>

                        {isMobile && (
                            <List
                                sx={{
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    zIndex: 1000,
                                    maxWidth: mobileMenuActive ? '100vw' : 0,
                                    visibility: mobileMenuActive ? 'visible' : 'hidden',
                                    opacity: mobileMenuActive ? 1 : 0,
                                    background: 'white',
                                    py: mobileMenuActive ? 10 : 0,
                                    px: mobileMenuActive ? 5 : 0,
                                    lineHeight: 2,
                                    transition: 'all 0.35s ease-in-out',
                                }}
                            >
                                <Box position="relative">
                                    {headerRoutes.map((route, index) => {
                                        return (
                                            <ListItem key={index}>
                                                <Link
                                                    component="a"
                                                    onClick={() => setMobileMenuActive(false)}
                                                    underline="none"
                                                    href={`${route.path}`}
                                                    sx={{ display: 'flex', alignItems: 'center' }}
                                                >
                                                    <Icon component={KeyboardArrowRightIcon} sx={{ mr: 1 }} />
                                                    {route.name}
                                                </Link>
                                            </ListItem>
                                        );
                                    })}
                                </Box>
                                <Icon
                                    component={ChevronLeftIcon}
                                    sx={{
                                        position: 'absolute',
                                        top: '20px',
                                        left: '20px',
                                        fontSize: '30px',
                                        borderRadius: '100%',
                                        padding: '5px',
                                        background: theme.palette.secondary.main,
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
