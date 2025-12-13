'use client';
import React from 'react';
import { useRouter } from 'next/navigation.js';
import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react';

export function PreviewRefresh() {
    const router = useRouter();
    if (!process.env.NEXT_PUBLIC_SERVER_URL) {
        return null;
    }
    return <PayloadLivePreview refresh={router.refresh} serverURL={process.env.NEXT_PUBLIC_SERVER_URL} />;
}
