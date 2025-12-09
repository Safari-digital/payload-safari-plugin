import type { Field } from 'payload';
import { getT } from '../locales/getT.js';

export class CollectionFields {
    /**
     * Returns an array of fields related to SEO meta tags, including general page metas and Open Graph metas. This method is useful for quickly adding SEO-related fields to a collection schema in Payload CMS.
     */
    public static readonly getMetaFields = () => [
        {
            // @ts-expect-error
            label: CollectionFields.pageMetas.label,
            fields: [CollectionFields.pageMetas],
        },
        {
            // @ts-expect-error
            label: CollectionFields.pageMetaOpenGraph.label,
            fields: [CollectionFields.pageMetaOpenGraph],
        },
    ];

    /**
     * A group field containing meta tags for SEO purposes, including meta title and meta description. These fields help improve the visibility and ranking of web pages in search engine results.
     */
    public static readonly pageMetas: Field = {
        name: 'metaPage',
        type: 'group',
        label: t => getT(t)('collections:fields:meta-page:label'),
        admin: { description: t => getT(t)('collections:fields:meta-page:desc') },
        fields: [
            {
                name: 'metaTitle',
                type: 'text',
                required: true,
                defaultValue: 'Safari Digital: Votre Boussole dans la jungle du numérique',
                maxLength: 60,
                label: t => getT(t)('collections:fields:meta-page:fields:meta-title:label'),
                admin: {
                    description: t => getT(t)('collections:fields:meta-page:fields:meta-title:desc'),
                    placeholder: 'safaridigital.fr',
                },
            },
            {
                name: 'metaDescription',
                type: 'textarea',
                required: true,
                defaultValue:
                    'Safari Digital est une agence de marketing digital dédiée à renforcer votre présence en ligne.',
                maxLength: 160,
                label: t => getT(t)('collections:fields:meta-page:fields:meta-description:label'),
                admin: {
                    description: t => getT(t)('collections:fields:meta-page:fields:meta-description:desc'),
                },
            },
        ],
    };

    /**
     * A group field containing Open Graph meta tags, which are used by social media platforms to create rich link previews when pages are shared. This includes fields for the Open Graph title, description, image, and type.
     */
    public static readonly pageMetaOpenGraph: Field = {
        name: 'metaOg',
        type: 'group',
        label: t => getT(t)('collections:fields:meta-og:label'),
        admin: { description: t => getT(t)('collections:fields:meta-og:desc') },
        fields: [
            {
                name: 'ogTitle',
                type: 'text',
                required: false,
                defaultValue: 'Safari Digital: Votre Boussole dans la jungle du numérique',
                maxLength: 60,
                label: t => getT(t)('collections:fields:meta-page:fields:meta-title:label'),
                admin: {
                    description: t => getT(t)('collections:fields:meta-page:fields:meta-title:desc'),
                    placeholder: 'safaridigital.fr',
                },
            },
            {
                name: 'ogDescription',
                type: 'textarea',
                required: false,
                defaultValue:
                    'Safari Digital est une agence de marketing digital dédiée à renforcer votre présence en ligne.',
                maxLength: 160,
                label: t => getT(t)('collections:fields:meta-page:fields:meta-description:label'),
                admin: {
                    description: t => getT(t)('collections:fields:meta-page:fields:meta-description:desc'),
                },
            },
            {
                name: 'ogImage',
                type: 'upload',
                relationTo: 'media',
                required: false,
                label: t => getT(t)('collections:fields:meta-og:fields:og-image:label'),
                admin: { description: t => getT(t)('collections:fields:meta-og:fields:og-image:desc') },
            },
            {
                name: 'ogType',
                type: 'select',
                options: (['website', 'article', 'profile', 'book', 'music', 'video'] as const).map(value => ({
                    label: t => getT(t)(`collections:fields:meta-og:fields:og-type:options:${value}`),
                    value,
                })),
                required: true,
                defaultValue: 'website',
                label: t => getT(t)('collections:fields:meta-og:fields:og-type:label'),
                admin: { description: t => getT(t)('collections:fields:meta-og:fields:og-type:desc') },
            },
        ],
    };
}
