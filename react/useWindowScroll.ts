import React from 'react';

export function useWindowScroll() {
    const [hasScrolled, setHasScrolled] = React.useState(false);
    const [scrollY, setScrollY] = React.useState(0);

    React.useEffect(() => {
        const onScroll = () => {
            setHasScrolled(window.scrollY > 0);
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return { hasScrolled, scrollY };
}
