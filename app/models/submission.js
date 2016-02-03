var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var submissionSchema = new Schema({
  link    : String,
  comment : String
});

module.exports = mongoose.model('Submission', submissionSchema);
