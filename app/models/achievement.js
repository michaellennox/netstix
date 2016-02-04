var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var achievementSchema = new Schema({
  title       : String,
  criteria    : String,
  points      : Number,
  badgeLink   : String,
  submissions : [{ type: ObjectId, ref: 'Submission' }]
});

module.exports = mongoose.model('Achievement', achievementSchema);
