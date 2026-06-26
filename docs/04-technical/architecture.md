# System Architecture

## Stack
- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB / MongoDB Atlas
- Hosting: Vercel + Render
- Domain: Hostinger
- Email: Hostinger SMTP
- Uploads: Cloudinary

## Environment Flow
```txt
Local → Staging → Production
```

## Deployment Mapping
- `main` branch → Production
- `staging` branch → Staging
- `dev` branch → Local/development work

## Key Rule
Code moves from staging to production, but production data must remain production data.
