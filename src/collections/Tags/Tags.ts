import type { CollectionConfig } from 'payload';
import { fields } from './Tags.fields.js';
import { CollectionPermissions } from '../CollectionPermissions.js';
import { CollectionGroup } from '../CollectionGroup.js';
import { getT } from '../../locales/getT.js';

export const Tags: CollectionConfig<'tags'> = {
    slug: 'tags',
    labels: {
        singular: t => getT(t)('collections:tags:label-singular'),
        plural: t => getT(t)('collections:tags:label-plural'),
    },
    access: CollectionPermissions.ReadOnly,
    admin: {
        group: CollectionGroup.Content.label,
        useAsTitle: 'title',
    },
    fields,
};
