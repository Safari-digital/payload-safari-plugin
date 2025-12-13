import type { CollectionConfig } from 'payload';
import { preview } from './Pages.preview.js';
import { hooks } from './Pages.hooks.js';
import { fields } from './Pages.fields.js';
import { CollectionPermissions } from '../CollectionPermissions.js';
import { CollectionGroup } from '../CollectionGroup.js';
import { getT } from '../../locales/getT.js';

export const Pages: CollectionConfig<'pages'> = {
    slug: 'pages',
    labels: {
        singular: t => getT(t)('collections:pages:label-singular'),
        plural: t => getT(t)('collections:pages:label-plural'),
    },
    access: {
        create: () => false,
        delete: () => false,
        read: CollectionPermissions.AccessOnAnyone,
        update: CollectionPermissions.AccessOnAuthenticated,
    },
    admin: {
        group: CollectionGroup.Content.label,
        defaultColumns: ['slug', 'label', '_status', 'updatedAt'],
        useAsTitle: 'slug',
        ...preview,
    },
    versions: {
        drafts: {
            autosave: {
                interval: 5 * 60 * 1000, // 5 minutes
                showSaveDraftButton: true,
            },
        },
        maxPerDoc: 100,
    },
    timestamps: true,
    fields,
    hooks,
};
