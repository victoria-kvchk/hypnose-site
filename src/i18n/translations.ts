export const defaultLang = 'fr';
export const supportedLangs = ['fr', 'en'] as const;
export type Lang = (typeof supportedLangs)[number];

export const translations = {
  fr: {
    'site.title': 'Hypnose & Thérapie',
    'site.description': 'Ressources scientifiques sur l\'hypnose thérapeutique',
    'nav.home': 'Accueil',
    'nav.articles': 'Articles',
    'nav.bibliography': 'Bibliographie',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
    'articles.title': 'Articles',
    'articles.empty': 'Aucun article pour le moment.',
    'bibliography.title': 'Bibliographie',
    'bibliography.empty': 'Aucune référence pour le moment.',
    'about.title': 'À propos',
    'about.content': 'Ce site rassemble des ressources scientifiques sur l\'hypnose thérapeutique. Il a pour vocation de rendre accessible la recherche clinique et académique dans ce domaine.',
    'contact.title': 'Contact',
    'contact.content': 'Pour toute question ou suggestion, n\'hésitez pas à nous contacter.',
    'contact.email.label': 'E-mail',
  },
  en: {
    'site.title': 'Hypnosis & Therapy',
    'site.description': 'Scientific resources on therapeutic hypnosis',
    'nav.home': 'Home',
    'nav.articles': 'Articles',
    'nav.bibliography': 'Bibliography',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'articles.title': 'Articles',
    'articles.empty': 'No articles yet.',
    'bibliography.title': 'Bibliography',
    'bibliography.empty': 'No references yet.',
    'about.title': 'About',
    'about.content': 'This site gathers scientific resources on therapeutic hypnosis. Its mission is to make clinical and academic research in this field accessible to all.',
    'contact.title': 'Contact',
    'contact.content': 'For any questions or suggestions, feel free to get in touch.',
    'contact.email.label': 'Email',
  },
} as const;

export type TranslationKey = keyof typeof translations['fr'];
