var mongoose = require('mongoose');

var GlobalpresenceSchema = new mongoose.Schema({
  productimage: String,
  description: String,
  country: String,
  jp_description: String,
  jp_country: String,
   url: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Globalpresence', GlobalpresenceSchema);
