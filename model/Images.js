const mongoose = require("mongoose");
const schema = mongoose.Schema;
const imageSchema = schema({
  title: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: String,
  },
  image: {
    required: true,
    type: String,
  },
},{timestamps:true});

const Image = mongoose.model("Image",imageSchema);

module.exports = Image;

