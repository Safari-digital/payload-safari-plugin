import type { Review } from '../../types.js';

export interface ReviewDto extends Pick<Review, 'title' | 'content' | 'name'> {
    src: string;
    alt: string;
}
