import type { CollectionConfig } from 'payload';
import { CollectionPermissions } from '../CollectionPermissions.js';
import { CollectionFields } from '../CollectionFields.js';
import { getT } from '../../locales/getT.js';

export const fields: CollectionConfig<'pages'>['fields'] = [
    {
        name: 'slug',
        type: 'text',
        unique: true,
        required: true,
        access: CollectionPermissions.StaticValue,
        defaultValue: '/',
        label: t => getT(t)('collections:pages:fields:slug:label'),
        admin: {
            position: 'sidebar',
            description: t => getT(t)('collections:pages:fields:slug:desc'),
        },
    },
    {
        name: 'label',
        type: 'text',
        required: true,
        unique: true,
        defaultValue: '',
        label: t => getT(t)('collections:pages:fields:label:label'),
        admin: {
            position: 'sidebar',
            description: t => getT(t)('collections:pages:fields:label:desc'),
        },
    },
    {
        name: 'isInNavigation',
        type: 'checkbox',
        defaultValue: false,
        label: t => getT(t)('collections:pages:fields:isInNavigation:label'),
        admin: {
            position: 'sidebar',
            description: t => getT(t)('collections:pages:fields:isInNavigation:desc'),
        },
    },
    {
        name: 'sort',
        type: 'number',
        defaultValue: 0,
        max: 100,
        min: 0,
        label: t => getT(t)('collections:pages:fields:sort:label'),
        admin: {
            position: 'sidebar',
            description: t => getT(t)('collections:pages:fields:sort:desc'),
        },
    },
    {
        name: 'group',
        type: 'text',
        access: CollectionPermissions.StaticValue,
        label: t => getT(t)('collections:pages:fields:group:label'),
        admin: {
            position: 'sidebar',
            description: t => getT(t)('collections:pages:fields:group:desc'),
        },
    },
    {
        type: 'tabs',
        tabs: CollectionFields.getMetaFields(),
    },
];
