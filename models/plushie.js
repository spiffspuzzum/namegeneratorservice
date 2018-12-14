const mongoose = require("mongoose");
const Joi = require("joi");

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

function validatePlushie(request) {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(255).required,
    prefix: Joi.boolean(),
    main: Joi.boolean(),
    suffix: Joi.boolean()
  };

  return Joi.validate(request, schema);
}

module.exports.Plushie = Plushie;
module.exports.validate = validatePlushie;
