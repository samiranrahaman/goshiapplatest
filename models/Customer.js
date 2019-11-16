var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  productimage: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Customer', CustomerSchema);
