import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Container, Icon, Link, List, ListItem, useTheme } from '@mui/material';
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
    { name: 'Voeding', path: '/voeding' },
    { name: 'Specialisaties', path: '/specialisaties' },
    // { name: 'Balanced Lifestyle', path: '/balanced-lifestyle' },
    // { name: 'Pakketten', path: '/pakketten' },
    // { name: 'Workshops', path: '/workshops' },
    // { name: 'Blogs', path: '/blogs', isSecondaryLevel: true },
    // { name: 'Goed vlees', path: '/vlees', isSecondaryLevel: true },
    { name: 'Over mij', path: '/over-sem', isSecondaryLevel: true },
    { name: 'Reviews', path: '/reviews', isSecondaryLevel: true },
    { name: 'Contact', path: '/contact', isSecondaryLevel: true },
    { name: 'Over Sem', path: '/over-sem', notVisible: true },
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

    const getIsActiveRoute = (route: HeaderRouteType) => {
        let isActive = false;

        if (route.path === '/' && props.location?.pathname === '/') {
            isActive = true;
        }

        if (route.path !== '/' && props.location?.pathname?.includes(route.path)) {
            isActive = true;
        }

        return isActive;
    };

    useEffect(() => {
        if (atTopOfPage) {
            window.dispatchEvent(new Event('resize'));
        }
    }, [atTopOfPage]);

    return (
        <div style={{ display: showContent ? 'block' : 'none' }}>
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
                <Container maxWidth="xl">
                    <List sx={{ display: 'flex', justifyContent: 'flex-start', pb: atTopOfPage ? 0 : '8px', transition: 'all 0.2s ease-in-out' }}>
                        <Box
                            sx={{
                                marginLeft: 'auto',
                                width: '100%',
                                marginRight: 'auto',
                                justifyContent: isTabletOrSmaller ? 'start' : 'end',
                                display: 'flex',
                                alignItems: 'center',
                                height: isTabletOrSmaller ? 'auto' : '60px',
                                transition: 'all 0.2s ease-in-out',
                            }}
                        >
                            {!isTabletOrSmaller ? (
                                <>
                                    {headerRoutes
                                        .filter((x) => !x.isSecondaryLevel && !x.notVisible)
                                        .map((route, index) => {
                                            let isActive = getIsActiveRoute(route);
                                            const isFirst = index === 0;
                                            const isLast = route.name === 'Pakketten';

                                            return (
                                                <ListItem
                                                    key={index}
                                                    sx={{
                                                        width: 'auto',
                                                        marginRight: isFirst ? 'auto' : 0,
                                                        mb: isFirst ? '-10px' : 0,
                                                        pr: isLast ? 0 : 2,
                                                        [':after']:
                                                            !isFirst && !isLast
                                                                ? {
                                                                      content: '""',
                                                                      position: 'absolute',
                                                                      right: 0,
                                                                      top: '40%',
                                                                      width: '2px',
                                                                      height: '10px',
                                                                      background: theme.palette.common.white,
                                                                  }
                                                                : {},
                                                    }}
                                                >
                                                    <Link
                                                        component="a"
                                                        underline="none"
                                                        href={`${route.path}`}
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            whiteSpace: 'nowrap',
                                                            fontWeight: 500,
                                                            fontSize: isDesktop ? '1rem' : '0.9rem',
                                                            color: isActive ? theme.palette.secondary.main : theme.palette.common.white,
                                                            [':hover']: {
                                                                color: theme.palette.secondary.main,
                                                            },
                                                        }}
                                                    >
                                                        {!isFirst ? (
                                                            <>
                                                                {route.icon && <Icon component={route.icon} sx={{ marginRight: 1 }} />}
                                                                {route.name}
                                                            </>
                                                        ) : (
                                                            <StaticImage
                                                                src="../../images/logo-white.png"
                                                                alt="Lifestyle & Personal Training Zeist"
                                                                placeholder="blurred"
                                                                loading="eager"
                                                                layout="fixed"
                                                                height={40}
                                                                style={{
                                                                    visibility: 'hidden',
                                                                }}
                                                                // style={{ marginBottom: '-20px' }}
                                                            />
                                                        )}
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
                        <MobileMenu
                            theme={theme}
                            mobileMenuActive={mobileMenuActive}
                            setMobileMenuActive={setMobileMenuActive}
                            location={props.location}
                        />
                    )}
                </Container>

                <Box
                    sx={{
                        background: atTopOfPage ? 'transparent' : '#5ab7db',
                        transition: 'all 0.35s ease-in-out',
                    }}
                >
                    <Container maxWidth="xl">
                        {!isTabletOrSmaller && (
                            <>
                                <List
                                    sx={{ display: 'flex', justifyContent: 'end', pt: atTopOfPage ? 0 : '8px', transition: 'all 0.2s ease-in-out' }}
                                >
                                    {headerRoutes
                                        .filter((x) => x.isSecondaryLevel && !x.notVisible)
                                        .map((route, index) => {
                                            const isLast = route.name === 'Contact';

                                            return (
                                                <ListItem key={index} sx={{ width: 'inherit', pr: isLast ? 0 : 2 }}>
                                                    <Link
                                                        component="a"
                                                        underline="none"
                                                        href={`${route.path}`}
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            whiteSpace: 'nowrap',
                                                            fontWeight: 500,
                                                            fontSize: isDesktop ? '0.85rem' : '0.9rem',
                                                            color: theme.palette.common.white,
                                                            [':hover']: {
                                                                color: theme.palette.common.white,
                                                                textDecoration: 'underline',
                                                            },
                                                        }}
                                                    >
                                                        {route.name}
                                                    </Link>
                                                </ListItem>
                                            );
                                        })}
                                </List>
                            </>
                        )}
                    </Container>
                </Box>
            </AppBar>

            {props.children}

            <Footer />
        </div>
    );
};
