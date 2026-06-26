# Deployment Flow

## Local
- Develop on local machine.
- Use local `.env`.
- Run frontend and backend locally.

## Staging
- Merge dev into staging.
- Deploy staging frontend/backend.
- Run smoke and regression tests.

## Production
- Backup main.
- Merge staging into main.
- Deploy production.
- Monitor logs and forms.

## Never Do
- Never commit `.env`.
- Never use staging database in production.
- Never seed production without approval.
