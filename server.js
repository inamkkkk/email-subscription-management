const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const subscriberRoutes = require('./routes/subscriberRoutes');
const emailRoutes = require('./routes/emailRoutes');
const authRoutes = require('./routes/authRoutes');
const { authenticate } = require('./middlewares/authMiddleware');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/auth', authRoutes);
app.use('/subscribers', authenticate, subscriberRoutes);
app.use('/emails', authenticate, emailRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});