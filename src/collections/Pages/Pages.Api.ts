import { getPayload, type BasePayload, type SanitizedConfig } from 'payload';
import { NextSSRRoute } from '../../next/NextSSRRoute.js';
import { cachedQuery } from '../cachedQuery.js';
import { PAGES_BODY_CACHE_KEY, PAGES_META_CACHE_KEY, resolvePageKey } from './Pages.cache.js';
import type { Page } from '../types.js';

export class PagesApi {
    private config: SanitizedConfig;

    constructor({ config }: { config: SanitizedConfig }) {
        this.config = config;
    }

    public async getPage(slug: string, draft: boolean) {
        const func = async (payload: BasePayload) => {
            const result = (
                await payload.find({
                    collection: 'pages',
                    limit: 1,
                    draft,
                    overrideAccess: draft,
                    where: {
                        slug: { equals: slug },
                        ...(draft ? {} : { _status: { equals: 'published' } }),
                    },
                })
            ).docs?.[0];
            return result
                ? {
                      id: result.id as string,
                      slug: result.slug as string,
                      view: '',
                      updatedAt: result.updatedAt as string,
                  }
                : null;
        };

        if (draft) {
            const payload = await getPayload({ config: this.config });
            return await func(payload);
        }

        return await cachedQuery(this.config, func, resolvePageKey('body', slug), PAGES_BODY_CACHE_KEY);
    }

    public async getPageMetas() {
        const curentRoute = await NextSSRRoute.getNextRoute();
        return await cachedQuery(
            this.config,
            async payload => {
                const result = (
                    await payload.find({
                        collection: 'pages',
                        draft: false,
                        overrideAccess: false,
                        where: {
                            slug: { equals: curentRoute.path },
                        },
                        select: {
                            slug: true,
                            metaPage: { metaTitle: true, metaDescription: true },
                            metaOg: {
                                ogTitle: true,
                                ogDescription: true,
                                ogImage: true,
                                ogType: true,
                            },
                        },
                    })
                ).docs[0] as Pick<Page, 'slug' | 'metaPage' | 'metaOg'>;
                return {
                    slug: result.slug,
                    title: result.metaPage.metaTitle,
                    description: result.metaPage.metaDescription,
                    openGraph: {
                        title: result.metaOg.ogTitle ?? result.metaPage.metaTitle,
                        description: result.metaOg.ogDescription ?? result.metaPage.metaDescription,
                        image: result.metaOg.ogImage,
                        type: result.metaOg.ogType,
                    },
                };
            },
            resolvePageKey('metas', curentRoute.path),
            PAGES_META_CACHE_KEY,
        );
    }
}
