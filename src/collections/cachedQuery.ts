import { unstable_cache } from 'next/cache.js';
import type { SanitizedConfig } from 'payload';
import { type BasePayload, getPayload } from 'payload';

export async function cachedQuery<T>(
    config: SanitizedConfig,
    queryFn: (payload: BasePayload) => Promise<T>,
    ...keys: string[]
): Promise<T> {
    if (keys.length === 0) {
        throw new Error('cachedQuery: At least one cache key must be provided');
    }

    return await unstable_cache(
        async () => {
            const payload = await getPayload({ config });
            return await queryFn(payload);
        },
        [keys[0]],
        { tags: keys, revalidate: false },
    )();
}
