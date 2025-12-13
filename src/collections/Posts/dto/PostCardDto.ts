import type { Post } from '../../types.js';

export interface PostCardDto extends Pick<Post, 'title' | 'description' | 'slug' | 'tags' | 'metaPage'> {
    hero: {
        src: string;
        alt: string;
    };
    publishedAt: string;
    updatedAt?: string;
}
