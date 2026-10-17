# Audit du portfolio

Date de l'audit initial : 17 octobre 2026.

> Évolution de la DA : à la demande de François, le rapprochement avec le portfolio a ensuite été renforcé. Les deux sites partagent désormais Unbounded, Space Grotesk, DM Mono, les boutons pilules, les titres détourés et les motifs orbitaux. Le CV conserve ses deux thèmes blanc/noir, son organisation et des interactions discrètes sans son. Les propositions typographiques ci-dessous décrivent l'état et les pistes de l'audit initial.

> Audit initial conservé pour référence. Depuis cet audit, la direction retenue est celle d'un CV distinct du portfolio : rapprochement graphique léger, signature FD., blanc/noir et effets discrets sans son. Le favicon, les détails communs, la suppression du double chargement des polices et les retours accessibles du formulaire ont été intégrés. Consulter la roadmap pour l'état à jour ; les anciennes suggestions de galerie de projets ne sont plus l'objectif de ce site.

## Synthèse

La base est saine, rapide et accessible. Le site présente correctement le CV, mais il ne démontre pas encore suffisamment le travail de Front-End. La priorité n'est pas d'ajouter davantage de technologies ou d'effets : il faut montrer 2 à 4 projets concrets, expliquer les choix réalisés et proposer un parcours de visite plus narratif.

## Mesures techniques

Audit Lighthouse local indicatif :

| Catégorie | Score | Lecture |
| --- | ---: | --- |
| Performance | 94 | Très bon |
| Accessibilité | 100 | Excellent |
| Bonnes pratiques | 96 | Très bon |
| SEO | 100 | Excellent |

Métriques relevées :

- First Contentful Paint : environ 2,5 s.
- Largest Contentful Paint : environ 2,5 s.
- Total Blocking Time : 0 ms.
- Cumulative Layout Shift : 0,001.
- Speed Index : environ 2,7 s.

Ces mesures ont été prises sur un serveur local. Elles servent de repère et devront être renouvelées après déploiement.

## Ce qui fonctionne bien

- HTML simple, lisible et maintenable.
- Aucun framework inutile pour une page de cette taille.
- Hiérarchie de titres cohérente.
- Excellent résultat d'accessibilité automatisée.
- Mise en page responsive sans débordement horizontal à 390 px.
- Deux thèmes cohérents, avec un choix persistant.
- Thème blanc utilisé par défaut.
- Respect de `prefers-reduced-motion`.
- Très faible temps de blocage JavaScript.
- Coordonnées adaptées à une publication publique.

## Problèmes prioritaires

### 1. Il manque des preuves de compétence

Une liste de technologies ne remplace pas une démonstration. Pour chaque projet, il faudrait présenter :

- une capture ou un mockup ;
- le problème résolu ;
- le rôle personnel ;
- la stack réellement utilisée ;
- une ou deux difficultés techniques ;
- un lien vers le site et le dépôt GitHub ;
- le résultat obtenu.

Sans projets, le site reste un CV en ligne. Avec trois bons cas d'étude, il devient un portfolio.

### 2. La page manque d'un parcours narratif

L'ordre recommandé :

1. Positionnement et disponibilité.
2. Projets sélectionnés.
3. Compétences expliquées par la pratique.
4. Parcours professionnel.
5. Contact et téléchargement du CV.

Le bloc « Profil » répète actuellement une partie de l'introduction. Il pourrait être fusionné avec le haut de page afin de raccourcir la lecture.

### 3. Le langage visuel est propre mais encore générique

Les nombreuses cartes arrondies donnent un rendu soigné, mais elles placent tous les contenus au même niveau. Une composition plus éditoriale créerait davantage de personnalité : grands titres, numérotation, lignes fines, grille visible et projets mis en scène.

### 4. Les dépendances externes ralentissent le premier affichage

Les polices Google constituent la chaîne critique principale. La feuille Google Fonts est aussi chargée à la fois dans le HTML et avec `@import` dans le CSS. Une seule méthode doit être conservée.

Recommandation : supprimer l'`@import`, puis envisager l'auto-hébergement de fichiers WOFF2 sous-ensemble Latin.

### 5. Le navigateur rencontre une erreur 404

Le favicon demandé n'existe pas. Cela explique l'alerte relevée dans la catégorie « Bonnes pratiques ». Ajouter un favicon SVG monochrome devrait permettre de corriger ce point.

### 6. Le formulaire doit être renforcé

- Ajouter une zone `aria-live` pour annoncer l'envoi, le succès ou l'erreur.
- Ajouter un champ honeypot invisible.
- Limiter les envois dans la configuration EmailJS.
- Restreindre les domaines autorisés côté EmailJS.
- Prévoir un lien `mailto:` si le service externe ne charge pas.
- Charger EmailJS uniquement quand le formulaire devient utile ou lors de sa soumission.

La clé publique EmailJS est nécessairement visible dans le navigateur ; la protection doit donc venir des restrictions et des limites de service, pas de son masquage dans le JavaScript.

## Direction visuelle recommandée

### Concept : « Éditorial technique »

L'ambiance peut mélanger la sobriété d'un CV imprimé et les codes d'un environnement de développement :

- grandes compositions typographiques ;
- grille fine et visible par endroits ;
- petits libellés techniques ou numéros de section ;
- captures de projets très présentes ;
- détails monospace utilisés avec parcimonie ;
- beaucoup d'espace vide ;
- moins de cartes, mais des blocs plus distinctifs.

### Couleurs

Conserver les deux thèmes demandés :

| Usage | Thème blanc | Thème noir |
| --- | --- | --- |
| Fond | `#F4F3EF` | `#080808` |
| Surface | `#FFFFFF` | `#141414` |
| Texte principal | `#101010` | `#F2F2EE` |
| Texte secondaire | `#62625E` | `#A3A39D` |
| Traits | `#D8D7D1` | `#2C2C2A` |

Il n'est pas nécessaire d'ajouter une couleur vive. La signature peut venir d'un contraste noir/blanc franc, d'un gris chaud, de la typographie et du traitement des images. Si un accent devait être testé plus tard, il devrait rester unique et optionnel.

### Typographie

- Conserver Playfair Display pour la personnalité éditoriale.
- Conserver DM Sans pour la lecture courante.
- Ajouter éventuellement une monospace uniquement pour les technologies, dates et micro-libellés.
- Limiter le nombre total de graisses chargées.

## Effets recommandés

Effets utiles :

- apparition légère des sections au défilement ;
- soulignement animé des liens ;
- transition douce des captures de projets au survol ;
- indicateur discret de progression dans la page ;
- transition de thème plus courte et plus précise ;
- mouvement très léger de la grille ou des mockups, uniquement au pointeur fin.

Effets à éviter :

- animations d'entrée longues ;
- texte qui se déplace en permanence ;
- parallaxe importante ;
- curseur trop visible ou difficile à suivre ;
- transitions de page artificielles sur un site monopage ;
- bibliothèques d'animation lourdes pour quelques mouvements simples.

Chaque animation doit disparaître lorsque `prefers-reduced-motion` est activé.

## Son

Recommandation : ne pas ajouter de son par défaut.

Dans un contexte de recrutement, l'autoplay est surprenant, gênant au bureau et difficile à justifier. Un son pourrait uniquement être envisagé comme expérience optionnelle : activation explicite, bouton muet visible, volume faible et aucune incidence sur la compréhension du site.

## Contenu à ajouter

- Une disponibilité claire : stage, emploi junior, freelance ou collaboration.
- Deux à quatre projets sélectionnés.
- Un bouton de téléchargement du CV PDF.
- Une courte phrase sur la manière de travailler.
- Des liens directs vers les démonstrations et dépôts.
- Une image sociale Open Graph.
- Un favicon et éventuellement une signature « FD ».

## SEO et partage

Le score SEO automatisé est excellent, mais le partage peut encore être amélioré avec :

- `og:title`, `og:description`, `og:image` et `og:url` ;
- les métadonnées Twitter Card ;
- une URL canonique après publication ;
- des données structurées `Person` ;
- un fichier `robots.txt` et un sitemap si le site gagne plusieurs pages.

## Conclusion

Le site n'a pas besoin d'une refonte spectaculaire. Il a besoin d'une meilleure hiérarchie, de projets concrets et de quelques détails de marque. La meilleure amélioration serait de transformer la page en une expérience courte et convaincante : « voici ce que je fais, voici comment je le fais, voici les preuves, contactez-moi ».
