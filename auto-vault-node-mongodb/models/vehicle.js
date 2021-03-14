const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema(
 {
    vin: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true,
    },
    vehicleType: {
        type: String,
        required: true,
    },
    vehicleBodyType: {
        type: String,
        required: true
    },
    transmissionType: {
        type: String,
        required: true
    },
    engine: {
        type: String,
        required: true
    },
    drivetrain: {
        type: String,
        required: true
    },
    fuelType: {
        type:String,
        required: true
    },
    imageUrl: [
        {
            type: String,
            required: true
        }
    ],
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    } 
 },
 { timestamps: true }
);

module.exports = mongoose.model('Vehicle', vehicleSchema);