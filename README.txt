Mixx Radio SPA - React + Vite template
-------------------------------------

Contenu:
- projet React + Vite prêt à l'emploi
- player persistant (basé sur bottom_radioplayer2 concept), intégré et stylisé
- fond vidéo placeholder: src/assets/bg.mp4 (remplacer par vraie boucle vidéo optimisée 10-20s)
- logo: src/assets/logo.png (fourni)

Scripts:
- npm install
- npm run dev        -> lance le serveur en local
- npm run build      -> build production (dist/)
- npm run preview    -> preview build

Déploiement sur Vercel:
1) Connectez votre repo à Vercel ou upload du dossier
2) Vercel détectera vite et buildera le projet
3) Le player lit le flux: https://mixxfm.ice.infomaniak.ch/mixxfm-192.mp3
4) Pour récupérer les métadonnées en production, créez un proxy serveur pour l'API Infomaniak (ne pas exposer credentials côté client).

Notes:
- Les messages de contact sont sauvegardés en localStorage (JSON). Je peux ajouter une fonction serverless (Netlify/Vercel function) pour enregistrer côté serveur si tu veux.
