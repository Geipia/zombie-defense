# 🧟 Zombie Defense

Tower defense en vagues infinies, fait pour iPhone : ouvre la page dans Safari, puis
**Partager → Sur l'écran d'accueil** pour l'installer comme une app (plein écran, hors connexion).

## Jouer

- Les zombies arrivent par la gauche et zigzaguent vers ta **base** (en bas à gauche).
- Appuie sur une tour dans le magasin (en bas), puis sur une case d'herbe pour la poser.
- Chaque zombie tué rapporte de l'argent 💰. Si un zombie atteint la base, tu perds des vies ❤️.
- Appuie sur une tour posée pour l'**améliorer** (5 niveaux) ou la **vendre**.
- Les vagues sont infinies et de plus en plus dures. Un boss toutes les 10 vagues.
- Lance la vague suivante en avance pour gagner un bonus d'argent.

## Tours

| Tour | Prix | Effet |
|---|---|---|
| 🏹 Arbalète | 50$ | tire très vite |
| 💣 Canon | 100$ | gros dégâts de zone |
| ❄️ Lance-givre | 75$ | ralentit les zombies |
| ⚡ Tesla | 150$ | foudre en chaîne (3 cibles) |

## Zombies

- **Zombie** : le classique
- **Coureur** (vague 3+) : rapide mais fragile
- **Tank** (vague 5+) : lent, très résistant, coûte 2 vies
- **Boss** (toutes les 10 vagues) : énorme, coûte 5 vies

## Modifier le jeu

Tout le jeu est dans `index.html`, en un seul fichier, commenté en français :

- `TOURS` : prix, dégâts, portée, cadence de chaque tour
- `ZOMBIES` : PV, vitesse, argent de chaque zombie
- `compositionVague()` : ce que contient chaque vague
- `CHEMIN` : le trajet des zombies sur la grille (`COLS` x `ROWS`)
