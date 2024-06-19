const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const profileRouter = require('./routes/profile');

const app = express();

// Body parser middleware
app.use(bodyParser.json());

// Routes
app.use(registerRouter);
app.use(loginRouter);
app.use(profileRouter);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/user-login', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
