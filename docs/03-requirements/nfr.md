# NFR — Non-Functional Requirements

## Performance
- Homepage should load fast.
- API response target: under 1 second where possible.
- Images should be optimized.

## Security
- No secrets in GitHub.
- JWT secret must not be hardcoded.
- Passwords must be hashed.
- CORS should allow only valid frontend domains.
- Rate limiting should be enabled.
- Helmet should be enabled.

## Reliability
- Production DB separate from staging DB.
- Rollback plan required before production release.

## Compatibility
- Chrome, Edge, Safari basic checks.
- Mobile, tablet, laptop, desktop responsive checks.

## Maintainability
- Folder structure should be clear.
- APIs should be documented.
- Env variables should be documented.
