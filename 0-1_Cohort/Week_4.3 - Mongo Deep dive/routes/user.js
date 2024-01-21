const { Router } = require('express');
const userMiddleware = require('../middleware/user');
const { User , Course } = require('../db');
const { mongoose } = require('mongoose');
const router = Router();

// Admin Routes 
router.post('/signup',async(req, res) => {
    //implement the user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username: username,
        password: password
    })
    res.json({
        msg:"user created successfully"
    })
})

router.get('/courses',async(req, res) => {
    const response = await Course.find({})
    res.json({
        courses: response
    })
})

router.post('/courses/:courseId',userMiddleware,async(req, res) => {
    //implement the course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    await User.updateOne({
        username:username
    },{
       "$push":{
        purchasedCourses: courseId
       }
    })
    res.json({
        message:"purchased completed"
    })
});

router.get('/purchasedCourses',userMiddleware,async(req, res) => {
    //implement the fetching purchased course logic
    const user = await User.findOne({
        username: req.headers.username
    });

    const courses = await Course.find({
        _id:{
            '$in':user.purchasedCourses
        }
    })
    res.json({
        courses: courses
    })
});

module.exports = router;