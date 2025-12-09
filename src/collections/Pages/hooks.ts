import type { CollectionConfig } from 'payload';
import { revalidateTag } from 'next/cache.js';
import { NAV_CACHE_KEY, resolvePageKey, SLUGS_CACHE_KEY } from './cache.js';

export const hooks: CollectionConfig<'pages'>['hooks'] = {
    afterChange: [
        async ({ doc, previousDoc }) => {
            try {
                if (doc._status === 'published') {
                    [
                        NAV_CACHE_KEY,
                        SLUGS_CACHE_KEY,
                        resolvePageKey('body', doc.slug),
                        resolvePageKey('metas', doc.slug),
                    ].forEach(revalidateTag);
                }
                if (previousDoc._status === 'published' && doc._status !== 'published') {
                    [
                        NAV_CACHE_KEY,
                        SLUGS_CACHE_KEY,
                        resolvePageKey('body', previousDoc.slug),
                        resolvePageKey('metas', previousDoc.slug),
                    ].forEach(revalidateTag);
                }
            } catch (error) {
                console.error('Error revalidating pages:', error);
            }
        },
    ],
    afterDelete: [
        async ({ doc }) => {
            try {
                [
                    NAV_CACHE_KEY,
                    SLUGS_CACHE_KEY,
                    resolvePageKey('body', doc.slug),
                    resolvePageKey('metas', doc.slug),
                ].forEach(revalidateTag);
            } catch (error) {
                console.error('Error revalidating pages after deletion:', error);
            }
        },
    ],
};
