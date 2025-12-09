const namespace = {
    fr: {
        'label-singular': 'Blog',
        'label-plural': 'Blog',
        desc: 'Gérez les articles du blog et leurs métadonnées.',
        tab: {
            post: 'Article',
        },
        fields: {
            slug: {
                label: 'Slug',
                desc: `Le slug de l'article, utilisé dans l'URL, sera préfixé par "/blog".`,
            },
            title: {
                label: 'Titre',
                desc: "Le titre de l'article (128 caractères maximum).",
            },
            description: {
                label: 'Description',
                desc: "La description de l'article (216 caractères maximum).",
            },
            publicPublishDate: {
                label: 'Date de publication',
                desc: "La date de publication visible sur le site web. N'a pas d'autre impact que l'affichage.",
            },
            publicUpdateDate: {
                label: 'Date de mise à jour',
                desc: "La date de mise à jour visible sur le site web. N'a pas d'autre impact que l'affichage.",
            },
            relatedPosts: {
                label: 'Articles liés',
                desc: "Sélectionnez des articles liés à afficher à la fin de l'article (3 max).",
            },
            heroImage: {
                label: 'Image du Hero',
                desc: "L'image principale affichée en haut de l'article.",
            },
            content: {
                label: 'Contenu',
                desc: "Le contenu principal de l'article.",
            },
            tags: {
                label: 'Tags',
                desc: "Les tags associés à l'article (3 max).",
            },
        },
    },
    en: {
        'label-singular': 'Blog',
        'label-plural': 'Blog',
        desc: 'Manage blog posts and their metadata.',
        tab: {
            post: 'Post',
        },
        fields: {
            slug: {
                label: 'Slug',
                desc: `The slug of the post, used in the URL, will be prefixed by "/blog".`,
            },
            title: {
                label: 'Title',
                desc: 'The title of the post (128 characters maximum).',
            },
            description: {
                label: 'Description',
                desc: 'The description of the post (216 characters maximum).',
            },
            publicPublishDate: {
                label: 'Publish Date',
                desc: 'The date the post will be marked as published on the website. No other impact than display.',
            },
            publicUpdateDate: {
                label: 'Update Date',
                desc: 'The date of update visible on the website. No other impact than display.',
            },
            relatedPosts: {
                label: 'Related Posts',
                desc: 'Select related posts to display at the end of the post (3 max).',
            },
            heroImage: {
                label: 'Hero Image',
                desc: 'The main image displayed at the top of the post.',
            },
            content: {
                label: 'Content',
                desc: 'The main content of the post.',
            },
            tags: {
                label: 'Tags',
                desc: 'Tags associated with the post (3 max).',
            },
        },
    },
};

export default namespace;
