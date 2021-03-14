const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');

const bodyParser = require("body-parser");

const authRoutes = require('./routes/auth');

const app = express();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, uuidv4())
    }
});

const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
};

app.use(bodyParser.json());
app.use(
    multer({ storage: fileStorage, fileFilter: fileFilter }).any()
);
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(cors());


app.use('/auth', authRoutes);


app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
  });

mongoose.
    connect(
    'mongodb+srv://autovault:autovault123@cluster0.xn1jn.mongodb.net/auto-vault?retryWrites=true&w=majority'
    )
  .then(result => {
    app.listen(5000);
  })
  .catch(err => console.log(err))