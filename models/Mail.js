var mongoose = require('mongoose');

var MailSchema = new mongoose.Schema({
  title: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Mail', MailSchema);
 