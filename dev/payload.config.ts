import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';
import { plugin } from 'plugin';
import { fileURLToPath } from 'url';
import path from 'path';
import sharp from 'sharp';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    admin: {
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },
    collections: [
        {
            slug: 'posts',
            fields: [],
        },
        {
            slug: 'media',
            fields: [],
            upload: {
                staticDir: path.resolve(dirname, 'media'),
            },
        },
    ],
    db: mongooseAdapter({
        ensureIndexes: true,
        url: process.env.DATABASE_URI || '',
    }),
    editor: lexicalEditor(),
    onInit: async payload => {
        // await seed(payload);
    },
    plugins: [
        plugin({
            collections: {
                posts: true,
            },
        }),
    ],
    secret: process.env.PAYLOAD_SECRET || 'test-secret_key',
    sharp,
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
});
