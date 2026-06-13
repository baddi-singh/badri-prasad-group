const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const password = 'GroupCEO2026';
const hashedPassword = bcrypt.hashSync(password, 10);

const adminSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true,
    index: true
  },
  password: { 
    type: String, 
    required: true
  },
  role: { 
    type: String, 
    enum: ['admin', 'moderator', 'viewer'],
    default: 'admin'
  }
}, { timestamps: true });

const Admin = mongoose.model('Admin', adminSchema);

async function createAdmin() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/BadriPrasadDB');
    console.log('✅ Connected to MongoDB');

    const existingAdmin = await Admin.findOne({ email: 'badri@badriprasad.com' });
    if (existingAdmin) {
      console.log('⚠️ Admin already exists, updating...');
      await Admin.updateOne({ email: 'badri@badriprasad.com' }, { password: hashedPassword });
    } else {
      console.log('✨ Creating new admin...');
      await Admin.create({
        email: 'badri@badriprasad.com',
        password: hashedPassword,
        role: 'admin'
      });
    }

    console.log('✅ Admin user ready!');
    await mongoose.connection.close();
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

createAdmin();
