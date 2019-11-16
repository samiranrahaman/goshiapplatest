var mongoose = require('mongoose');

var EquipmentSchema = new mongoose.Schema({
  item_name: String,
  machine_name: String,
  qty: String, 
  jp_item_name: String,
  jp_machine_name: String,
  jp_qty: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Equipment', EquipmentSchema);
