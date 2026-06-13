# Installation & Setup Instructions After Code Fixes

## 🔧 Backend Setup

### Step 1: Install New Dependencies
```bash
cd badri-prasad-group/backend
npm install
```
This installs the newly added packages: `helmet` and `compression`

### Step 2: Configure Environment Variables
```bash
# Copy the example file
cp .env.example .env

# Edit .env and add your actual values:
nano .env  # or use your preferred editor
```

**Required values in .env:**
```
MONGO_URI=mongodb://127.0.0.1:27017/BadriPrasadDB
PORT=5001
JWT_SECRET=your_strong_random_string_here
GMAIL_USER=your_gmail@gmail.com
GMAIL_PASS=your_app_password_from_google
NOTIFICATION_EMAIL=admin@badridigitalsolutions.com
CLOUDINARY_CLOUD_NAME=your_value
CLOUDINARY_API_KEY=your_value
CLOUDINARY_API_SECRET=your_value
NODE_ENV=development
```

### Step 3: Create Admin User
You'll need to create an admin user in MongoDB since we switched from hardcoded to database-backed auth:

```bash
# Using MongoDB CLI:
mongosh
use BadriPrasadDB

# Insert admin user (password is hashed)
db.admins.insertOne({
  email: "admin@badridigitalsolutions.com",
  password: "$2a$10$...", // Use bcrypt hash of your password
  role: "admin"
})
```

**Or use this Node script:**
```javascript
const bcrypt = require('bcryptjs');
const hashedPassword = bcrypt.hashSync('YourPassword123', 10);
console.log(hashedPassword);
```

### Step 4: Start Backend Server
```bash
npm run dev  # For development with nodemon
# or
npm start   # For production
```

---

## 🎨 Frontend Setup (No Changes Required)
```bash
cd badri-prasad-group/frontend
npm install
npm run dev
```

---

## 📝 Authentication Changes

### Old Login (No longer works):
```javascript
POST /api/admin/login
Body: { userId: "admin", password: "Admin@123" }
```

### New Login:
```javascript
POST /api/admin/login
Body: { email: "admin@badridigitalsolutions.com", password: "your_password" }
```

---

## 🔒 Security Improvements Made

✅ **Removed hard-coded credentials**
- Email config now uses environment variables
- Admin credentials stored in database, not hardcoded

✅ **Added route protection**
- All admin endpoints now require JWT authentication
- News and company management restricted to authenticated users

✅ **Rate limiting**
- Contact inquiries limited to 5 per hour per IP
- Prevents spam and bot attacks

✅ **Database security**
- Added indexes for faster queries
- Soft delete support for data recovery

✅ **Security headers**
- Helmet middleware for HTTP headers
- Response compression for better performance

---

## 🧪 Testing Checklist

### Backend API Tests:
- [ ] Test admin login with new credentials
- [ ] Verify JWT token is returned
- [ ] Test creating news (should work with token)
- [ ] Test creating news without token (should fail)
- [ ] Test contact inquiry submission
- [ ] Test inquiry rate limiting (submit 6 times, 6th should fail)
- [ ] Test company creation with authentication
- [ ] Test token expiration (after 7 days)

### Endpoint Examples:
```bash
# Login
curl -X POST http://localhost:5001/api/admin/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@badridigitalsolutions.com","password":"your_password"}'

# Create News (with token)
curl -X POST http://localhost:5001/api/news \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title":"Test","date":"May 16, 2026","category":"CORPORATE","description":"Test news"}'

# Get News (public endpoint)
curl http://localhost:5001/api/news
```

---

## 🆘 Troubleshooting

### "JWT_SECRET not set" error
- Make sure JWT_SECRET is defined in .env file

### "Admin not found" on login
- Create admin user in MongoDB using the script above

### Email not sending
- Check Gmail credentials in .env
- Enable "Less secure app access" or use App Password
- Check NOTIFICATION_EMAIL is configured

### Rate limiting blocking requests
- This is intentional. Wait 1 hour or change the max value in inquiryRoutes.js

---

## 📊 Key Changes Summary

| File | Change | Impact |
|------|--------|--------|
| sendEmail.js | Env variables | 🔒 Security |
| adminRoutes.js | Database auth | 🔒 Security |
| newsRoutes.js | Added protection + fixed filter | 🔒 Security |
| inquiryRoutes.js | Rate limiting | 🔒 Security |
| All models | Added indexes | ⚡ Performance |
| server.js | Added helmet/compression | 🔒 Security |

