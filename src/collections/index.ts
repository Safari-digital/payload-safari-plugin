import type { CollectionConfig } from 'payload';
import { ContactRequests } from './ContactRequests/ContactRequests.js';
import { Media } from './Media/Media.js';
import { Pages } from './Pages/Pages.js';
import { Users } from './Users/Users.js';

interface BuildSafariCollectionProps {
    staticDir: string;
}

export function buildSafariCollection({ staticDir }: BuildSafariCollectionProps): CollectionConfig[] {
    return [
        ContactRequests,
        {
            ...Media,
            upload: {
                staticDir,
            },
        },
        Pages,
        Users,
    ];
}
