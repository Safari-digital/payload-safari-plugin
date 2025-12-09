import type { CollectionSlug, Config } from 'payload';
import { fr } from 'payload/i18n/fr';
import { en } from 'payload/i18n/en';
import { translations } from './locales/translations.js';
import { buildSafariCollection } from './collections/index.js';

export interface PluginConfig {
    staticDir: string;
    collections?: Partial<Record<CollectionSlug, true>>;
    disabled?: boolean;
}

export const safaridigitalPlugin =
    (pluginOptions: PluginConfig) =>
    (config: Config): Config => {
        config.i18n = {
            fallbackLanguage: 'fr',
            supportedLanguages: { fr, en },
            translations,
        };
        config.collections = [
            ...(config.collections || []),
            ...buildSafariCollection({ staticDir: pluginOptions.staticDir }),
        ];

        if (pluginOptions.disabled) {
            return config;
        }

        if (!config.endpoints) {
            config.endpoints = [];
        }

        if (!config.admin) {
            config.admin = {};
        }

        if (!config.admin.components) {
            config.admin.components = {};
        }

        if (!config.admin.components.beforeDashboard) {
            config.admin.components.beforeDashboard = [];
        }

        config.admin.components.beforeDashboard.push(`plugin/client#BeforeDashboardClient`);
        config.admin.components.beforeDashboard.push(`plugin/rsc#BeforeDashboardServer`);

        const incomingOnInit = config.onInit;

        config.onInit = async payload => {
            // Ensure we are executing any existing onInit functions before running our own.
            if (incomingOnInit) {
                await incomingOnInit(payload);
            }

            const { totalDocs } = await payload.count({
                collection: 'plugin-collection',
                where: {
                    id: {
                        equals: 'seeded-by-plugin',
                    },
                },
            });

            if (totalDocs === 0) {
                await payload.create({
                    collection: 'plugin-collection',
                    data: {
                        id: 'seeded-by-plugin',
                    },
                });
            }
        };

        return config;
    };
