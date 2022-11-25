import { useMediaQuery } from "react-responsive";


const useIsMobile = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTabletOrSmaller = useMediaQuery({ maxWidth: 1023 });
    const isDesktop = useMediaQuery({ minWidth: 1200 });

    return {
        isMobile,
        isTabletOrSmaller,
        isDesktop
    };
};

export default useIsMobile;
