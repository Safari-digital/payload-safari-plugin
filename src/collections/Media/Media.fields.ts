import type { CollectionConfig } from 'payload';
import { FixedToolbarFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical';

export const fields: CollectionConfig<'media'>['fields'] = [
    {
        name: 'alt',
        type: 'text',
    },
    {
        name: 'caption',
        type: 'richText',
        editor: lexicalEditor({
            features: ({ rootFeatures }) => [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()],
        }),
    },
];
