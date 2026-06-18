import type { Lang } from './translations';

export interface GlossaryItem {
  term: string;
  def: string;
}

/** Contenu du glossaire, par langue. Ordre pédagogique (concepts puis méthodes). */
export const glossaryItems: Record<Lang, GlossaryItem[]> = {
  fr: [
    {
      term: 'Induction',
      def: 'La mise en route de l’hypnose, par laquelle le praticien guide la personne vers cet état d’attention concentrée, souvent avec des suggestions de détente et de focalisation.',
    },
    {
      term: 'Suggestion',
      def: 'Une proposition formulée pendant l’hypnose, par exemple « votre main devient légère », vécue de façon plus directe et plus automatique que d’habitude. C’est l’ingrédient central de l’hypnose.',
    },
    {
      term: 'Suggestibilité hypnotique (ou hypnotisabilité)',
      def: 'La facilité, propre à chacun, à répondre aux suggestions hypnotiques. Elle se mesure avec des échelles standardisées et varie fortement d’une personne à l’autre.',
    },
    {
      term: 'État modifié de conscience',
      def: 'Une manière de fonctionner mentalement différente de l’éveil ordinaire, sans être le sommeil. Selon les chercheurs, l’hypnose en est un, ou bien s’explique par des processus mentaux ordinaires (voir « théories état et non-état »).',
    },
    {
      term: 'Transe',
      def: 'Terme courant pour désigner l’état hypnotique. Il peut prêter à confusion, car il évoque à tort une perte de conscience ou de contrôle.',
    },
    {
      term: 'Autohypnose',
      def: 'La capacité à entrer soi-même en hypnose, sans praticien, généralement apprise en séance puis pratiquée seul, par exemple pour gérer le stress ou la douleur.',
    },
    {
      term: 'Hypnothérapie',
      def: 'L’utilisation de l’hypnose dans l’accompagnement d’un trouble médical ou psychologique. C’est une technique au service d’un soin, pas un soin à elle seule.',
    },
    {
      term: 'Hypnoanalgésie',
      def: 'L’usage de l’hypnose pour réduire la douleur, par exemple lors d’un soin, d’un examen ou d’un accouchement, en complément ou parfois en remplacement partiel des antidouleurs.',
    },
    {
      term: 'Théories « état » et « non-état »',
      def: 'Le débat scientifique sur la nature de l’hypnose. Les théories « état » y voient un véritable état modifié de conscience, les théories « non-état » l’expliquent par des processus ordinaires comme l’attention, l’imagination et les attentes.',
    },
    {
      term: 'Pseudo-souvenir (faux souvenir)',
      def: 'Un souvenir ressenti comme réel mais qui ne correspond pas à ce qui s’est passé. L’hypnose peut en favoriser l’apparition, ce qui la rend inadaptée à la récupération de souvenirs fiables.',
    },
    {
      term: 'Effet placebo',
      def: 'Une amélioration réelle liée aux attentes et au contexte du soin, et non au traitement lui-même. En recherche, on cherche à le distinguer de l’effet propre de l’hypnose.',
    },
    {
      term: 'Essai contrôlé randomisé (ECR)',
      def: 'Une étude qui compare un groupe recevant l’intervention à un groupe témoin, les participants étant répartis au hasard. C’est l’un des moyens les plus fiables de tester si quelque chose marche vraiment.',
    },
    {
      term: 'Revue systématique',
      def: 'Un travail qui rassemble et évalue, selon une méthode rigoureuse, toutes les études existantes sur une question, pour en tirer une vue d’ensemble plus solide qu’une étude isolée.',
    },
    {
      term: 'Méta-analyse',
      def: 'Une revue systématique qui combine statistiquement les résultats de plusieurs études pour estimer un effet d’ensemble plus précis.',
    },
    {
      term: 'Niveau de preuve',
      def: 'Une façon de situer la solidité des données derrière une affirmation. Sur ce site, trois repères : établi (preuves solides et convergentes), prometteur (résultats encourageants à confirmer), exploratoire (premières données, à interpréter avec prudence).',
    },
  ],
  en: [
    {
      term: 'Induction',
      def: 'The starting phase of hypnosis, in which the practitioner guides the person toward this state of focused attention, often with suggestions of relaxation and focus.',
    },
    {
      term: 'Suggestion',
      def: 'A proposal made during hypnosis, for example “your hand is becoming light”, experienced more directly and more automatically than usual. It is the core ingredient of hypnosis.',
    },
    {
      term: 'Hypnotic suggestibility (or hypnotisability)',
      def: 'The individual ease of responding to hypnotic suggestions. It is measured with standardised scales and varies widely from one person to another.',
    },
    {
      term: 'Altered state of consciousness',
      def: 'A way of functioning mentally that differs from ordinary wakefulness, without being sleep. Depending on the researchers, hypnosis is one, or is explained by ordinary mental processes (see “state and non-state theories”).',
    },
    {
      term: 'Trance',
      def: 'A common term for the hypnotic state. It can be misleading, as it wrongly suggests a loss of consciousness or control.',
    },
    {
      term: 'Self-hypnosis',
      def: 'The ability to enter hypnosis on your own, without a practitioner, usually learned in session and then practised alone, for example to manage stress or pain.',
    },
    {
      term: 'Hypnotherapy',
      def: 'The use of hypnosis in addressing a medical or psychological condition. It is a technique in the service of care, not a treatment in itself.',
    },
    {
      term: 'Hypnoanalgesia',
      def: 'The use of hypnosis to reduce pain, for example during a procedure, an examination or childbirth, alongside or sometimes partly replacing painkillers.',
    },
    {
      term: '“State” and “non-state” theories',
      def: 'The scientific debate over the nature of hypnosis. “State” theories see it as a genuine altered state of consciousness; “non-state” theories explain it through ordinary processes such as attention, imagination and expectations.',
    },
    {
      term: 'Pseudo-memory (false memory)',
      def: 'A memory that feels real but does not match what actually happened. Hypnosis can encourage such memories, which makes it unsuitable for recovering reliable memories.',
    },
    {
      term: 'Placebo effect',
      def: 'A real improvement linked to expectations and the care context, rather than to the treatment itself. In research, it is distinguished from the specific effect of hypnosis.',
    },
    {
      term: 'Randomised controlled trial (RCT)',
      def: 'A study that compares a group receiving the intervention with a control group, with participants assigned at random. It is one of the most reliable ways to test whether something truly works.',
    },
    {
      term: 'Systematic review',
      def: 'A study that gathers and appraises, using a rigorous method, all existing research on a question, to draw a more robust overall picture than any single study.',
    },
    {
      term: 'Meta-analysis',
      def: 'A systematic review that statistically combines the results of several studies to estimate a more precise overall effect.',
    },
    {
      term: 'Level of evidence',
      def: 'A way of situating the strength of the data behind a claim. On this site, three markers: established (solid, converging evidence), promising (encouraging results to be confirmed), exploratory (early data, to interpret with caution).',
    },
  ],
};
