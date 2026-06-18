import type { Lang } from './translations';
import type { LegalSection } from './legal';

/**
 * Politique de confidentialité — site sans cookie de suivi ni mesure d'audience.
 * Les éléments entre crochets [ … ] sont à compléter par l'éditeur.
 */
export const privacySections: Record<Lang, LegalSection[]> = {
  fr: [
    {
      heading: 'Responsable du traitement',
      body: [
        'Le responsable du traitement des données personnelles collectées sur ce site est son éditeur, [Nom de l’éditeur], joignable à l’adresse [adresse e-mail de contact].',
      ],
    },
    {
      heading: 'Données collectées et finalités',
      body: [
        'Ce site ne collecte que les données que vous transmettez volontairement. Votre adresse e-mail, si vous vous inscrivez à la lettre d’information, sert uniquement à vous l’envoyer. Les informations contenues dans vos messages, lorsque vous écrivez à l’éditeur, servent uniquement à y répondre.',
        'Aucune donnée n’est collectée à votre insu.',
      ],
    },
    {
      heading: 'Base légale',
      body: [
        'Le traitement de votre adresse e-mail aux fins d’envoi de la lettre d’information repose sur votre consentement, que vous pouvez retirer à tout moment. Le traitement des messages que vous adressez à l’éditeur repose sur son intérêt légitime à répondre à vos demandes.',
      ],
    },
    {
      heading: 'Durée de conservation',
      body: [
        'Votre adresse e-mail est conservée jusqu’à votre désinscription de la lettre d’information. Les messages échangés sont conservés le temps nécessaire au traitement de votre demande, puis supprimés ou archivés.',
      ],
    },
    {
      heading: 'Destinataires des données',
      body: [
        'Vos données ne sont ni vendues, ni cédées, ni communiquées à des tiers à des fins commerciales. Elles peuvent être traitées par les prestataires techniques strictement nécessaires au fonctionnement du site (par exemple un service d’envoi d’e-mails), tenus aux mêmes obligations de confidentialité.',
      ],
    },
    {
      heading: 'Cookies et mesure d’audience',
      body: [
        'En l’état, ce site n’utilise aucun cookie de suivi ni outil de mesure d’audience. Si de tels outils venaient à être ajoutés, la présente politique serait mise à jour et votre consentement recueilli lorsque la loi l’exige.',
      ],
    },
    {
      heading: 'Vos droits',
      body: [
        'Conformément au Règlement général sur la protection des données (RGPD) et à la loi « Informatique et Libertés », vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité de vos données. Vous pouvez les exercer en écrivant à [adresse e-mail de contact].',
      ],
    },
    {
      heading: 'Réclamation',
      body: [
        'Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la Commission nationale de l’informatique et des libertés (CNIL), www.cnil.fr.',
      ],
    },
  ],
  en: [
    {
      heading: 'Data controller',
      body: [
        'The controller of the personal data collected on this site is its publisher, [Publisher name], reachable at [contact email address].',
      ],
    },
    {
      heading: 'Data collected and purposes',
      body: [
        'This site only collects the data you voluntarily provide. Your email address, if you sign up for the newsletter, is used solely to send it to you. The information contained in your messages, when you write to the publisher, is used solely to reply to you.',
        'No data is collected without your knowledge.',
      ],
    },
    {
      heading: 'Legal basis',
      body: [
        'Processing your email address to send the newsletter is based on your consent, which you may withdraw at any time. Processing the messages you send to the publisher is based on their legitimate interest in responding to your requests.',
      ],
    },
    {
      heading: 'Retention period',
      body: [
        'Your email address is kept until you unsubscribe from the newsletter. Exchanged messages are kept for as long as needed to handle your request, then deleted or archived.',
      ],
    },
    {
      heading: 'Recipients of the data',
      body: [
        'Your data is never sold, transferred or shared with third parties for commercial purposes. It may be processed by the technical providers strictly necessary to operate the site (for example an email-sending service), bound by the same confidentiality obligations.',
      ],
    },
    {
      heading: 'Cookies and analytics',
      body: [
        'As it stands, this site uses no tracking cookies and no analytics tools. Should such tools be added, this policy would be updated and your consent obtained where the law requires it.',
      ],
    },
    {
      heading: 'Your rights',
      body: [
        'In accordance with the General Data Protection Regulation (GDPR), you have a right to access, rectify, erase, restrict, object to and port your data. You can exercise these rights by writing to [contact email address].',
      ],
    },
    {
      heading: 'Complaint',
      body: [
        'If, after contacting us, you consider that your rights are not respected, you may lodge a complaint with the competent data protection authority (in France, the CNIL, www.cnil.fr).',
      ],
    },
  ],
};
