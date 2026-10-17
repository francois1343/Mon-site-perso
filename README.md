# CV en ligne — François Dhont

CV monopage de François Dhont, développeur Front-End junior, complémentaire du portfolio « FD. — Ctrl+Z My Life ».

## Objectif

Le site doit permettre à un recruteur ou à un futur collaborateur de comprendre rapidement :

- le positionnement Front-End ;
- les technologies utilisées ;
- les expériences transférables ;
- les moyens de prendre contact.

Le CV privilégie la lecture rapide des qualifications et la prise de contact. Les réalisations détaillées, les expérimentations et l'univers créatif restent dans le portfolio séparé.

## Direction actuelle

- Deux thèmes uniquement : blanc et noir.
- Thème blanc par défaut lors de la première visite.
- Esthétique géométrique et monochrome, issue du portfolio FD.
- Même trio typographique : Unbounded pour les titres, Space Grotesk pour le texte et DM Mono pour les repères.
- Nom en capitales, seconde ligne détourée et motif orbital statique inspirés du portfolio.
- Boutons pilules, flèches, pastilles à bordure fine et sections numérotées harmonisés.
- Organisation du CV conservée, avec une carte Profil en contraste inversé et des ombres légères.
- Curseur natif, transitions légères au survol et au clavier, sans son.
- Mise en page responsive sans framework.
- Formulaire de contact envoyé avec EmailJS.

## Technologies

- HTML5 sémantique
- CSS moderne
- JavaScript natif
- EmailJS
- Google Fonts

## Structure

```text
.
├── index.html       # Contenu et structure de la page
├── styles.css      # Thèmes, mise en page et responsive
├── script.js       # Thème et formulaire
├── favicon.svg     # Signature FD. monochrome
├── AUDIT.md        # Audit UX, visuel et technique
└── ROADMAP.md      # Plan d'amélioration priorisé
```

## Lancer le site localement

Depuis ce dossier :

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Puis ouvrir `http://127.0.0.1:4173/`.

## Principes de conception

1. Donner un accès rapide au parcours ; réserver les réalisations détaillées au portfolio.
2. Garder un contraste fort et une lecture rapide.
3. Utiliser l'animation pour guider l'attention, jamais pour ralentir.
4. Ne pas lancer de son automatiquement.
5. Respecter `prefers-reduced-motion` et la navigation au clavier.
6. Conserver une version mobile aussi claire que la version ordinateur.

## Qualité actuelle

Audit Lighthouse local indicatif de la version antérieure au rapprochement graphique (17 octobre 2026) :

| Catégorie | Score |
| --- | ---: |
| Performance | 94 |
| Accessibilité | 100 |
| Bonnes pratiques | 96 |
| SEO | 100 |

Les scores peuvent varier selon l'hébergement, le réseau et les services tiers.

Après l'uniformisation graphique avec le portfolio (Unbounded / Space Grotesk / DM Mono), la nouvelle mesure locale donne 91 en performance et 100 en accessibilité, bonnes pratiques et SEO. Les polices externes restent le principal point à optimiser ; aucun score de production n'est revendiqué.

Vérifications réalisées :

- Thèmes blanc et noir à 320, 390, 620, 768, 820, 1000 et 1440 px, sans débordement horizontal ni chevauchement du nom avec le motif orbital.
- Première visite blanche même si le système utilise le thème sombre.
- Conservation du choix après rechargement.
- Rendu visuel sur ordinateur et mobile, avec réduction des animations.
- Bouton de thème et repli e-mail utilisables lorsque le CDN EmailJS est bloqué.
- Favicon accessible et aucune exception JavaScript.

Les tests du formulaire n'ont envoyé aucun message réel ; la livraison des e-mails reste à vérifier avec la configuration EmailJS.

## Points connus

- Les projets et cas d'étude sont présentés dans le portfolio distinct.
- Les polices Google et EmailJS créent des dépendances externes.
- Le chargement des polices retarde légèrement le premier affichage.
- Le formulaire dispose d'un message d'état accessible et d'un lien e-mail de secours ; la protection anti-spam reste à prévoir.
- Les métadonnées de partage social ne sont pas encore configurées.

Voir [AUDIT.md](AUDIT.md) pour l'analyse complète et [ROADMAP.md](ROADMAP.md) pour les prochaines étapes.

## Choix validés

- Rapprocher plus nettement la direction artistique du CV de celle du portfolio, tout en conservant son rôle et son organisation.
- Blanc à la première visite, puis mémorisation du choix, indépendamment du thème système.
- Base visuelle commune avec FD. : typographies, signature, formes des boutons, bordures et détails graphiques.
- Interactions discrètes et aucune fonction sonore.
- L'audit initial est conservé comme historique ; la roadmap reflète ces décisions.

## Base visuelle commune

| Élément | CV en ligne | Portfolio |
| --- | --- | --- |
| Titres et signature | Unbounded, nom en partie détouré | Unbounded, grands titres en partie détourés |
| Texte et repères | Space Grotesk / DM Mono | Space Grotesk / DM Mono |
| Boutons et pastilles | Pilules monochromes, flèches et traits fins | Mêmes formes avec accents colorés |
| Motif orbital | Statique et monochrome, masqué sur petit écran | Plus expressif et animé |
| Couleurs et son | Blanc/noir, blanc par défaut, sans son | Univers coloré et expérience vinyle |
