import type { Lang } from './translations';

export interface FaqItem {
  q: string;
  a: string;
}

/** Contenu de la page FAQ, par langue. Information générale et vulgarisée. */
export const faqItems: Record<Lang, FaqItem[]> = {
  fr: [
    {
      q: 'Qu’est-ce que l’hypnose thérapeutique ?',
      a: 'C’est l’usage encadré d’un état d’attention focalisée, une variation naturelle de la conscience, dont le but est d’accompagner un changement (gestion de la douleur, de l’anxiété, d’habitudes…). La personne reste consciente, active et collaborative tout au long de la séance.',
    },
    {
      q: 'Tout le monde est-il hypnotisable ?',
      a: 'La quasi-totalité des gens peuvent en faire l’expérience à un certain degré. La sensibilité à l’hypnose varie toutefois beaucoup : une minorité y répond très fortement, une autre très peu, et la majorité se situe entre les deux. C’est une caractéristique mesurable et plutôt stable au cours de la vie, ni une faiblesse ni un don.',
    },
    {
      q: 'Peut-on perdre le contrôle ou être hypnotisé contre son gré ?',
      a: 'Non. L’hypnose n’est pas une perte de volonté : on ne peut pas y être contraint, ni amené à agir contre ses valeurs. La réceptivité varie d’une personne à l’autre, et l’on peut interrompre une séance à tout moment.',
    },
    {
      q: 'Risque-t-on de rester « bloqué » sous hypnose ?',
      a: 'Non. Personne n’est jamais resté coincé en hypnose. C’est un état dont on sort naturellement, soit en ouvrant les yeux, soit en glissant brièvement dans un vrai sommeil dont on se réveille ensuite normalement.',
    },
    {
      q: 'Est-ce que ça marche vraiment, et pour quoi ?',
      a: 'Cela dépend de l’indication, et l’honnêteté impose de distinguer les niveaux de preuve. La réduction de la douleur est l’effet le mieux établi. L’anxiété, notamment avant un soin, et le syndrome de l’intestin irritable font partie des pistes les plus prometteuses. Pour d’autres usages très médiatisés, comme l’arrêt du tabac ou la perte de poids, les preuves sont plus faibles ou incertaines. Dans tous les cas, l’hypnose s’envisage en complément d’un suivi de santé, jamais à sa place.',
    },
    {
      q: 'Hypnose de spectacle et hypnose thérapeutique, est-ce la même chose ?',
      a: 'Non. Le spectacle sélectionne les personnes les plus réceptives et expressives, et mise sur la mise en scène et la pression du public. L’hypnose à visée thérapeutique est un travail privé, collaboratif, mené par un professionnel, sans recherche d’effet spectaculaire.',
    },
    {
      q: 'Va-t-on me faire révéler des secrets ou « retrouver » des souvenirs oubliés ?',
      a: 'Non. L’hypnose n’est ni un sérum de vérité ni un outil fiable de récupération de souvenirs. Elle peut même créer de faux souvenirs et renforcer la confiance qu’on leur accorde, sans les rendre plus exacts. C’est pourquoi de nombreux tribunaux encadrent ou écartent les témoignages obtenus sous hypnose.',
    },
    {
      q: 'Y a-t-il des risques ou des contre-indications ?',
      a: 'Pratiquée par un professionnel formé, l’hypnose est généralement sûre. La prudence s’impose pour certains troubles psychiatriques sévères (psychose, dissociation), où elle doit être encadrée médicalement. En cas de doute, demandez conseil à votre médecin.',
    },
    {
      q: 'Combien de séances faut-il ?',
      a: 'Cela varie selon la personne et l’objectif. Ce n’est pas un remède en une fois : plusieurs séances sont souvent nécessaires, et l’effet dépend aussi de la pratique entre les séances, par exemple l’autohypnose.',
    },
    {
      q: 'L’hypnose est-elle remboursée ? (France)',
      a: 'En règle générale, l’Assurance Maladie ne rembourse pas l’hypnose en tant que telle, mais beaucoup de mutuelles proposent un forfait « médecines douces » couvrant quelques séances par an. Une séance coûte souvent entre 45 et 85 euros. Ces modalités évoluent : vérifiez auprès de votre caisse et de votre mutuelle.',
    },
    {
      q: 'Comment les sources sont-elles sélectionnées ?',
      a: 'Nous privilégions les publications évaluées par les pairs (revues scientifiques, méta-analyses, essais cliniques) et indiquons, autant que possible, le niveau de preuve et les limites de chaque résultat présenté.',
    },
  ],
  en: [
    {
      q: 'What is therapeutic hypnosis?',
      a: 'It is the structured use of a focused-attention state, a natural variation of consciousness, whose aim is to support change (managing pain, anxiety, habits…). The person stays awake, aware and actively involved throughout the session.',
    },
    {
      q: 'Can everyone be hypnotised?',
      a: 'Almost everyone can experience it to some degree. Responsiveness to hypnosis varies widely, though: a minority respond very strongly, another very little, and most people fall in between. It is a measurable, fairly stable trait across life, neither a weakness nor a gift.',
    },
    {
      q: 'Can you lose control or be hypnotised against your will?',
      a: 'No. Hypnosis is not a loss of will: you cannot be forced into it, nor made to act against your values. Responsiveness varies from person to person, and a session can be stopped at any time.',
    },
    {
      q: 'Can you get “stuck” in hypnosis?',
      a: 'No. No one has ever stayed stuck in hypnosis. It is a state you leave naturally, either by opening your eyes or by briefly drifting into ordinary sleep, from which you then wake up normally.',
    },
    {
      q: 'Does it really work, and for what?',
      a: 'It depends on the indication, and honesty requires distinguishing the levels of evidence. Pain relief is the best-established effect. Anxiety, especially before a medical procedure, and irritable bowel syndrome are among the most promising areas. For other widely publicised uses, such as quitting smoking or losing weight, the evidence is weaker or uncertain. In every case, hypnosis is meant to complement medical care, never to replace it.',
    },
    {
      q: 'Is stage hypnosis the same as therapeutic hypnosis?',
      a: 'No. Stage hypnosis selects the most responsive, expressive people and relies on showmanship and audience pressure. Therapeutic hypnosis is private, collaborative work led by a professional, with no aim of producing a spectacle.',
    },
    {
      q: 'Will I reveal secrets or “recover” forgotten memories?',
      a: 'No. Hypnosis is neither a truth serum nor a reliable way to recover memories. It can even create false memories and increase confidence in them without making them any more accurate. This is why many courts restrict or reject testimony obtained under hypnosis.',
    },
    {
      q: 'Are there any risks or contraindications?',
      a: 'Performed by a trained professional, hypnosis is generally safe. Caution applies to certain severe psychiatric conditions (psychosis, dissociation), where it must be medically supervised. When in doubt, ask your doctor.',
    },
    {
      q: 'How many sessions are needed?',
      a: 'It varies with the person and the goal. It is not a one-time cure: several sessions are often needed, and the effect also depends on practice between sessions, such as self-hypnosis.',
    },
    {
      q: 'Is hypnosis reimbursed? (France)',
      a: 'As a rule, the French statutory health insurance does not cover hypnosis as such, but many complementary insurers (“mutuelles”) offer an alternative-medicine allowance covering a few sessions a year. A session often costs between €45 and €85. These terms change, so check with your health insurance fund and your complementary insurer.',
    },
    {
      q: 'How are the sources selected?',
      a: 'We favour peer-reviewed publications (scientific journals, meta-analyses, clinical trials) and indicate, wherever possible, the level of evidence and the limitations of each result presented.',
    },
  ],
};
