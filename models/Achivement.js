var mongoose = require('mongoose');

var AchSchema = new mongoose.Schema({
  productimage: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Achivment', AchSchema);
