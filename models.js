const mongoose = require('mongoose');
const uuid = require('uuid');
mongoose.Promise = global.Promise;

const blogPostSchema = mongoose.Schema({
    
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {firstName: String, lastName: String},
    dateCreated: {type: Date, default: Date.now}
});
// return the fields that you want exposed
blogPostSchema.methods.serialize = function(){
    return {
        id: this._id,
        title: this.title,
        content: this.content,
        author: this.author,
        dateCreated: this.dateCreated
    };
}
// all methods must be defined before we make call to model
const BlogPost = mongoose.model('BlogPost', blogPostSchema);
module.exports = {BlogPost};