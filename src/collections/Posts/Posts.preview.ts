import type { GeneratePreviewURL, LivePreviewConfig, PayloadRequest, CollectionSlug } from 'payload';

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
    posts: '/blog',
};

interface Props {
    collection: keyof typeof collectionPrefixMap;
    slug: string;
    req: PayloadRequest;
}

const generatePreviewPath = ({ collection, slug }: Props) =>
    `/next/preview?${new URLSearchParams({
        slug,
        collection,
        path: `${collectionPrefixMap[collection]}/${slug}`,
        previewSecret: process.env.PREVIEW_SECRET || '',
    }).toString()}`;

export const preview: { livePreview: LivePreviewConfig; preview: GeneratePreviewURL } = {
    livePreview: {
        url: ({ data, req }) =>
            generatePreviewPath({
                slug: typeof data?.slug === 'string' ? data.slug : '',
                collection: 'posts',
                req,
            }),
    },
    preview: (data, { req }) =>
        generatePreviewPath({
            slug: typeof data?.slug === 'string' ? data.slug : '',
            collection: 'posts',
            req,
        }),
};
