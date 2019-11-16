var mongoose = require('mongoose');

var CertificateSchema = new mongoose.Schema({
  productimage: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Certificate', CertificateSchema);
