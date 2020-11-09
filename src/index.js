
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import post from './models/post';
import { Mongoose } from 'mongoose';
import { connectDb } from './models';



const app = express();


// requires bodyParser which allows server to read json from postman
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// requires post.js
const Post = require('./models/post');

// how to call from env file
// port in env file because it is hidden from front end
const PORT = process.env.PORT;



// database connection then run app listen
connectDb().then(() => {

    app.listen(process.env.PORT, () => {
        console.log(`Project is running on port ${process.env.PORT}!`);
    });
});



// unused just an example
const users = {
    1: {
        id: '1',
        name: {
            first: 'Justin',
            last: 'Lucas',
        },
        email: 'justindavidlucas@gmail.com',
    },
    2: {
        id: '2',
        name: {
            first: 'dustin',
            last: 'ducas',
        },
        email: 'dustindavidducas@gmail.com',
    }

};



// cors -- teacher will get into it later
app.use(cors());


//routes in express
// every uri is a resource '/' is root resource
// often at least 2 get requests. one that gets everything and then some that get specific things

// read
app.get('/', (req, res) => {

    return res.send('Received GET request');

});



// create using post.js
app.post('/', (req, res) => {

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({
            message: err 
        });
    });
});





// update
app.put('/', (req, res) => {

    //res.send('Hello API');
    return res.send('Received PUT request');

});
// delete
app.delete('/', (req, res) => {

    //res.send('Hello API');
    return res.send('Received DELETE request');

});

// USERS
// read
app.get('/users/:userId', (req, res) => {

    //res.send('Hello API');
    return res.send(users[req.params.userId]);

});
// create
app.post('/users', (req, res) => {

    //res.send('Hello API');
    return res.send('Received POST users request');

});
// update
app.put('/users/:userId', (req, res) => {

    //res.send('Hello API');
    return res.send(`Received PUT users request on user/${req.params.userId}`);

});
// delete
app.delete('/users', (req, res) => {

    //res.send('Hello API');
    return res.send('Received DELETE users request');

});

