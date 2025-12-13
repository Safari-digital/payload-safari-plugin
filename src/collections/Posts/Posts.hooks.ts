import type { CollectionConfig } from 'payload';
import { revalidateTag } from 'next/cache.js';
import {
    POST_CACHE_PREFIX,
    POST_LATEST_CACHE_KEY,
    POST_SEARCH_CACHE_KEY,
    POST_SLUGS_CACHE_KEY,
    POST_META_CACHE_KEY,
    POST_RELATED_CACHE_KEY,
} from './Posts.cache.js';
import { StringUtils } from '../../utils/StringUtils.js';
import type { Post } from '../types.js';

function buildKey(prefix: string, key: string) {
    return `${prefix}:${StringUtils.removeLeadingSlash(key)}`;
}

function revalidatePostTags(doc: Post) {
    [
        // Latest, slugs, and search are always revalidated since they can impact multiple pages
        POST_LATEST_CACHE_KEY,
        POST_SLUGS_CACHE_KEY,
        POST_SEARCH_CACHE_KEY,
        buildKey(POST_CACHE_PREFIX, doc.slug),
        buildKey(POST_META_CACHE_KEY, doc.slug),
        buildKey(POST_RELATED_CACHE_KEY, doc.id),
    ].forEach(revalidateTag);
}

export const hooks: CollectionConfig<'posts'>['hooks'] = {
    afterChange: [
        async ({ doc, previousDoc }) => {
            try {
                if (doc._status === 'published') {
                    revalidatePostTags(doc);
                }
                if (previousDoc._status === 'published' && doc._status !== 'published') {
                    revalidatePostTags(previousDoc);
                }
            } catch (error) {
                console.error('Error during post change revalidation:', error);
            }
            return doc;
        },
    ],
    afterDelete: [
        async ({ doc }) => {
            try {
                revalidatePostTags(doc);
            } catch (error) {
                console.error('Error during post deletion revalidation:', error);
            }
            return doc;
        },
    ],
};
