import type { NestedKeysStripped, TFunction } from 'node_modules/@payloadcms/translations/dist/types.js';
import type { en } from '@payloadcms/translations/languages/en';
import type { fr } from '@payloadcms/translations/languages/fr';
import metaPage from './collections-fields/meta-page.js';
import dashboard from './views/dashboard.js';
import navigation from './views/navigation.js';
import contact from './collections/contact.js';
import media from './collections/media.js';
import pages from './collections/pages.js';
import posts from './collections/posts.js';
import reviews from './collections/reviews.js';
import users from './collections/users.js';
import tags from './collections/tags.js';
import website from './collections/website.js';

export const translations = {
    fr: {
        collections: {
            fields: {
                ...metaPage.fr,
            },
            contact: contact.fr,
            media: media.fr,
            pages: pages.fr,
            posts: posts.fr,
            reviews: reviews.fr,
            users: users.fr,
            tags: tags.fr,
            website: website.fr,
        },
        views: {
            dashboard: dashboard.fr,
        },
        navigation: navigation.fr,
    },
    en: {
        collections: {
            fields: {
                ...metaPage.en,
            },
            contact: contact.en,
            media: media.en,
            pages: pages.en,
            posts: posts.en,
            reviews: reviews.en,
            users: users.en,
            tags: tags.en,
            website: website.en,
        },
        views: {
            dashboard: dashboard.en,
        },
        navigation: navigation.en,
    },
} as const;

export type FrLocales = typeof translations.fr & typeof fr;
export type EnLocales = typeof translations.en & typeof en;

export type CustomTranslationsKeys = NestedKeysStripped<EnLocales | FrLocales>;
export type CustomT = TFunction<CustomTranslationsKeys>;
