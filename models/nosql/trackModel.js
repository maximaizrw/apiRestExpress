const mongoose = require("mongoose");

const TrackSchema = new mongoose.Schema({
    name: String,
    album: String,
    cover: String,
    artist: {
        name: String,
        nickname: String,
        nationality: String,
    },
    duration: {
        start: Number,
        end: Number
    },
    mediaId: mongoose.Types.ObjectId
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model("Track", TrackSchema);
