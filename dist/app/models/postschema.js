var mongoose = require('mongoose');
var Schema = mongoose.Schema,
ObjectId = Schema.Types.ObjectId;

var PostSchema = new Schema({
    title: String,
    pre: String,
    thubnail:String,
    body: String,
    source: String
});

mongoose.model('Post', PostSchema);
