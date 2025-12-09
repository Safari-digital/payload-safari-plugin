export const CACHE_PREFIX = 'pages';
export const NAV_CACHE_KEY = `${CACHE_PREFIX}:navigation`;
export const SLUGS_CACHE_KEY = `${CACHE_PREFIX}:slugs`;

export function resolvePageKey(cache: 'body' | 'metas', path: string | undefined | null): string {
    let slugKey = (path ?? '').replace(/^\//, '');
    if (slugKey === '') slugKey = 'home';
    return `${CACHE_PREFIX}:${cache}:${slugKey}`;
}
