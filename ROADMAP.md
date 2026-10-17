# Roadmap du CV en ligne

Cette roadmap privilégie l'impact sur une candidature avant les effets décoratifs.

## Décisions validées et réalisées

- [x] Préserver l'organisation du CV en rapprochant davantage son identité du portfolio.
- [x] Ajouter la signature FD. monochrome et son favicon.
- [x] Partager les trois typographies du portfolio : Unbounded, Space Grotesk et DM Mono.
- [x] Harmoniser les boutons pilules, les flèches, les pastilles et les bordures.
- [x] Reprendre les titres détourés et le motif orbital dans une version monochrome et statique.
- [x] Réduire les ombres et accentuer la hiérarchie avec la carte Profil inversée.
- [x] Utiliser environ 95 % de la largeur sur ordinateur et adapter la grille au grand écran.
- [x] Supprimer les deux boutons sous l'introduction et le lien Parcours de la navigation.
- [x] Remplacer le petit motif orbital par un emblème vectoriel « Think / Design / Build ».
- [x] Garder le blanc par défaut et le noir au choix, avec mémorisation.
- [x] Garder des effets discrets, accessibles au clavier et sans son.
- [x] Revenir au curseur natif pour une interaction précise et légère.

Le portfolio « FD. — Ctrl+Z My Life » porte les projets et l'univers créatif ; ce CV reste une page professionnelle concise.

## Phase 0 — Finitions rapides

Priorité : immédiate.

- [x] Ajouter un favicon SVG monochrome.
- [x] Supprimer le chargement Google Fonts en double.
- [ ] Ajouter un lien de téléchargement du CV PDF.
- [x] Ajouter `aria-live` aux retours du formulaire.
- [x] Ajouter un fallback `mailto:` au formulaire.
- [ ] Ajouter un honeypot anti-spam.
- [ ] Vérifier les restrictions de domaine et limites d'envoi EmailJS.
- [ ] Ajouter les métadonnées Open Graph.

Critères de fin : aucune erreur console, formulaire compréhensible au lecteur d'écran, partage social correctement prévisualisé.

## Phase 1 — Relier le CV et le portfolio

Priorité : très haute.

- [ ] Ajouter un lien vers l'adresse publique stable du portfolio, dès qu'elle est accessible sans connexion Vercel.
- [ ] Éventuellement citer une réalisation avec un lien vers son étude de cas dans le portfolio.
- [ ] Garder les coordonnées, le positionnement et le CV PDF cohérents entre les deux sites.
- [ ] Afficher clairement le type d'opportunité recherché.
- [ ] Fusionner l'introduction et le bloc Profil pour réduire la redondance.

Critères de fin : un visiteur peut identifier le positionnement, voir les meilleures réalisations et trouver un moyen de contact en moins d'une minute.

## Phase 2 — Préserver la parenté graphique

Priorité : haute.

- [x] Créer une signature ou un monogramme « FD. ».
- [x] Conserver les deux thèmes noir et blanc existants.
- [x] Ajouter une police monospace uniquement pour les micro-détails.
- [ ] Faire évoluer les détails communs si l'identité du portfolio change.

Critères de fin : le site reste sobre mais devient identifiable sans dépendre d'une couleur vive.

## Phase 3 — Micro-interactions

Priorité : moyenne.

- [x] Animer les liens et boutons au focus comme au survol.
- [x] Retirer le curseur personnalisé.
- [x] Vérifier le rendu avec `prefers-reduced-motion` pour cette version ; contrôle à renouveler après chaque évolution.
- [x] Ne pas ajouter de son.

Critères de fin : les interactions guident l'attention sans retarder la lecture ni dégrader l'accessibilité.

## Phase 4 — Performance et robustesse

Priorité : moyenne.

- [ ] Auto-héberger et sous-ensembler les polices WOFF2.
- [ ] Charger EmailJS seulement lorsque nécessaire.
- [ ] Ajouter une politique de sécurité du contenu adaptée à l'hébergement.
- [ ] Optimiser les futures images en AVIF/WebP avec dimensions explicites.
- [ ] Relancer Lighthouse sur le site publié.
- [ ] Tester au clavier, avec VoiceOver ou NVDA, et sur un vrai téléphone.

Objectifs indicatifs après publication :

- Performance : 95 ou plus.
- Accessibilité : 100.
- Bonnes pratiques : 100.
- SEO : 100.
- Aucun débordement horizontal entre 320 px et 1440 px.

## Phase 5 — Publication et mesure

Priorité : après validation du contenu.

- [ ] Choisir le nom de domaine.
- [ ] Ajouter l'URL canonique et les métadonnées définitives.
- [ ] Publier avec HTTPS.
- [ ] Vérifier tous les liens en production.
- [ ] Ajouter une mesure d'audience respectueuse de la vie privée uniquement si elle est utile.
- [ ] Mesurer les clics vers GitHub, LinkedIn, le CV et le formulaire.
- [ ] Mettre à jour les projets et disponibilités au fil du temps.

## Informations nécessaires pour avancer

- L'adresse publique stable du portfolio.
- Le type d'opportunité recherché actuellement.
- La décision sur l'affichage ou non de la photo professionnelle.
- Le CV PDF final à proposer au téléchargement.
