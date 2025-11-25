export class URI {
    public static resolve(...paths: Array<string>) {
        return paths
            .map((part, index) => (index === 0 ? part.replace(/\/+$/, '') : part.replace(/^\/+|\/+$/g, '')))
            .filter(Boolean)
            .join('/')
            .replace(/([^:]\/)\/+/g, '$1');
    }

    public static buildQueryString(
        params: Record<string, string | number | boolean | null | undefined | Array<string>> | undefined,
    ): string {
        if (!params || typeof params !== 'object') {
            return '';
        }

        const query = Object.entries(params)
            .filter(([, value]) => value !== null && value !== undefined)
            .flatMap(([key, value]) => {
                if (Array.isArray(value)) {
                    return value.map(v => `${encodeURIComponent(key)}=${encodeURIComponent(v)}`);
                }
                return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
            })
            .join('&');

        return query ? `?${query}` : '';
    }
}
