import type { CollectionConfig } from 'payload';
import { getT } from '../../locales/getT.js';

export const fields: CollectionConfig<'reviews'>['fields'] = [
    {
        name: 'name',
        type: 'text',
        label: t => getT(t)('collections:reviews:fields:name:label'),
        required: true,
        admin: {
            description: t => getT(t)('collections:reviews:fields:name:desc'),
        },
    },
    {
        name: 'title',
        type: 'text',
        label: t => getT(t)('collections:reviews:fields:title:label'),
        required: true,
        admin: {
            description: t => getT(t)('collections:reviews:fields:title:desc'),
        },
    },
    {
        name: 'content',
        type: 'text',
        label: t => getT(t)('collections:reviews:fields:content:label'),
        required: true,
        admin: {
            description: t => getT(t)('collections:reviews:fields:content:desc'),
        },
        maxLength: 132,
        minLength: 40,
    },
    {
        name: 'picture',
        type: 'upload',
        label: t => getT(t)('collections:reviews:fields:picture:label'),
        required: true,
        admin: {
            description: t => getT(t)('collections:reviews:fields:picture:desc'),
        },
        relationTo: 'media',
    },
];
