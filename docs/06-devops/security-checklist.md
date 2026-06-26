# Security Checklist

## Secrets
- [ ] `.env` not committed
- [ ] JWT secret not hardcoded
- [ ] Email password not hardcoded
- [ ] Cloudinary secret not exposed
- [ ] OpenAI key not exposed
- [ ] Admin password changed after seed

## Backend
- [ ] Helmet enabled
- [ ] CORS restricted
- [ ] Rate limiting enabled
- [ ] Admin routes protected
- [ ] Passwords hashed
- [ ] File upload validation exists

## Frontend
- [ ] No private secrets in VITE variables
- [ ] No API secret in browser bundle
- [ ] Forms validate input

## GitHub
- [ ] Git history checked for secrets
- [ ] Exposed secrets rotated
