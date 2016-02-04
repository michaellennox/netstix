var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var achievementSchema = new Schema({
  title       : String,
  criteria    : String,
  points      : { type: Number, default: 0},
  badgeLink   : { type: String, default: '/images/badges/nobadge.png' },
  submissions : [{ type: ObjectId, ref: 'Submission' }]
});

module.exports = mongoose.model('Achievement', achievementSchema);
