import type { CollectionConfig } from 'payload';

export const fields: CollectionConfig<'tags'>['fields'] = [
    {
        name: 'title',
        type: 'text',
        required: true,
        unique: true,
        maxLength: 32,
        minLength: 1,
    },
];
