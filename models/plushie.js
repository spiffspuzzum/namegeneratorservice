const mongoose = require("mongoose");

const plushieSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 255,
    required: true,
    trim: true
  }
});

const Plushie = mongoose.model("Plushie", plushieSchema);

module.exports.Plushie = Plushie;
