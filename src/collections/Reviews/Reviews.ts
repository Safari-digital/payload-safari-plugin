import type { CollectionConfig } from 'payload';
import { hooks } from './Reviews.hooks.js';
import { fields } from './Reviews.fields.js';
import { CollectionPermissions } from '../CollectionPermissions.js';
import { CollectionGroup } from '../CollectionGroup.js';
import { getT } from '../../locales/getT.js';

export const Reviews: CollectionConfig<'reviews'> = {
    slug: 'reviews',
    labels: {
        singular: t => getT(t)('collections:reviews:label-singular'),
        plural: t => getT(t)('collections:reviews:label-plural'),
    },
    access: CollectionPermissions.ReadOnlyPublished,
    admin: {
        group: CollectionGroup.Content.label,
        defaultColumns: ['name', 'content', '_status', 'updatedAt'],
        useAsTitle: 'name',
    },
    timestamps: true,
    versions: {
        drafts: { autosave: false },
        maxPerDoc: 100,
    },
    fields,
    hooks,
};
