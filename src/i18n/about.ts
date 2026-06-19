import type { Lang } from './translations';

export interface AboutSection {
  heading: string;
  /** un paragraphe par entrée */
  body: string[];
}

/**
 * Page « À propos » — positionnement honnête : projet de vulgarisation
 * tenu par une non-spécialiste, fondé sur la recherche évaluée par les pairs.
 */
export const aboutSections: Record<Lang, AboutSection[]> = {
  fr: [
    {
      heading: 'Ce que vous trouverez ici',
      body: [
        'Ce site rassemble et vulgarise la recherche scientifique sur l’hypnose et la thérapie par hypnose. L’objectif est simple : rendre des travaux souvent techniques clairs, fiables et accessibles, sans les trahir.',
      ],
    },
    {
      heading: 'Qui écrit',
      body: [
        'Je m’appelle Victoria. Je ne suis ni professionnelle de santé, ni chercheuse : je lis, je vérifie et je résume la recherche sur l’hypnose pour la rendre compréhensible.',
        'Ma légitimité ne tient donc pas à un diplôme, mais à une méthode et à de la transparence. Comme un journaliste scientifique, je ne produis pas la recherche : je m’efforce d’en rendre compte fidèlement.',
      ],
    },
    {
      heading: 'Ma méthode',
      body: [
        'Chaque affirmation importante renvoie à sa source d’origine, avec un DOI vérifiable.',
        'Je distingue ce qui est établi de ce qui est prometteur ou encore exploratoire, et j’assume les zones d’incertitude plutôt que de les masquer.',
        'Les articles sont datés et mis à jour quand les sources évoluent. Si une erreur m’est signalée, je la corrige.',
      ],
    },
    {
      heading: 'Ce que ce site n’est pas',
      body: [
        'Ce site est informatif. Il ne constitue pas un avis médical et ne remplace pas une consultation. L’hypnose s’envisage en complément d’un suivi de santé, jamais à sa place.',
        'Pour tout usage thérapeutique, adressez-vous à un professionnel de santé qualifié.',
      ],
    },
    {
      heading: 'Une remarque, une source ?',
      body: [
        'Une erreur, une question, une étude à suggérer ? Vos retours sont les bienvenus et aident à améliorer le site. Vous pouvez me contacter via la page Contact.',
      ],
    },
  ],
  en: [
    {
      heading: 'What you will find here',
      body: [
        'This site gathers and popularises scientific research on hypnosis and hypnotherapy. The goal is simple: to make often-technical work clear, reliable and accessible, without distorting it.',
      ],
    },
    {
      heading: 'Who writes',
      body: [
        'My name is Victoria. I am neither a healthcare professional nor a researcher: I read, check and summarise research on hypnosis to make it understandable.',
        'My legitimacy therefore does not come from a degree, but from method and transparency. Like a science journalist, I do not produce the research: I do my best to report it faithfully.',
      ],
    },
    {
      heading: 'My method',
      body: [
        'Every important claim links back to its original source, with a verifiable DOI.',
        'I distinguish what is established from what is promising or still exploratory, and I own the areas of uncertainty rather than hiding them.',
        'Articles are dated and updated as the sources evolve. If an error is pointed out, I correct it.',
      ],
    },
    {
      heading: 'What this site is not',
      body: [
        'This site is informational. It is not medical advice and does not replace a consultation. Hypnosis should be considered as a complement to health care, never a substitute for it.',
        'For any therapeutic use, please consult a qualified healthcare professional.',
      ],
    },
    {
      heading: 'A comment, a source?',
      body: [
        'Spotted an error, have a question, or a study to suggest? Your feedback is welcome and helps improve the site. You can reach me through the Contact page.',
      ],
    },
  ],
};
