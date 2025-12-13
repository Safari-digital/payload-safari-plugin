import { headers } from 'next/headers.js';
import type { NextRequest } from 'next/server.js';

export interface NextRoute {
    url: string | null;
    path: string | null;
    origin: string | null;
}

export class NextSSRRoute {
    public static readonly headerPath = 'x-path';
    public static readonly headerOrigin = 'x-origin';
    public static readonly headerUrl = 'x-url';

    /**
     * Build headers to pass the current path, origin and full url to the server components.
     * Use this in the Next.js middleware.
     * @param request NextRequest
     * @returns Headers with x-path, x-origin and x-url
     */
    public static setNextPathHeaders(request: NextRequest): Headers {
        const headers = new Headers(request.headers);
        const url = new URL(request.url);
        headers.set(NextSSRRoute.headerUrl, request.url);
        headers.set(NextSSRRoute.headerPath, url.pathname);
        headers.set(NextSSRRoute.headerOrigin, url.origin);
        return headers;
    }

    /**
     * Get the current route information from the headers.
     * Won't work if the headers are not set in the middleware.
     * @returns NextRoute containing the current url, path and origin from the headers.
     */
    public static async getNextRoute(): Promise<NextRoute> {
        const headersList = await headers();
        return {
            url: headersList.get(NextSSRRoute.headerUrl),
            path: headersList.get(NextSSRRoute.headerPath),
            origin: headersList.get(NextSSRRoute.headerOrigin),
        };
    }

    /**
     * Check if the current path matches the given string.
     * @param str Path to compare with the current path (e.g. '/about')
     * @returns true if the current path matches the given string, false otherwise.
     */
    public static async isPath(str: `/${string}`): Promise<boolean> {
        const { path } = await NextSSRRoute.getNextRoute();
        return path === str;
    }
}
