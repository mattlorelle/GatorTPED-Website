import mongoose from 'mongoose';

const EBmemSchema = mongoose.Schema({
    name: String,
    position: String,
    aboutMe: String,
    classOf: String,
    major: String,
    creator: String,
    picture: String,
})

var PostEBmem = mongoose.model('PostEBmem', EBmemSchema);

export default PostEBmem;