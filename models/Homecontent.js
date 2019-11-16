var mongoose = require('mongoose');

var HomecontentSchema = new mongoose.Schema({
  videotext: String,
  jp_videotext: String,
   overview: String,
jp_overview: String,
   updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('homecontent', HomecontentSchema);
