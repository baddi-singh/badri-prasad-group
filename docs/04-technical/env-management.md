# Environment Management

## Local Frontend
```env
VITE_API_URL=http://localhost:5001/api
VITE_ENVIRONMENT=local
```

## Staging Frontend
```env
VITE_API_URL=https://staging-api.badriprasadgroup.com/api
VITE_ENVIRONMENT=staging
```

## Production Frontend
```env
VITE_API_URL=https://bpg-backend-production.onrender.com/api
VITE_ENVIRONMENT=production
```

## Backend Variables
```env
NODE_ENV=
PORT=
MONGO_URI=
JWT_SECRET=
JWT_EXPIRES_IN=
ADMIN_EMAIL=
ADMIN_PASSWORD=
ADMIN_NAME=
EMAIL_USER=
EMAIL_PASS=
NOTIFICATION_EMAIL=
SMTP_HOST=
SMTP_PORT=
SMTP_SECURE=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
FRONTEND_URL_DEV=
FRONTEND_URL_STAGING=
FRONTEND_URL_PROD=
```

## Security Rule
Never commit `.env` files. Commit only `.env.example` with placeholders.
