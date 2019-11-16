var mongoose = require('mongoose');

var HistorySchema = new mongoose.Schema({
  date: String,
  description: String,
  jp_description: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('History', HistorySchema);
