import type { CollectionConfig } from 'payload';
import { endpoints } from './endpoints.js';
import { CollectionPermissions } from '../CollectionPermissions.js';
import { CollectionGroup } from '../CollectionGroup.js';
import { getT } from '../../locales/getT.js';

export const ContactRequests: CollectionConfig<'contact-requests'> = {
    slug: 'contact-requests',
    labels: {
        singular: t => getT(t)('collections:contact:label-singular'),
        plural: t => getT(t)('collections:contact:label-plural'),
    },
    access: CollectionPermissions.ReadOnlyAdmin,
    admin: {
        defaultColumns: ['name', 'surname', 'email', 'createdAt'],
        useAsTitle: 'name',
        group: CollectionGroup.Administration.label,
        description: t => getT(t)('collections:contact:desc'),
    },
    timestamps: true,
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            label: t => getT(t)('collections:contact:fields:name:label'),
            minLength: 1,
            maxLength: 64,
        },
        {
            name: 'surname',
            type: 'text',
            required: true,
            label: t => getT(t)('collections:contact:fields:surname:label'),
            minLength: 1,
            maxLength: 64,
        },
        {
            name: 'company',
            type: 'text',
            label: t => getT(t)('collections:contact:fields:company:label'),
            minLength: 1,
            maxLength: 64,
        },
        {
            name: 'email',
            type: 'email',
            label: t => getT(t)('collections:contact:fields:email:label'),
            required: true,
        },
        {
            name: 'message',
            type: 'textarea',
            label: t => getT(t)('collections:contact:fields:message:label'),
            required: true,
            minLength: 100,
            maxLength: 3000,
        },
    ],
    endpoints,
};
