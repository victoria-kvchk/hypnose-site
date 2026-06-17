/**
 * texture.ts — génération pure de paysages aériens abstraits.
 *
 * Logique sans dépendance ni runtime (ni Astro, ni DOM) : à partir d'un
 * variant et d'un seed, produit une géométrie SVG déterministe (bandes
 * stratifiées + lignes de niveau). Le rendu (balises <svg>, filtres) vit
 * dans Texture.astro ; ce module ne fait que des maths → données.
 *
 * Déterministe par construction (PRNG seedé) → même seed, même sortie,
 * côté serveur comme à la build. Testable en isolation.
 */

export interface Palette {
  /** dégradé de fond, clair → profond */
  base: [string, string];
  /** teintes des strates, claires → sombres */
  strata: string[];
  /** teinte des lignes de niveau */
  contour: string;
}

export const palettes = {
  estuary:   { base: ['#EFE5D9', '#C9B49C'], strata: ['#E4D6C5', '#CDBBA4', '#A9AEA4', '#7E8E8F', '#5E747A'], contour: '#516A72' },
  dune:      { base: ['#F2E9DC', '#D8B98F'], strata: ['#EBDDC9', '#DCC09A', '#C99E6F', '#B56C42', '#8A4F30'], contour: '#8A4F30' },
  tide:      { base: ['#E9E2D7', '#A9B0AB'], strata: ['#DDD6C9', '#BFC4BB', '#9BA9A4', '#7B8E8F', '#516A72'], contour: '#516A72' },
  mineral:   { base: ['#EDE3D4', '#B79A7E'], strata: ['#E2D3BF', '#CBAE92', '#A9836A', '#7E5642', '#4A2F25'], contour: '#6A4638' },
  manifesto: { base: ['#E7DCCC', '#9C8975'], strata: ['#DCCBB4', '#C6A988', '#A98C72', '#8A6A55', '#5E6E72'], contour: '#6A4638' },
  deep:      { base: ['#2C2320', '#171210'], strata: ['#3A2C23', '#4A3528', '#5C4030', '#6A4638', '#7A4E33'], contour: '#B56C42' },
} as const satisfies Record<string, Palette>;

export type TextureVariant = keyof typeof palettes;

/** dimensions du canevas de génération (espace utilisateur SVG) */
export const TEXTURE_WIDTH = 800;
export const TEXTURE_HEIGHT = 1000;

export interface TextureBand {
  /** chemin de l'arête supérieure (la strate remplit jusqu'au bas) */
  d: string;
  color: string;
  opacity: string;
}

export interface TextureGeometry {
  width: number;
  height: number;
  base: readonly [string, string];
  contourColor: string;
  bands: TextureBand[];
  contours: string[];
}

/** PRNG déterministe (mulberry32) */
export function mulberry32(seed: number): () => number {
  let s = seed;
  return function () {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Courbe horizontale ondulante déterministe (somme de sinus + inclinaison),
 * lissée en Bézier (Catmull-Rom). Renvoie un chemin SVG ouvert.
 */
export function wave(
  rng: () => number,
  y: number,
  width = TEXTURE_WIDTH,
): string {
  const segments = 6;
  const amp1 = 30 + rng() * 70;
  const amp2 = 10 + rng() * 30;
  const ph1 = rng() * Math.PI * 2;
  const ph2 = rng() * Math.PI * 2;
  const tilt = (rng() - 0.5) * 120;

  const pts: [number, number][] = [];
  for (let i = 0; i <= segments; i++) {
    const x = -120 + (i / segments) * (width + 240);
    const k = i / segments;
    const yy =
      y + tilt * (k - 0.5) +
      Math.sin(k * Math.PI * 2 + ph1) * amp1 +
      Math.sin(k * Math.PI * 4 + ph2) * amp2;
    pts.push([x, yy]);
  }

  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(pts.length - 1, i + 2)];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d;
}

/**
 * Génère la géométrie complète d'une texture pour un variant + seed donnés.
 * Sortie pure : à passer telle quelle au rendu SVG.
 */
export function generateTexture(
  variant: TextureVariant = 'estuary',
  seed = 7,
): TextureGeometry {
  const palette = palettes[variant];
  const rng = mulberry32(seed * 2654435761);
  const W = TEXTURE_WIDTH;
  const H = TEXTURE_HEIGHT;
  const count = 7;

  const bands: TextureBand[] = Array.from({ length: count }, (_, i) => {
    const y = (i / count) * H + (rng() - 0.5) * 40;
    const color = palette.strata[
      Math.min(palette.strata.length - 1, Math.floor((i / count) * palette.strata.length))
    ];
    return { d: wave(rng, y, W), color, opacity: (0.55 + (i / count) * 0.4).toFixed(3) };
  });

  const contours = Array.from({ length: 5 }, (_, i) => wave(rng, (i + 0.5) * (H / 5), W));

  return { width: W, height: H, base: palette.base, contourColor: palette.contour, bands, contours };
}
