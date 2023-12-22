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

// Input validation:-

const express = require('express');
const app = express();

app.use(express.json());

app.post('/health-checkup', function (req, res) {
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;

    res.send(`Length of an kidney: ${kidneysLength}`);

})

app.use((error, req, res, next) => {
    res.status(500).send("An error occurred")
})

app.listen(3000, () => {
    console.log('server listening on port 3000');
})
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

