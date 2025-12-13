import type { CollectionConfig } from 'payload';
import { revalidateTag } from 'next/cache.js';
import { PAGES_NAV_CACHE_KEY, resolvePageKey, PAGES_SLUGS_CACHE_KEY } from './Pages.cache.js';

function revalidatePageTags(doc: any) {
    [
        // Navigation and slugs are always revalidated since they can impact multiple pages
        PAGES_NAV_CACHE_KEY,
        PAGES_SLUGS_CACHE_KEY,
        resolvePageKey('body', doc.slug),
        resolvePageKey('metas', doc.slug),
    ].forEach(revalidateTag);
}

export const hooks: CollectionConfig<'pages'>['hooks'] = {
    afterChange: [
        async ({ doc, previousDoc }) => {
            try {
                if (doc._status === 'published') {
                    revalidatePageTags(doc);
                }
                if (previousDoc._status === 'published' && doc._status !== 'published') {
                    revalidatePageTags(previousDoc);
                }
            } catch (error) {
                console.error('Error revalidating pages:', error);
            }
        },
    ],
    afterDelete: [
        async ({ doc }) => {
            try {
                revalidatePageTags(doc);
            } catch (error) {
                console.error('Error revalidating pages after deletion:', error);
            }
        },
    ],
};
