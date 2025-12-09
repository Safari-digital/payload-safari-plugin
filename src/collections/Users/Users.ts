import type { CollectionConfig } from 'payload';
import { CollectionPermissions } from '../CollectionPermissions.js';
import { CollectionGroup } from '../CollectionGroup.js';
import { getT } from '../../locales/getT.js';

export const Users: CollectionConfig<'users'> = {
    slug: 'users',
    labels: {
        singular: t => getT(t)('collections:users:label-singular'),
        plural: t => getT(t)('collections:users:label-plural'),
    },
    access: CollectionPermissions.Hidden,
    admin: {
        defaultColumns: ['name', 'email'],
        useAsTitle: 'name',
        group: CollectionGroup.Administration.label,
        description: t => getT(t)('collections:users:desc'),
    },
    auth: {
        tokenExpiration: 3 * 60 * 60, // In seconds
        // verify: process.env.NODE_ENV !== 'development', // Email verification
        verify: false,
        maxLoginAttempts: 3,
        lockTime: 600 * 1000,
        loginWithUsername: {
            allowEmailLogin: true,
            requireEmail: true,
        },
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            label: t => getT(t)('collections:users:fields:name:label'),
            admin: {
                description: t => getT(t)('collections:users:fields:name:desc'),
            },
            required: true,
        },
    ],
    timestamps: true,
};
