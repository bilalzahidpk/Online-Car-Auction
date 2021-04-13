const mongoose = require('mongoose');

const User = require('../models/user');
const Vehicle = require('../models/vehicle');

const uploadS3 = require('../middleware/upload-image');

const imageUpload = uploadS3.fields([
  { name: 'pdfFile' },
  { name: 'images', maxCount: 10 },
]);

exports.addVehicle = (req, res, next) => {
  imageUpload(req, res, async (err) => {
    try {
      const make = req.body.make;
      const model = req.body.model;
      const year = req.body.year;
      const vin = req.body.vin;
      const color = req.body.color;
      const transmissionType = req.body.transmissionType;
      const mileage = req.body.mileage;
      const engineType = req.body.engineType;
      const auctionType = req.body.auctionType;
      const preBidPrice = req.body.preBidPrice;
      const comments = req.body.comments;
      const auctionTime = req.body.auctionTime;
      const images = req.files.images.map((image) => image.location);
      const pdfFile = req.files.pdfFile[0].location;
      const vehicle = new Vehicle({
        make: make,
        model: model,
        year: year,
        vin: vin,
        color: color,
        transmissionType: transmissionType,
        mileage: mileage,
        engineType: engineType,
        auctionType: auctionType,
        preBidPrice: preBidPrice,
        comments: comments,
        auctionTime: auctionTime,
        imageUrl: images,
        auctionSheet: pdfFile,
        creator: mongoose.Types.ObjectId(req.body.userId),
      });

      const postedVehicle = await vehicle.save();
      res
        .status(200)
        .json({ vehicle: postedVehicle, message: 'Vehicle Added!' });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  });
};
