const express = require('express');
const app = express();

// add json middleware to parse json requests
app.use(express.json());

// create a user object
const USERS =[
    {
        username: 'anas',
        password: 'nadkar-anas45',
    },
    {
        username: 'vedant',
        password: '4crore-chaiye!!',
    },
    {
        username: 'shadab',
        password: 'gyan-matDeChal',
    },
];

app.post('/login', (req, res) => {
    // get username and password from request body
    const {username, password} = req.body;

    //check if user exists
    const user = USERS.find(user => user.username === username)

    // if user does not exi
    if(!user){
        return res.status(400).json({
            message:"user does not exist"
        })
    }

    if(user.password !== password){
        return res.status(400).json({
            message:"password is incorrect"
        })
    }

    res.json({message:"login success"})
})

app.listen(3000);