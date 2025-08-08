const mongoose =require("mongoose");

//connect to mongo
mongoose.connect("mongodb+srv://arnav30kulkarni:ShxEC38nWLRt8Vec@cluster0.kynwllg.mongodb.net/")

//schemas

const adminSchema = new mongoose.Schema({
 username:String,
 password:String
})

const userSchema = new mongoose.Schema({
username:String,
password:String,
purchasedCourses:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Course'
}]
})

const courseSchema = new mongoose.Schema({
    title:String,
    description:String,
    imageLink:String,
    price:Number,
})

const Admin = mongoose.model('admin',adminSchema);
const User = mongoose.model('user',userSchema);
const Course = mongoose.model('course',courseSchema);

module.exports = {
    Admin,
    User,
    Course
}