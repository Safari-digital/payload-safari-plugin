import { StringUtils } from '../../utils/StringUtils.js';

export const PAGES_CACHE_PREFIX = 'pages';
export const PAGES_BODY_CACHE_KEY = `${PAGES_CACHE_PREFIX}:body`;
export const PAGES_META_CACHE_KEY = `${PAGES_CACHE_PREFIX}:metas`;
export const PAGES_NAV_CACHE_KEY = `${PAGES_CACHE_PREFIX}:navigation`;
export const PAGES_SLUGS_CACHE_KEY = `${PAGES_CACHE_PREFIX}:slugs`;

export function resolvePageKey(cache: 'body' | 'metas', path: string | undefined | null): string {
    let slugKey = StringUtils.removeLeadingSlash(path ?? '');
    if (slugKey === '') slugKey = 'home';
    return `${PAGES_CACHE_PREFIX}:${cache}:${slugKey}`;
}
