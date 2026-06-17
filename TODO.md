# TODO — réglages à revisiter

## Hero (colonne image)
- [ ] **Résolution de l'image** : `src/assets/hero.jpg` = 675 × 1200 px. L'image
      déborde (`md:-mr-[2vw]`) et subit un zoom lent (scale 1.12) → sur grand écran /
      retina elle peut paraître un peu douce. Idéalement fournir une source
      ~2000 px de large (le poids n'a pas d'importance, Astro réoptimise).
- [ ] **Intensité de la parallaxe** : attribut `data-parallax-speed="0.1"` sur
      `.media__parallax` dans le hero (`src/pages/[lang]/index.astro`). À régler
      entre ~0.06 et ~0.15 selon le ressenti.
- [ ] **Débordement / cadrage** : marge `md:-mr-[2vw]` + ratios `aspect-[4/5]`
      (mobile) et `md:h-[min(70vh,640px)]` (desktop). À réajuster avec le cadrage
      réel de la photo.
- [ ] **Image seule vs overlay** : le hero affiche la photo seule. Décider si on
      ajoute un léger grain/voile éditorial pour cohérence avec les sections à
      textures génératives.
- [ ] **Légende / crédit** : l'ancienne légende « Estuaire — I » (liée à la texture
      générée) a été retirée. Ajouter une légende ou un crédit photo si nécessaire.

## Sections suivantes (à construire)
- [ ] Citation sombre, cartes « axes » (3 textures distinctes), mission : choisir
      pour chacune **texture générative** (`Texture.astro`) ou **photo**.
