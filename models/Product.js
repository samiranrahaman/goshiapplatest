var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  part_name: String,
  description: String,
  capacity: String,
  productimage: String,
  productimage_name: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema);
