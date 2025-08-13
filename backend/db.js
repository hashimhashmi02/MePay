require('dotenv').config();

const mongoose = require('mongoose');

const mongoURL = process.env.MONGO_URI;
if (!mongoURL) {
  console.error('❌ MONGO_URI not defined in .env!');
  process.exit(1);
}

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50
  }
});


const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  },
  balance: {
    type: Number,
    required: true,
    default: 0
  }
});

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = {
  User,
  Account
};
