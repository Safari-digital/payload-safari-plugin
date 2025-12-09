const namespace = {
    fr: {
        'label-singular': 'Page',
        'label-plural': 'Pages',
        desc: 'Gérez les pages et leurs métadonnées.',
        fields: {
            slug: {
                label: 'Slug',
                desc: "Le slug de la page, utilisé dans l'URL.",
            },
            label: {
                label: 'Label',
                desc: 'Le label de la page dans le menu de navigation.',
            },
            isInNavigation: {
                label: 'Inclure dans la navigation',
                desc: 'Si coché, cette page apparaîtra dans le menu de navigation du site.',
            },
            sort: {
                label: 'Ordre',
                desc: "Détermine l'ordre dans le menu de navigation. (0 = premier, 100 = dernier).",
            },
            group: {
                label: 'Groupe',
                desc: "Permet de regrouper cette page avec d'autres pages dans le menu de navigation.",
            },
        },
    },
    en: {
        'label-singular': 'Page',
        'label-plural': 'Pages',
        desc: 'Manage pages and their metadata.',
        fields: {
            slug: {
                label: 'Slug',
                desc: 'The slug of the page, used in the URL.',
            },
            label: {
                label: 'Label',
                desc: 'The label for the page in the navigation menu.',
            },
            isInNavigation: {
                label: 'Displayed in Navigation',
                desc: 'If checked, this page will appear in the site navigation menu.',
            },
            sort: {
                label: 'Order',
                desc: 'Determines the order in the navigation menu. (0 = first, 100 = last).',
            },
            group: {
                label: 'Group',
                desc: 'Allows grouping this page with other pages in the navigation menu.',
            },
        },
    },
};

export default namespace;
