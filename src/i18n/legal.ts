import type { Lang } from './translations';

export interface LegalSection {
  heading: string;
  /** un paragraphe par entrée */
  body: string[];
}

/**
 * Mentions légales — éditeur particulier (non professionnel).
 * Les éléments entre crochets [ … ] sont à compléter par l'éditeur.
 */
export const legalSections: Record<Lang, LegalSection[]> = {
  fr: [
    {
      heading: 'Éditeur du site',
      body: [
        'Le présent site est édité à titre personnel et non professionnel par [Nom de l’éditeur].',
        'Contact : [adresse e-mail de contact].',
        'Directeur de la publication : [Nom de l’éditeur].',
      ],
    },
    {
      heading: 'Hébergement',
      body: [
        'Le site est hébergé par [Hébergeur à compléter], dont la raison sociale, l’adresse et le numéro de téléphone seront précisés ici.',
      ],
    },
    {
      heading: 'Propriété intellectuelle',
      body: [
        'L’ensemble des contenus de ce site (textes, visuels, identité graphique, mise en page) est protégé par le droit d’auteur. Toute reproduction ou réutilisation, totale ou partielle, est soumise à l’autorisation préalable de l’éditeur, sous réserve des exceptions légales (notamment la courte citation accompagnée de la mention de la source).',
        'Les références et travaux scientifiques cités demeurent la propriété de leurs auteurs et éditeurs respectifs.',
      ],
    },
    {
      heading: 'Nature des contenus et responsabilité',
      body: [
        'Les contenus de ce site ont une vocation strictement informative et de vulgarisation scientifique. Ils ne constituent ni un avis médical, ni un diagnostic, ni une prescription, et ne remplacent pas une consultation auprès d’un professionnel de santé qualifié.',
        'L’éditeur s’efforce de publier des informations exactes et à jour, sans pouvoir en garantir l’exhaustivité ; sa responsabilité ne saurait être engagée du fait de l’usage qui en est fait.',
        'Le site peut renvoyer vers des ressources externes : l’éditeur n’exerce aucun contrôle sur leur contenu et décline toute responsabilité à leur égard.',
      ],
    },
    {
      heading: 'Données personnelles',
      body: [
        'Ce site ne collecte pas de données personnelles à votre insu. Les informations que vous transmettez volontairement (par exemple via le formulaire d’inscription à la lettre d’information ou par e-mail) ne sont utilisées que pour répondre à votre demande et ne sont jamais cédées à des tiers.',
        'Conformément au Règlement général sur la protection des données (RGPD), vous disposez d’un droit d’accès, de rectification et de suppression de vos données, que vous pouvez exercer en écrivant à [adresse e-mail de contact].',
      ],
    },
    {
      heading: 'Droit applicable',
      body: [
        'Les présentes mentions légales sont régies par le droit français. À défaut de résolution amiable, tout litige relatif à l’utilisation du site relève de la compétence des tribunaux français.',
      ],
    },
  ],
  en: [
    {
      heading: 'Site publisher',
      body: [
        'This site is published in a personal, non-professional capacity by [Publisher name].',
        'Contact: [contact email address].',
        'Publication director: [Publisher name].',
      ],
    },
    {
      heading: 'Hosting',
      body: [
        'The site is hosted by [Host to be completed], whose company name, address and telephone number will be specified here.',
      ],
    },
    {
      heading: 'Intellectual property',
      body: [
        'All content on this site (text, visuals, graphic identity, layout) is protected by copyright. Any reproduction or reuse, in whole or in part, requires the publisher’s prior authorisation, subject to legal exceptions (in particular short quotations with attribution of the source).',
        'The scientific references and works cited remain the property of their respective authors and publishers.',
      ],
    },
    {
      heading: 'Nature of the content and liability',
      body: [
        'The content of this site is strictly informative and intended to make scientific research accessible. It is neither medical advice, nor a diagnosis, nor a prescription, and does not replace a consultation with a qualified healthcare professional.',
        'The publisher strives to provide accurate, up-to-date information, without guaranteeing its completeness; no liability can be accepted for the use made of it.',
        'The site may link to external resources: the publisher exercises no control over their content and accepts no liability in their regard.',
      ],
    },
    {
      heading: 'Personal data',
      body: [
        'This site does not collect personal data without your knowledge. Information you voluntarily provide (for example through the newsletter sign-up form or by email) is used only to respond to your request and is never shared with third parties.',
        'In accordance with the General Data Protection Regulation (GDPR), you have a right to access, rectify and erase your data, which you can exercise by writing to [contact email address].',
      ],
    },
    {
      heading: 'Governing law',
      body: [
        'These legal notices are governed by French law. Failing an amicable settlement, any dispute relating to the use of the site falls under the jurisdiction of the French courts.',
      ],
    },
  ],
};
