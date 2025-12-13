import type { CollectionConfig } from 'payload';
import { unstable_cache } from 'next/cache.js';
import { POST_SEARCH_CACHE_KEY } from './Posts.cache.js';
import type { PostCardDto } from './dto/PostCardDto.js';
import type { Media } from '../types.js';

export const endpoints: CollectionConfig<'posts'>['endpoints'] = [
    {
        path: '/search',
        method: 'get',
        handler: async req => {
            const payload = req.payload;
            const args = (() => {
                const query = req.query as { [key: string]: string | string[] | undefined };
                let limit = (query.limit ? parseInt(query.limit as string, 10) : undefined) ?? 10;
                limit = limit > 100 ? 100 : limit;
                limit = limit < 1 ? 1 : limit;

                return {
                    page: query.page ? parseInt(query.page as string, 10) : 1,
                    search: query.search ? (query.search as string) : undefined,
                    limit,
                };
            })();

            const key = `${POST_SEARCH_CACHE_KEY}:page:${args.page}:limit:${args.limit}${args.search ? `:query:${args.search}` : ''}`;
            const result = await unstable_cache(
                async () => {
                    const result = await payload.find({
                        collection: 'posts',
                        draft: false,
                        limit: args.limit,
                        pagination: true,
                        page: args.page,
                        overrideAccess: false,
                        select: {
                            jambon: true,
                            title: true,
                            description: true,
                            slug: true,
                            publicPublishDate: true,
                            publicUpdateDate: true,
                            tags: true,
                            metaPage: true,
                            heroImage: true,
                        },
                        sort: ['-publicPublishDate'],
                        ...(args.search ? { where: { title: { contains: args.search } } } : {}),
                    });
                    return {
                        posts: result.docs.map(
                            ({ heroImage, publicPublishDate, publicUpdateDate, ...post }): PostCardDto => ({
                                ...post,
                                //@ts-expect-error
                                publishedAt: publicPublishDate ?? '',
                                //@ts-expect-error
                                updatedAt: publicUpdateDate ?? '',
                                hero: {
                                    src: (heroImage as Media).url ?? '',
                                    alt: (heroImage as Media).alt ?? '',
                                },
                            }),
                        ),
                        total: result.totalDocs,
                    };
                },
                [POST_SEARCH_CACHE_KEY, key],
                {
                    tags: [POST_SEARCH_CACHE_KEY],
                    revalidate: false,
                },
            )();
            return Response.json(result);
        },
    },
];
