import type { CollectionConfig } from 'payload';
import { fields } from './Posts.fields.js';
import { hooks } from './Posts.hooks.js';
import { endpoints } from './Posts.endpoints.js';
import { preview } from './Posts.preview.js';
import { CollectionPermissions } from '../CollectionPermissions.js';
import { CollectionGroup } from '../CollectionGroup.js';
import { getT } from '../../locales/getT.js';

export const Posts: CollectionConfig<'posts'> = {
    slug: 'posts',
    labels: {
        singular: t => getT(t)('collections:posts:label-singular'),
        plural: t => getT(t)('collections:posts:label-plural'),
    },
    access: CollectionPermissions.ReadOnlyPublished,
    admin: {
        group: CollectionGroup.Content.label,
        defaultColumns: ['title', 'slug', '_status', 'updatedAt'],
        useAsTitle: 'title',
        description: t => getT(t)('collections:posts:desc'),
        ...preview,
    },
    versions: {
        drafts: {
            autosave: {
                interval: 1000 * 60 * 5,
                showSaveDraftButton: true,
            },
        },
        maxPerDoc: 100,
    },
    timestamps: true,
    fields,
    hooks,
    endpoints,
};
