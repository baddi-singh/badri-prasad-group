# FRD — Functional Requirement Document

## Homepage
- Show hero section.
- Show group companies.
- Show services.
- Show trust/proof section.
- Show contact CTA.

## Companies
Each company card should include:
- Logo
- Name
- Category
- Tagline
- Short description
- Status
- Visit Website button
- Explore More button

## Contact Form
Required fields:
- Name
- Email or phone
- Message

Expected behavior:
- Validate required fields.
- Submit to backend.
- Save data in database.
- Show success message.
- Notify admin by email if email is configured.

## Careers
- Applicant can submit application.
- Resume upload should use Cloudinary if configured.
- Admin can view applications.

## Admin
- Admin login with email/password.
- Password must be hashed.
- JWT token used for protected routes.
- Admin can view dashboard data.
