var mongoose = require('mongoose');

var EventsSchema = new mongoose.Schema({
  title: String,
  productimage: String,
  jp_title: String,
  event_name: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Events',EventsSchema);
