# API Documentation

## Base URLs
- Local: `http://localhost:5001/api`
- Staging: `https://staging-api.badriprasadgroup.com/api`
- Production: `https://bpg-backend-production.onrender.com/api`

## Existing Modules
### Admin/Auth
- `POST /admin/login`

### Companies
- `GET /companies/`
- `POST /companies/`
- `PUT /companies/:id`
- `GET /companies/fix-order`
- `GET /companies/seed`

### News
- `GET /news/`
- `GET /news/:id`
- `POST /news/`
- `PUT /news/:id`
- `DELETE /news/:id`

### Careers
- `GET /careers/`
- `POST /careers/`
- `DELETE /careers/:id`

### Inquiries / Contact
- `GET /inquiries/`
- `POST /inquiries/`
- `DELETE /inquiries/:id`
- `POST /contact/`

### Investors
- `GET /investors/`
- `POST /investors/reports`
- `PUT /investors/metrics`
- `DELETE /investors/reports/:id`

### Leadership
- `GET /leadership/`
- `POST /leadership/`
- `PUT /leadership/:id`
- `DELETE /leadership/:id`

## Future Target APIs
Document migration before changing existing endpoints.
