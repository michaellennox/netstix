var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new Schema({
  username    : String,
  password    : String,
  submissions : [{ type: ObjectId, ref: 'Submission' }]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
