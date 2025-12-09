const namespace = {
    fr: {
        'meta-page': {
            label: 'Meta-données de la page',
            desc: 'Les balises meta fournissent des métadonnées sur votre site web aux moteurs de recherche et aux navigateurs. Définir des valeurs par défaut garantit que chaque page dispose d’une base d’informations optimisées pour le référencement, améliorant ainsi la visibilité et le classement de votre site dans les résultats de recherche.',
            fields: {
                'meta-title': {
                    label: 'Titre Meta',
                    desc: 'Titre de la page web (60 caractères max)',
                },
                'meta-description': {
                    label: 'Description Meta',
                    desc: 'Description de la page web (160 caractères max)',
                },
            },
        },
        'meta-og': {
            label: 'Meta-données Open Graph',
            desc: 'Les balises meta Open Graph sont utilisées par les plateformes de réseaux sociaux pour afficher des aperçus enrichis des liens lorsque vos pages sont partagées.',
            fields: {
                'og-image': {
                    label: 'Image Open Graph',
                    desc: 'L’image qui apparaîtra lorsque votre page sera partagée sur les réseaux sociaux. Les dimensions recommandées sont de 1200x630 pixels pour un affichage optimal sur toutes les plateformes.',
                },
                'og-type': {
                    label: 'Type Open Graph',
                    desc: 'Le type de votre objet.',
                    options: {
                        website: '(website) Site web',
                        article: '(article) Article',
                        profile: '(profile) Profil',
                        book: '(book) Livre',
                        video: '(video) Vidéo - Film',
                        music: '(music) Musique',
                    },
                },
            },
        },
    },
    en: {
        'meta-page': {
            label: 'Page Meta',
            desc: 'Meta tags provide metadata about your website to search engines and browsers. Setting defaults ensures that each page has a baseline of SEO-optimized information, enhancing your site’s visibility and ranking in search results.',
            fields: {
                'meta-title': {
                    label: 'Meta Title',
                    desc: 'Title for web pages (max 60 characters)',
                },
                'meta-description': {
                    label: 'Meta Description',
                    desc: 'Description for web pages (max 160 characters)',
                },
            },
        },
        'meta-og': {
            label: 'Open Graph Meta',
            desc: 'Open Graph meta tags are used by social media platforms to display rich link previews when your pages are shared.',
            fields: {
                'og-image': {
                    label: 'Open Graph Image',
                    desc: 'The image that will appear when your page is shared on social media. Recommended dimensions are 1200x630 pixels for optimal display across all platforms.',
                },
                'og-type': {
                    label: 'Open Graph Type',
                    desc: 'The type of your object.',
                    options: {
                        website: '(website) Website',
                        article: '(article) Article',
                        profile: '(profile) Profile',
                        book: '(book) Book',
                        video: '(video) Video - Movie',
                        music: '(music) Music',
                    },
                },
            },
        },
    },
};

export default namespace;
