import React from 'react';
import { useDebounce } from './useDebounce';

export function useDebouncedState<T>(initialValue: T, delay = 200): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [value, setValue] = React.useState<T>(initialValue);
    const debouncedValue = useDebounce(value, delay);

    return [debouncedValue, setValue];
}
