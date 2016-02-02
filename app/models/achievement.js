var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var achievementSchema = new Schema({
  title    : String,
  criteria : String
});

module.exports = mongoose.model('Achievement', achievementSchema);
