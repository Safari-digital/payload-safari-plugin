const namespace = {
    fr: {
        'label-singular': 'Review',
        'label-plural': 'Reviews',
        desc: 'Gérez les critiques des partenaires.',
        fields: {
            name: {
                label: 'Nom',
                desc: "Le nom de l'auteur de la critique.",
            },
            title: {
                label: 'Titre',
                desc: 'Le titre de la critique (poste occupé).',
            },
            content: {
                label: 'Contenu (132 max, 40 min)',
                desc: 'Le contenu de la critique.',
            },
            picture: {
                label: 'Image',
                desc: 'Une image associée à la critique.',
            },
        },
    },
    en: {
        'label-singular': 'Review',
        'label-plural': 'Reviews',
        desc: 'Manage partner reviews.',
        fields: {
            name: {
                label: 'Name',
                desc: 'The name of the reviewer.',
            },
            title: {
                label: 'Title',
                desc: 'The title of the review (position held).',
            },
            content: {
                label: 'Content (132 max, 40 min)',
                desc: 'The content of the review.',
            },
            picture: {
                label: 'Picture',
                desc: 'An image associated with the review.',
            },
        },
    },
};

export default namespace;
