import { revalidateTag } from 'next/cache.js';
import type { CollectionConfig } from 'payload';
import { REVIEW_CACHE_PREFIX } from './Reviews.cache.js';

export const hooks: CollectionConfig<'reviews'>['hooks'] = {
    afterChange: [
        async () => {
            try {
                revalidateTag(REVIEW_CACHE_PREFIX);
            } catch (error) {
                console.error('Error revalidating reviews:', error);
            }
        },
    ],
    afterDelete: [
        async () => {
            try {
                revalidateTag(REVIEW_CACHE_PREFIX);
            } catch (error) {
                console.error('Error during review deletion revalidation:', error);
            }
        },
    ],
};
