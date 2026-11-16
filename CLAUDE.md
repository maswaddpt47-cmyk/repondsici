# repondsici — redirection vers WoocLight

Annexe du dépôt `maswaddpt47-cmyk/PAPPERBOARD` (WoocLight), créée le 16/11/2026 :
l'abonnement gratuit d'Alwaysdata refuse un domaine propre sur le site, la
redirection passe donc par GitHub Pages (choix de l'utilisateur, 16/11/2026).

Règles communes de collaboration : MD-LIB/collaboration.md, chargé automatiquement
par MD-LIB/CLAUDE.md (04/11/2026). Ici, seulement ce qui est propre au projet.

- **Publication** : GitHub Pages depuis `main` (Main toujours). Le test
  `node tests/redirection.js` tourne en CI à chaque push.
- **AGORA** : pas d'`AGORA.md` propre, ce dépôt partage celui de PAPPERBOARD
  (MD-LIB `CLAUDE.md`, exception du jumeau).
- **Chiffres** : aucun chiffre prévu au 16/11/2026, parce que la page ne compte
  rien et n'enregistre rien.
- **RGPD** : GitHub (Microsoft, États-Unis) voit l'adresse IP des participants
  qui passent par `repondsici.fr` (mineurs compris) ; inscrit au registre de
  WoocLight (`PAPPERBOARD/docs/registre-traitement.md`). Jamais d'outil de
  statistiques, de police ou de script externe ici.
- La regex du code suit `WL_CODE_CHARS` et le `.htaccess` de PAPPERBOARD : les
  changer ensemble.
