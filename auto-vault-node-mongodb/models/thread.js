const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const threadSchema = new Schema(
 {
    title: {
        type: String,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comments: [
        {
            type: Schema.Types.ObjectId, 
            ref: "Comment"
        }
    ]
 },
 { timestamps: true }
);

module.exports = mongoose.model('Thread', threadSchema);
