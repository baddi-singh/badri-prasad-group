# Database Schema Notes

## Required Databases
- Local: `BadriPrasadDB-local` or `badri-prasad-group-dev`
- Staging: `badri-prasad-group-staging`
- Production: `badri-prasad-group-production`

## Collections
- Admins
- Companies
- Applications
- Inquiries
- News
- Leadership
- Investors
- AuditLogs

## Rules
- Never use production DB for staging testing.
- Never seed production blindly.
- Password must be hashed.
- File upload URLs should be stored, not raw files.
