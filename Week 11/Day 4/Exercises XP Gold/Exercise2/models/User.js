const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

// Hash the password before saving the user
userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next();
    });
  });
});

const User = mongoose.model('User', userSchema);

module.exports = User;
