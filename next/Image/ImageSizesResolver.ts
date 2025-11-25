export type CssSizeValue = `${number}${'px' | 'rem' | 'em' | '%' | 'vw' | 'vh'}`;
export type BreakpointValue = keyof typeof ImageSizesResolver.breakpoints;
export type ImageSizes = [number | CssSizeValue | BreakpointValue, number | CssSizeValue][];

export class ImageSizesResolver {
    public static readonly breakpoints = {
        xl: 1440,
        lg: 1024,
        md: 768,
        sm: 640,
        xs: 480,
    };

    public static resolve(): string {
        return [
            ...Object.values(ImageSizesResolver.breakpoints)
                .reverse()
                .map(v => `(max-width: ${v}px) ${v}px`),
            '100vw',
        ].join(', ');
    }
}
