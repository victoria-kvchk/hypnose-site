# TODO — réglages à revisiter

## Hero (image plein cadre, titre sur le sable)
- [ ] **Résolution de l'image** : `src/assets/hero.jpg` = 1200 × 675 px (paysage,
      pivotée 90° depuis l'original portrait). Affichée **plein écran** + zoom lent →
      sur grand écran / retina, 1200 px de large peut paraître doux. Idéalement
      fournir une source ~2400 px de large (poids sans importance, Astro réoptimise).
- [ ] **Cadrage / object-position** : `[object-position:28%_center]` garde le sable
      (gauche) sous le titre. À réajuster selon les breakpoints, surtout en **mobile**
      (l'image paysage est fortement recadrée dans un viewport haut).
- [ ] **Voile de lisibilité** : dégradé `from-sand/92 via-sand/45 to-transparent`.
      Vérifier le contraste du titre sur toute la largeur du bloc texte ; ajuster
      l'opacité/les arrêts si le titre déborde sur la zone sombre (vague).
- [ ] **Intensité de la parallaxe** : `data-parallax-speed="0.08"` sur
      `.media__parallax`. À régler entre ~0.05 et ~0.12.
- [ ] **Image seule vs overlay** : photo seule pour l'instant. Décider d'un léger
      grain/voile éditorial pour cohérence avec les sections à textures génératives.
- [ ] **Légende / crédit** : ajouter un crédit photo si nécessaire.

## Sections suivantes (à construire)
- [ ] Citation sombre, cartes « axes » (3 textures distinctes), mission : choisir
      pour chacune **texture générative** (`Texture.astro`) ou **photo**.
