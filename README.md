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
- Thème noir par défaut lors de la première visite ; choix du blanc toujours disponible et mémorisé.
- Esthétique géométrique issue du portfolio FD., avec accents vert acide et violet sur une base sobre.
- Même trio typographique : Unbounded pour les titres, Space Grotesk pour le texte et DM Mono pour les repères.
- Nom en capitales, seconde ligne détourée et emblème vectoriel statique « Think / Design / Build » inspirés du portfolio.
- Boutons pilules, flèches, pastilles à bordure fine et sections numérotées harmonisés.
- Organisation du CV conservée, avec une carte Profil en contraste inversé, un filet violet et des ombres légères.
- Mise en page fluide occupant environ 95 % de l'écran sur ordinateur ; longueurs de texte limitées pour la lecture.
- Navigation simplifiée : seul Contact est conservé en haut, sans boutons sous l'introduction.
- Sur grand écran, les certifications et atouts sont côte à côte, et le contact utilise deux colonnes.
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
├── favicon.svg     # Signature FD. avec accent vert acide
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

- Thèmes blanc et noir de 320 à 2560 px, sans débordement horizontal ni chevauchement du nom avec l'emblème.
- Première visite noire même si le système utilise le thème clair.
- Conservation du choix après rechargement.
- Contraste d'au moins 4,5:1 sur les textes accentués et le bouton d'envoi dans les deux thèmes.
- Valeur de préférence invalide ou stockage local bloqué : noir par défaut, sélecteur toujours utilisable.
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
- Noir à la première visite, puis mémorisation du choix, indépendamment du thème système.
- Accents du portfolio : vert acide `#D8FF36` et violet `#9C8CFF` dans le thème sombre, avec des variantes plus foncées pour les petits textes en thème clair.
- Base visuelle commune avec FD. : typographies, signature, formes des boutons, bordures et détails graphiques.
- Interactions discrètes et aucune fonction sonore.
- L'audit initial est conservé comme historique ; la roadmap reflète ces décisions.

## Base visuelle commune

| Élément | CV en ligne | Portfolio |
| --- | --- | --- |
| Titres et signature | Unbounded, nom en partie détouré | Unbounded, grands titres en partie détourés |
| Texte et repères | Space Grotesk / DM Mono | Space Grotesk / DM Mono |
| Boutons et pastilles | Bouton d'envoi vert acide, flèches et traits fins | Mêmes formes avec accents colorés |
| Emblème du processus | Disque FD., point vert, repères et flux violets, statique et visible sur ordinateur | Univers orbital plus expressif et animé |
| Couleurs et son | Noir par défaut, blanc au choix, accents vert/violet, sans son | Univers coloré et expérience vinyle |
