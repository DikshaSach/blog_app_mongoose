const mongoose = require('mongoose');
const uuid = require('uuid');
mongoose.Promise = global.Promise;

const blogPostSchema = mongoose.Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: String, required: true}
    //created: {type: String, required: true}
});
// return the fields that you want exposed
blogPostSchema.methods.serialize = function(){
    return {
        id: uuid.v4(),
        title: this.title,
        content: this.content,
        author: this.author
        //created: this.created
    };
}
// all methods must be defined before we make call to model
const BlogPost = mongoose.model('BlogPost', blogPostSchema);
module.exports = {BlogPost};