import { useMediaQuery } from "react-responsive";


const useIsMobile = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTabletOrSmaller = useMediaQuery({ maxWidth: 1023 });

    return {
        isMobile,
        isTabletOrSmaller
    };
};

export default useIsMobile;
