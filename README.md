Mixx Radio Charleroi - Next.js (Vercel-ready)
===========================================

This project is configured to be deployed on Vercel. It includes a serverless API route to fetch Now Playing
metadata from Infomaniak using your INFOMANIAK_TOKEN secret.

Required environment variables (set in Vercel Project Settings > Environment Variables):
- INFOMANIAK_TOKEN  (your Infomaniak token)
- RADIO_ID (7391)
- NEXT_PUBLIC_STREAM_URL (https://mixxfm.ice.infomaniak.ch/mixxfm-96.mp3)

Quick deploy steps (push to GitHub and import to Vercel):
1. Initialize Git locally and push to your GitHub repo (replace GITHUB_TOKEN with a personal access token with repo permissions):
   git init
   git add .
   git commit -m "Initial Mixx Radio Next.js"
   git branch -M main
   git remote add origin https://<GITHUB_TOKEN>@github.com/mixxfm1076/mixxradio-spa.git
   git push -u origin main

2. In Vercel, import the GitHub repository and set Environment Variables mentioned above.
3. Deploy — Vercel will build and publish the site; the Player will fetch /api/nowplaying server-side.

Security notes:
- Do not commit secrets in the repo. Use Vercel Environment Variables or GitHub Secrets for CI workflows.
- The _INFOMANIAK_TOKEN_ must remain private.

