const mongoose = require('mongoose');

const Thread = require('../models/thread');
const User = require('../models/user');

exports.createThread = async (req, res, next) => {
  try {
    const title = req.body.title;
    const category = req.body.category;
    const description = req.body.description;

    const thread = new Thread({
      title: title,
      category: category,
      description: description,
      creator: mongoose.Types.ObjectId(req.body.userId),
    });
    const createdThread = await thread.save();
    res.status(200).json({ createdThread: createdThread });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
