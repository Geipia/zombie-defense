# Zombie Defense - Les Trois Couronnes

Jeu de défense contre des hordes de zombies, en arène verticale à deux voies. Interface française, pensé pour iPhone, entièrement dessiné sur canvas sans ressource externe.

Jouer : https://geipia.github.io/zombie-defense/

Sur iPhone : ouvrir dans Safari, puis **Partager > Sur l'écran d'accueil**. Le jeu fonctionne hors connexion après son premier chargement en ligne.

## Le principe

- Deux tours de princesses (680 PV chacune) et une tour du roi (1150 PV) tirent toutes seules.
- Perdre une princesse ouvre sa voie. Seule la destruction du roi termine la partie.
- Préparation sans chrono entre les hordes, avec aperçu exact de la suivante.
- Un deck de 6 cartes, 4 cartes en main et une carte suivante visible. La carte jouée revient en fin de cycle.
- Toucher une carte, puis une place libre dans la moitié basse pour déployer. Pas de déploiement avant de lancer la horde.
- Élixir : maximum 10, régénération de 1 toutes les 2,4 secondes. La pause arrête le combat et la régénération.
- Les renforts restent dans ton camp. Ils ont une durée de vie limitée et repartent entre deux hordes, pour éviter l'accumulation illimitée. Maximum 14 unités ou bâtiments simultanés.
- Les tours survivantes récupèrent 8 % de leurs PV maximum après une horde gagnée. Une tour détruite ne revient pas.
- Hordes infinies, avec coureurs, tanks et un boss toutes les 5 hordes. Le premier boss a 900 PV.

## Cartes (niveau 1)

| Carte | Élixir | PV | Dégâts par coup | Durée | Rôle |
| --- | ---: | ---: | ---: | ---: | --- |
| Arbalète | 3 | 250 | 19 | 38 s | Tirs rapides, cible unique |
| Canon | 5 | 330 | 57 | 38 s | Explosion de zone |
| Givre | 3 | 205 | 9 | 34 s | Ralentissement de 45 % pendant 2 s |
| Palissade | 2 | 460 | 0 | 28 s | Mur pour absorber les coups |
| Gardes | 3 | 180 chacun | 23 chacun | 32 s | Deux combattants au contact |
| Archères | 3 | 115 chacune | 17 chacune | 32 s | Deux tireuses mobiles |
| Tesla | 5 | 300 | 29 par cible | 38 s | Jusqu'à trois cibles proches |
| Rempart | 4 | 1150 | 0 | 35 s | Mur lourd |

Les six premières cartes sont disponibles au départ. Tesla : tenir la horde 3 puis payer 100 or. Rempart : tenir la horde 6 puis payer 140 or. Dans **Deck & collection**, choisir un emplacement puis équiper une carte débloquée. Le deck ne peut contenir aucun doublon.

## Progression

80 or au départ. Éliminations : 3 or par zombie/coureur, 7 par tank, 25 par boss. Prime de horde : 25 + 5 × numéro de horde.

Les cartes montent du niveau 1 au niveau 5. Chaque niveau ajoute 18 % des PV et dégâts de base. Coûts successifs : 60, 240, 540 et 960 or. Amélioration et changement du deck uniquement hors combat. Aucun achat réel.

Or, collection, deck, niveaux et record restent après une défaite ou un redémarrage. La partie se sauvegarde automatiquement et reprend en pause après rechargement.

Les nouvelles données utilisent `zd_royale_profil_v15` et `zd_royale_partie_v15`. L'ancienne sauvegarde `zd_save` est conservée, mais n'est pas chargée dans ce nouveau mode. Effacer les données du navigateur efface la progression locale.

## Modifier le jeu

Le jeu reste dans `index.html`, avec commentaires français. Les constantes au début du script définissent les cartes, zombies, coûts, PV et cadence d'élixir. Le service worker `sw.js` assure le cache hors ligne (v15).
