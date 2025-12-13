import type { Post } from '../../types.js';

export interface PostDto {
    id: string;
    title: string;
    content: Post['content'];
    hero: {
        src: string;
        width: number;
        height: number;
        alt?: string;
    };
    relatedPosts: string[];
    tags: string[];
    publishedAt: Post['publicPublishDate'];
    updatedAt: Post['publicUpdateDate'];
}
