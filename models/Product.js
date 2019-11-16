var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  part_name: String,
  description: String,
  capacity: String,
  productimage: String,
  productimage_name: String,
  jp_part_name: String,
  jp_description: String,
  jp_capacity: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema);
