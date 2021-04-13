const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');

const vehicleRoutes = require('./routes/vehicle');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/car', vehicleRoutes);

app.use('/auth', authRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(
    'mongodb+srv://autovault:autovault123@cluster0.xn1jn.mongodb.net/auto-vault?retryWrites=true&w=majority'
  )
  .then((result) => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
