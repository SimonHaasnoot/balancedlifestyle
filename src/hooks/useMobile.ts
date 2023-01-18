import useMediaQuery from '@mui/material/useMediaQuery';

const useIsMobile = () => {
    const isMobile = useMediaQuery('(max-width:767px)', { defaultMatches: false });
    const isTabletOrSmaller = useMediaQuery('(max-width:1023px)');
    const isDesktop = useMediaQuery('(min-width:1200px)');

    return {
        isMobile,
        isTabletOrSmaller,
        isDesktop,
    };
};

export default useIsMobile;
