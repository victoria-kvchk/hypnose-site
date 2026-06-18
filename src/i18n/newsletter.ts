import type { Lang } from './translations';

/* ============================================================
   NEWSLETTER — configuration Brevo + textes bilingues
   ============================================================ */

/**
 * Configuration de l'envoi vers Brevo (ex-Sendinblue).
 *
 * Site 100 % statique : on ne met JAMAIS de clé API ici (elle serait
 * publique). On utilise l'URL publique d'un *formulaire d'inscription*
 * Brevo, qui gère la collecte + le double opt-in côté Brevo.
 *
 * ⚠️  À CONFIGURER une seule fois :
 *   1. Brevo → Contacts → Formulaires → créer un formulaire (avec double opt-in).
 *   2. Onglet « Partager » → copier l'URL « https://sibforms.com/serve/XXXX… ».
 *   3. La coller dans un fichier `.env` à la racine du projet :
 *        PUBLIC_BREVO_FORM_ACTION="https://sibforms.com/serve/XXXX…"
 *      (ou directement dans `formAction` ci-dessous en repli).
 *
 * Tant que l'URL est vide, le formulaire fonctionne en « mode démo » :
 * il affiche l'état de succès sans rien envoyer (un avertissement est logué
 * dans la console).
 */
/** URL publique du formulaire Brevo. Repli si `.env` absent (ex. build sur
 *  une autre machine). Sans secret : c'est une URL publique côté navigateur. */
const BREVO_FORM_ACTION_FALLBACK =
  'https://9837da37.sibforms.com/serve/MUIFANg0h7uB7C-FyzNfqctv6uuwDwvfYl86E9AcczstuCfkn4HxbQVKnMkYpohU9b8dnsHZuYJYjg92IMyvZ4SU3slONbq8RJWAUDGszGQC1pCi8yLR3jljedLOGfNfVTMjmBcBsHya3eGAcK778H5HmAoCNmQE2SxBRD8zGmEriDElgEvnF2m7OKdm4MK35qvuQYvHvYZgjtfr-A==';

export const BREVO = {
  formAction: import.meta.env.PUBLIC_BREVO_FORM_ACTION ?? BREVO_FORM_ACTION_FALLBACK,
  /** Noms des champs attendus par le formulaire Brevo. */
  emailField: 'EMAIL',
  /** Champ piège anti-bot (doit rester vide). */
  honeypotField: 'email_address_check',
  /** Champ langue, pour router l'email de confirmation. */
  localeField: 'locale',
} as const;

interface NewsletterCopy {
  /** En-tête de la section dédiée. */
  eyebrow: string;
  title: string;
  lede: string;
  /** Formulaire. */
  placeholder: string;
  action: string;
  /** Mention RGPD + lien confidentialité. */
  consent: string;
  privacy: string;
  /** Messages d'état (lus par le script client via data-nl-msgs). */
  messages: {
    invalid: string;
    loading: string;
    success: string;
    error: string;
  };
}

export const newsletterCopy: Record<Lang, NewsletterCopy> = {
  fr: {
    eyebrow: 'Newsletter',
    title: 'La recherche sur l’hypnose, dans votre boîte mail',
    lede: 'Un email occasionnel, à la parution d’un article. Synthèses claires, sources vérifiées, aucun spam.',
    placeholder: 'Votre email',
    action: 'S’inscrire',
    consent: 'Désinscription en un clic, à tout moment. Voir notre',
    privacy: 'politique de confidentialité',
    messages: {
      invalid: 'Adresse email invalide.',
      loading: 'Envoi…',
      success: 'Presque terminé ! Vérifiez votre boîte mail pour confirmer.',
      error: 'Une erreur est survenue, réessayez dans un instant.',
    },
  },
  en: {
    eyebrow: 'Newsletter',
    title: 'Hypnosis research, in your inbox',
    lede: 'An occasional email, when a new article goes live. Clear summaries, checked sources, no spam.',
    placeholder: 'Your email',
    action: 'Subscribe',
    consent: 'Unsubscribe anytime in one click. See our',
    privacy: 'privacy policy',
    messages: {
      invalid: 'Invalid email address.',
      loading: 'Sending…',
      success: 'Almost there! Check your inbox to confirm.',
      error: 'Something went wrong, please try again in a moment.',
    },
  },
};
