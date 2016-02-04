var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var achievementSchema = new Schema({
  title       : String,
  criteria    : String,
  points      : { type: Number, default: 0},
  badgeLink   : String,
  submissions : [{ type: ObjectId, ref: 'Submission' }]
});

module.exports = mongoose.model('Achievement', achievementSchema);
