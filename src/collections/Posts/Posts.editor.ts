import {
    AlignFeature,
    BlockquoteFeature,
    BlocksFeature,
    FixedToolbarFeature,
    HeadingFeature,
    HorizontalRuleFeature,
    IndentFeature,
    InlineToolbarFeature,
    lexicalEditor,
    OrderedListFeature,
    UnorderedListFeature,
} from '@payloadcms/richtext-lexical';

export const editor = lexicalEditor({
    features: ({ rootFeatures }) => [
        ...rootFeatures,
        HeadingFeature({
            enabledHeadingSizes: ['h2'],
        }),
        BlocksFeature(),
        AlignFeature(),
        IndentFeature(),
        BlockquoteFeature(),
        OrderedListFeature(),
        UnorderedListFeature(),
        BlocksFeature({
            blocks: [
                {
                    slug: 'mediaBlock',
                    interfaceName: 'MediaBlock',
                    fields: [
                        {
                            name: 'media',
                            type: 'upload',
                            relationTo: 'media',
                            required: true,
                        },
                    ],
                },
            ],
        }),
        FixedToolbarFeature(),
        InlineToolbarFeature(),
        HorizontalRuleFeature(),
    ],
});
