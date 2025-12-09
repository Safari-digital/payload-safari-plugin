import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';
import { safaridigitalPlugin } from 'plugin';
import { fileURLToPath } from 'url';
import { fromRoot } from 'globals.js';
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
    db: mongooseAdapter({
        ensureIndexes: true,
        url: 'mongodb://localhost:27200',
    }),
    editor: lexicalEditor(),
    onInit: async payload => {
        // await seed(payload);
    },
    plugins: [
        safaridigitalPlugin({
            staticDir: fromRoot('.media'),
        }),
    ],
    secret: process.env.PAYLOAD_SECRET || 'test-secret_key',
    sharp,
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
});
