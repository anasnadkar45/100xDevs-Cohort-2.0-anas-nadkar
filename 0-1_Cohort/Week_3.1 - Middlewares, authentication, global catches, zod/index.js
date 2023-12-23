// const express = require('express');
// const app = express();

// function userMiddleware(req, res, next) {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     if(username != 'anas' && password != 'pass'){
//         res.status(403).json({
//             message: 'invalid username or password',
//         })
//         return;
//     }
//     next();
// }

// function kidneyMiddleware(req, res, next) {
//     const kidneyId = req.query.kidneyId;
//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(411).json({
//             message: 'invalid kidneyId',
//         })
//         return;
//     }
//     next();
// }

// app.get(
//     "/health-checkup",
//     userMiddleware,
//     kidneyMiddleware,
//     function (req, res) {
//       // do something with kidney here
  
//       res.send("You are healthy");
//     }
//   );

// app.get(
//     '/health-checkup',
//     userMiddleware,
//     kidneyMiddleware,
//     function(req, res) {
//         // kidney replacement logic here

//         res.send("Your kidney has been replaced, you are healthy now");
//     }
// )

// // can consume the middleware in other routes as well
// app.get("/heart-check", userMiddleware, function (req, res) {
//     // do something with user here
//     res.send("Your heart is healthy");
//   });

// ------------------------------------------------------------------------------------------------

//Zod Input validation:-

// const express = require('express');
// const app = express();
// const zod = require('zod');

// const schema = zod.array(zod.number());

// app.use(express.json());

// app.post('/health-checkup', function (req, res) {
//     const kidneys = req.body.kidneys;
//     // const kidneysLength = kidneys.length;
//     // if (!kidneys || !Array.isArray(kidneys)) {
//     //     res.status(400).send({ error: 'Invalid or missing kidneys property in the request body.' });
//     //     return;
//     // }
//     const response = schema.safeParse(kidneys);
//     // res.send({
//     //     response
//     // })
//     // res.send(`Length of an kidney: ${kidneysLength}`);
//     if(!response.success){
//         res.status(411).json({
//             msg:"input is invalid"
//         })
//     }else{
//         res.send({
//             response
//         })
//     }
// })

// // app.use((error, req, res, next) => {
// //     res.status(500).send("An error occurred")
// // })

// app.listen(3000, () => {
//     console.log('server listening on port 3000');
// })

// --------------------------------------------------------------------------------------------------------------------

const zod = require('zod');
const express = require('express');
const app = express();

function validateInput(value) {
  const schema = zod.object({
    name: zod.string().min(2).max(20),
    age: zod.number().min(18).max(100),
    email: zod.string().email(),
    password: zod.string().min(8).max(20),
  });

  const response = schema.safeParse(value);
  return response;
}

app.post('/login' , function(req,res){
    
  const response = validateInput(req.body);
  if(!response.success){
            res.status(411).json({
                msg:"input is invalid"
            })
        }else{
            res.send({
                response
            })
        }
})

app.listen(3000)

// ------------------------------------------------------------------------------------------------
// schema for input validation in the context of social media


// const { z } = require('zod');

// const userProfileSchema = z.object({
//     username: z.string().min(3).max(20),
//     fullName: z.string().min(1).max(50),
//     bio: z.string().max(200),
//     email: z.string().email(),
//     avatarUrl: z.string().url(),
//     posts: z.array(z.object({
//         postId: z.string(),
//         content: z.string().max(280),
//         createdAt: z.date(),
//         likes: z.array(z.string()), // Assuming user IDs for likes
//         comments: z.array(z.object({
//             commentId: z.string(),
//             userId: z.string(),
//             content: z.string().max(140),
//             createdAt: z.date(),
//         })),
//     })),
// });

// // Example usage:
// const validProfileData = {
//     username: 'john_doe',
//     fullName: 'John Doe',
//     bio: 'Software Developer',
//     email: 'john@example.com',
//     avatarUrl: 'https://example.com/avatar.jpg',
//     posts: [
//         {
//             postId: 'post1',
//             content: 'This is a post!',
//             createdAt: new Date(),
//             likes: ['user1', 'user2'],
//             comments: [
//                 {
//                     commentId: 'comment1',
//                     userId: 'user3',
//                     content: 'Nice post!',
//                     createdAt: new Date(),
//                 },
//             ],
//         },
//     ],
// };

// const validationResult = userProfileSchema.safeParse(validProfileData);

// if (validationResult.success) {
//     console.log('Validation successful:', validationResult.data);
// } else {
//     console.error('Validation failed:', validationResult.error.errors);
// }

//------------------------------------------------------------------------------------------------
//Assignments : 1
// const express = require("express");

// const app = express();

// let count = 0;
// function countRequest(req, res, next) {
//   count++;
//   console.log(`Total requests : ${count}`);
//   next();
// }

// app.use(countRequest);
// app.listen(3000)

//------------------------------------------------------------------------------------------------
// Assignment : 2
// const express = require("express");
// const app = express();

// function timeMiddleware(req, res, next) {
//     const now = Date.now();
//     setTimeout(() => {
//         res.on('finish', ()=>{
//             const end = Date.now();
//             console.log(`Time Taken: ${end - now}ms`)
//         })
//         next();
//     },3000)
    
// }

// app.use(timeMiddleware);
// app.listen(3000);

