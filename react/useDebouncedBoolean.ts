import React from 'react';

/**
 * Returns a debounced boolean value that only switches to false after the specified delay.
 * - When the sourceValue is true, the returned value is immediately set to true.
 * - When the sourceValue is false, a timer starts and after the delay, the returned value is set to false.
 * - If the sourceValue is still false when the timer ends, the debounced starts again.
 * @param sourceValue The boolean value to debounce
 * @param delay The debounce delay in milliseconds
 * @returns The debounced boolean value
 */
export function useDebouncedBoolean(sourceValue: boolean, delay = 200): boolean {
    const [value, setValue] = React.useState(false);

    React.useEffect(() => {
        let active = true;
        let timeout: ReturnType<typeof setTimeout>;

        if (sourceValue) {
            setValue(true);
        } else {
            timeout = setTimeout(() => {
                if (active && !sourceValue) {
                    setValue(false);
                }
            }, delay);
        }

        return () => {
            active = false;
            clearTimeout(timeout);
        };
    }, [sourceValue, delay]);

    return value;
}
