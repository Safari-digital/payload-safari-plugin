import type { CollectionConfig } from 'payload';
import { editor } from './Posts.editor.js';
import { CollectionFields } from '../CollectionFields.js';
import { getT } from '../../locales/getT.js';

export const fields: CollectionConfig<'posts'>['fields'] = [
    {
        name: 'slug',
        type: 'text',
        validate: (value: string | undefined | null) =>
            /^\/[a-z0-9_-]+$/.test(value ?? '') ||
            'Slug must start with / and only contain lowercase letters, numbers, hyphens, and underscores.',
        required: true,
        unique: true,
        label: t => getT(t)('collections:posts:fields:slug:label'),
        admin: {
            position: 'sidebar',
            description: t => getT(t)('collections:posts:fields:slug:desc'),
        },
    },
    {
        name: 'title',
        type: 'text',
        label: t => getT(t)('collections:posts:fields:title:label'),
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 128,
        admin: {
            position: 'sidebar',
            description: t => getT(t)('collections:posts:fields:title:desc'),
        },
    },
    {
        name: 'description',
        type: 'textarea',
        label: t => getT(t)('collections:posts:fields:description:label'),
        required: true,
        minLength: 16,
        maxLength: 216,
        admin: {
            position: 'sidebar',
            description: t => getT(t)('collections:posts:fields:description:desc'),
        },
    },
    {
        name: 'publicPublishDate',
        type: 'date',
        label: t => getT(t)('collections:posts:fields:publicPublishDate:label'),
        required: true,
        admin: {
            position: 'sidebar',
            description: t => getT(t)('collections:posts:fields:publicPublishDate:desc'),
        },
    },
    {
        name: 'publicUpdateDate',
        type: 'date',
        label: t => getT(t)('collections:posts:fields:publicUpdateDate:label'),
        required: false,
        admin: {
            position: 'sidebar',
            description: t => getT(t)('collections:posts:fields:publicUpdateDate:desc'),
        },
    },
    {
        name: 'relatedPosts',
        type: 'relationship',
        label: t => getT(t)('collections:posts:fields:relatedPosts:label'),
        admin: {
            position: 'sidebar',
            description: t => getT(t)('collections:posts:fields:relatedPosts:desc'),
        },
        filterOptions: ({ id }) => ({ id: { not_in: [id] } }),
        hasMany: true,
        relationTo: 'posts',
    },
    {
        name: 'tags',
        type: 'relationship',
        label: t => getT(t)('collections:posts:fields:tags:label'),
        relationTo: 'tags',
        admin: { position: 'sidebar', description: t => getT(t)('collections:posts:fields:tags:desc') },
        hasMany: true,
        maxRows: 3,
    },
    {
        type: 'tabs',
        tabs: [
            {
                label: t => getT(t)('collections:posts:tab:post'),
                fields: [
                    {
                        name: 'heroImage',
                        type: 'upload',
                        required: true,
                        relationTo: 'media',
                        label: t => getT(t)('collections:posts:fields:heroImage:label'),
                        admin: { description: t => getT(t)('collections:posts:fields:heroImage:desc') },
                    },
                    {
                        label: t => getT(t)('collections:posts:fields:content:label'),
                        admin: { description: t => getT(t)('collections:posts:fields:content:desc') },
                        name: 'content',
                        type: 'richText',
                        required: true,
                        editor,
                    },
                ],
            },
            ...CollectionFields.getMetaFields(),
        ],
    },
];
