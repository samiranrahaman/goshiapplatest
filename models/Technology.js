var mongoose = require('mongoose');

var TechnologySchema = new mongoose.Schema({
  description: String,
  productimage: String,
  jp_description: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Technology', TechnologySchema);
