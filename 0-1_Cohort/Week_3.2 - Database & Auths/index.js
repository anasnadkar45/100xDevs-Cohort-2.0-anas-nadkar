// // const express = require('express');
// // const app = express();
// // const jwt = require('jsonwebtoken');
// // const jwtPassword = '123456';

// // // add json middleware to parse json requests
// // app.use(express.json());

// // // create a user object
// // const ALL_USERS =[
// //     {
// //         username: 'anas',
// //         password: 'nadkar-anas45',
// //         name : 'anas nadkar',
// //     },
// //     {
// //         username: 'vedant',
// //         password: '4crore-chaiye!!',
// //         name : 'vedant naralkar',
// //     },
// //     {
// //         username: 'shadab',
// //         password: 'gyan-matDeChal',
// //         name : 'shadab nadkar',
// //     },
// // ];

// // function userExists(username, password) {
// //     let userExists = false;
// //     //check if user exists
// //     const user = ALL_USERS.find(user => user.username === username || user.password === password);
    
// //     if(user){
// //         userExists = true;
// //     }
// //     return userExists;

// // }

// // app.post('/login', (req, res) => {
// //     // get username and password from request body
// //     const {username, password} = req.body;

// //     if(!userExists(username, password)){
// //         return res.status(400).json({
// //             message:"user does not exist in memory",
// //         })
// //     }else{
// //         const token = jwt.sign({ username }, jwtPassword);
// //         return res.status(400).json({
// //             message: "Login successful",
// //             token,
// //         });
// //     }
// // })

// // app.get('/users', (req, res) =>{
// //     const token = req.headers.authorization;
// //     try{
// //         const decoded = jwt.verify(token,jwtPassword);
// //         const username = decoded.username;
// //         res.json({
// //             users:ALL_USERS,
// //         })
// //     }catch(err){
// //         return res.status(403).json({
// //             msg:"Invalid token",
// //         });
// //     }
// // });

// // app.listen(3000);

// // --------------------------------------------------------------------------------------------------------------------
// // creating an full stack authentication server system
// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const zod = require('zod');

// const dbName = 'user_app';
// app.use(express.json());

// mongoose.connect(`mongodb+srv://anasnadkar23:Anasnadkar45%40@cluster0.wo2o0ul.mongodb.net/${dbName}`, {
  
// });

// const User = mongoose.model('User', {
//   username: String,
//   password: String,
//   name: String,
// });

// // Define Zod schema for user data with custom error messages
// const userSchema = zod.object({
//   username: zod.string().min(4, { message: "Username should be at least 4 characters long" })
//                       .max(20, { message: "Username cannot be more than 20 characters long" }),
//   password: zod.string().min(6, { message: "Password should be at least 6 characters long" }),
//   name: zod.string().min(2, { message: "Name should be at least 2 characters long" }),
// });

// app.post('/signup', async (req, res) => {
//   try {
//     // Validate request data against the Zod schema
//     const userData = userSchema.parse(req.body);

//     const existingUser = await User.findOne({ username: userData.username });
//     if (existingUser) {
//       return res.status(400).send("Username already in use");
//     }

//     const user = new User({
//       name: userData.name,
//       username: userData.username,
//       password: userData.password,
//     });

//     await user.save();
//     console.log('User saved successfully');
//     res.json({
//       message: "User saved successfully",
//     });
//   } catch (error) {
//     console.error('Error saving user:', error);

//     if (error instanceof zod.ZodError) {
//       // Zod validation error
//       res.status(400).json({
//         message: "Validation error",
//         details: error.errors.map(err => err.message),
//       });
//     } else {
//       // Other errors
//       res.status(500).json({
//         message: "Internal server error",
//       });
//     }
//   }
// });

// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });


// --------------------------------------------------------------------------------------------------------------------


