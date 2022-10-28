import { useState, useEffect } from 'react';
import _ from 'lodash';

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const atTopOfPage = scrollPosition <= 0;

    const isClient = typeof window !== 'undefined';

    const addWindowScrollListener = () => {
        window.addEventListener('scroll', _.debounce(handleScroll, 50));
    };

    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
    };

    useEffect(() => {
        console.log('useScrollPosition: useEffect');

    }, [scrollPosition]);

    useEffect(() => {
        if (isClient) {
            setScrollPosition(window.pageYOffset);

            addWindowScrollListener();
        }

    }, []);

    return {
        scrollPosition,
        atTopOfPage
    }
}
