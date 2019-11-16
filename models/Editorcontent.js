var mongoose = require('mongoose');

var EdtorcontentSchema = new mongoose.Schema({
  productimage: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Edtorcontent', EdtorcontentSchema);
