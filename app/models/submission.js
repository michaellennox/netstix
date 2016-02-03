var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var submissionSchema = new Schema({
  link        : String,
  comment     : String,
  achievement : { type: ObjectId, ref: 'Achievement' },
  user        : { type: ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Submission', submissionSchema);
