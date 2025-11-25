export type TimeUnit = 'ms' | 'sec' | 'min' | 'hour' | 'day';

export class TimeResolver {
    public static toMs(time: `${number}${TimeUnit}`): number {
        const match = time.match(/^(\d+)(ms|sec|min|hour|day)$/);
        if (!match) {
            throw new Error(`Invalid time format: ${time}`);
        }

        const value = parseInt(match[1], 10);
        const unit = match[2] as TimeUnit;

        switch (unit) {
            case 'ms':
                return value;
            case 'sec':
                return value * 1000;
            case 'min':
                return value * 60 * 1000;
            case 'hour':
                return value * 60 * 60 * 1000;
            case 'day':
                return value * 24 * 60 * 60 * 1000;
        }
    }
}
