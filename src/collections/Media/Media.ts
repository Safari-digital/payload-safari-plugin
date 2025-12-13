import type { CollectionConfig } from 'payload';
import { fields } from './Media.fields.js';
import { CollectionGroup } from '../CollectionGroup.js';
import { CollectionPermissions } from '../CollectionPermissions.js';
import { getT } from '../../locales/getT.js';

export const Media: CollectionConfig<'media'> = {
    slug: 'media',
    labels: {
        singular: t => getT(t)('collections:media:label-singular'),
        plural: t => getT(t)('collections:media:label-plural'),
    },
    access: CollectionPermissions.ReadOnly,
    admin: { group: CollectionGroup.Content.label },
    fields,
    upload: {
        adminThumbnail: 'thumbnail',
        imageSizes: [
            {
                name: 'thumbnail',
                width: 352,
                height: 240,
                position: 'centre',
            },
            {
                name: 'portrait-mini',
                width: 150,
                height: 150,
                position: 'centre',
            },
            ...Object.entries({
                xl: 1440,
                lg: 1024,
                md: 768,
                sm: 640,
                xs: 480,
            }).map(([name, width]) => ({
                name,
                width,
                height: undefined,
                position: 'centre',
            })),
        ],
    },
};
