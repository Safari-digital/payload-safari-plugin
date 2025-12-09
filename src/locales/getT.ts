import type { I18nClient, TFunction } from '@payloadcms/translations';
import type { CustomT } from './translations.js';

export function getT(i18n: I18nClient | TFunction | { i18n?: I18nClient; t?: TFunction }): CustomT {
    let results: unknown;
    if (typeof i18n === 'function') {
        results = i18n;
    }
    if ('i18n' in i18n && i18n.i18n) {
        results = i18n.i18n.t;
    }
    if ('t' in i18n && i18n.t) {
        results = i18n.t;
    }
    if (!results) {
        throw new Error('No translation function available');
    }
    return results as CustomT;
}
