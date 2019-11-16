var mongoose = require('mongoose');

var ManufacturingSchema = new mongoose.Schema({
  process: String,
  jp_process: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Manufacturing', ManufacturingSchema);
