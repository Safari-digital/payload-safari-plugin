export interface User {
    id: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    email: string;
    username: string;
    resetPasswordToken?: string | null;
    resetPasswordExpiration?: string | null;
    salt?: string | null;
    hash?: string | null;
    loginAttempts?: number | null;
    lockUntil?: string | null;
    sessions?:
        | {
              id: string;
              createdAt?: string | null;
              expiresAt: string;
          }[]
        | null;
    password?: string | null;
}

export interface Media {
    id: string;
    alt?: string | null;
    caption?: {
        root: {
            type: string;
            children: {
                type: any;
                version: number;
                [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
        };
        [k: string]: unknown;
    } | null;
    updatedAt: string;
    createdAt: string;
    url?: string | null;
    thumbnailURL?: string | null;
    filename?: string | null;
    mimeType?: string | null;
    filesize?: number | null;
    width?: number | null;
    height?: number | null;
    focalX?: number | null;
    focalY?: number | null;
    sizes?: {
        thumbnail?: {
            url?: string | null;
            width?: number | null;
            height?: number | null;
            mimeType?: string | null;
            filesize?: number | null;
            filename?: string | null;
        };
        'portrait-mini'?: {
            url?: string | null;
            width?: number | null;
            height?: number | null;
            mimeType?: string | null;
            filesize?: number | null;
            filename?: string | null;
        };
        xl?: {
            url?: string | null;
            width?: number | null;
            height?: number | null;
            mimeType?: string | null;
            filesize?: number | null;
            filename?: string | null;
        };
        lg?: {
            url?: string | null;
            width?: number | null;
            height?: number | null;
            mimeType?: string | null;
            filesize?: number | null;
            filename?: string | null;
        };
        md?: {
            url?: string | null;
            width?: number | null;
            height?: number | null;
            mimeType?: string | null;
            filesize?: number | null;
            filename?: string | null;
        };
        sm?: {
            url?: string | null;
            width?: number | null;
            height?: number | null;
            mimeType?: string | null;
            filesize?: number | null;
            filename?: string | null;
        };
        xs?: {
            url?: string | null;
            width?: number | null;
            height?: number | null;
            mimeType?: string | null;
            filesize?: number | null;
            filename?: string | null;
        };
    };
}

export interface Page {
    id: string;
    slug: string;
    label: string;
    isInNavigation?: boolean | null;
    sort?: number | null;
    group?: string | null;
    metaPage: {
        metaTitle: string;
        metaDescription: string;
    };
    metaOg: {
        ogTitle?: string | null;
        ogDescription?: string | null;
        ogImage?: (string | null) | Media;
        ogType: 'website' | 'article' | 'profile' | 'book' | 'music' | 'video';
    };
    updatedAt: string;
    createdAt: string;
    _status?: ('draft' | 'published') | null;
}

export interface Post {
    id: string;
    slug: string;
    title: string;
    description: string;
    publicPublishDate: string;
    publicUpdateDate?: string | null;
    relatedPosts?: (string | Post)[] | null;
    tags?: (string | Tag)[] | null;
    heroImage: string | Media;
    content: {
        root: {
            type: string;
            children: {
                type: any;
                version: number;
                [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
        };
        [k: string]: unknown;
    };
    metaPage: {
        metaTitle: string;
        metaDescription: string;
    };
    metaOg: {
        ogTitle?: string | null;
        ogDescription?: string | null;
        ogImage?: (string | null) | Media;
        ogType: 'website' | 'article' | 'profile' | 'book' | 'music' | 'video';
    };
    updatedAt: string;
    createdAt: string;
    _status?: ('draft' | 'published') | null;
}

export interface Tag {
    id: string;
    title: string;
    updatedAt: string;
    createdAt: string;
}

export interface Review {
    id: string;
    name: string;
    title: string;
    content: string;
    picture: string | Media;
    updatedAt: string;
    createdAt: string;
    _status?: ('draft' | 'published') | null;
}

export interface ContactRequest {
    id: string;
    name: string;
    surname: string;
    company?: string | null;
    email: string;
    message: string;
    updatedAt: string;
    createdAt: string;
}

export interface Website {
    id: string;
    footerAffiliations?: {
        cherryFizzLink?: string | null;
        cherryFizzLabel?: string | null;
    };
    Facebook?: string | null;
    Instagram?: string | null;
    Linkedin?: string | null;
    updatedAt?: string | null;
    createdAt?: string | null;
}
