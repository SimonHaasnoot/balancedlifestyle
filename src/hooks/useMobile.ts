import useMediaQuery from '@mui/material/useMediaQuery';

const useIsMobile = () => {
    const isMobile = useMediaQuery('(max-width:767px)', { defaultMatches: false });
    const isTabletOrSmaller = useMediaQuery('(max-width:1023px)', { defaultMatches: false });
    const isDesktop = useMediaQuery('(min-width:1200px)', { defaultMatches: true });

    return {
        isMobile,
        isTabletOrSmaller,
        isDesktop,
    };
};

export default useIsMobile;
