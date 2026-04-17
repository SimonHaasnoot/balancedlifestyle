import { useState, useEffect, useCallback } from 'react';

export const useScrollPosition = () => {
    const [atTopOfPage, setAtTopOfPage] = useState(true);

    const handleScroll = useCallback(() => {
        setAtTopOfPage(window.scrollY <= 0);
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return { atTopOfPage };
};
