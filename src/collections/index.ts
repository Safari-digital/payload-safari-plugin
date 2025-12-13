import type { CollectionConfig, Config, GlobalConfig } from 'payload';
import { Media } from './Media/Media.js';
import { Pages } from './Pages/Pages.js';
import { Users } from './Users/Users.js';
import { Posts } from './Posts/Posts.js';
import { Tags } from './Tags/Tags.js';
import { Reviews } from './Reviews/Reviews.js';

interface BuildSafariCollectionProps {
    staticDir: string;
}

export function buildSafariCollection({ staticDir }: BuildSafariCollectionProps): CollectionConfig[] {
    return [
        {
            ...Media,
            upload: {
                staticDir,
            },
        },
        Pages,
        Posts,
        Reviews,
        Tags,
        Users,
    ];
}

export function buildSafariGlobals(): GlobalConfig[] {
    return [];
}
