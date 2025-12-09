import { useTranslation } from '@payloadcms/ui';
import { getT } from './getT.js';

export function usePayloadTranslations() {
    const { i18n } = useTranslation();
    const t = getT(i18n);
    return { t, i18n };
}
