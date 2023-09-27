import { useState, useEffect } from 'react';
import _ from 'lodash';

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const atTopOfPage = scrollPosition <= 0;

    const isClient = typeof window !== 'undefined';

    const addWindowScrollListener = () => {
        window.addEventListener('scroll', _.debounce(handleScroll, 100));
    };

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        if (isClient) {
            setScrollPosition(window.scrollY);

            addWindowScrollListener();
        }

    }, []);

    return {
        scrollPosition,
        atTopOfPage
    }
}
