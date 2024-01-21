const mongoose = require('mongoose');


// connect to mongoose
mongoose.connect('mongodb+srv://anasnadkar23:Anasnadkar45%40@cluster0.wo2o0ul.mongodb.net/course_selling_app')

//define schema
const AdminSchema = new mongoose.Schema({
    // schema definitions here
    username : String,
    password : String
});

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Course' 
    }]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageLink: String,
    price:Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);


module.exports = {
    Admin,
    User,
    Course
}
