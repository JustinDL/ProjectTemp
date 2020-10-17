
import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

// how to call from env file
// port in env file because it is hidden from front end
const PORT = process.env.PORT;

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

const urls = {
    1: {
        id: '1',
        target: 'https://markrabey.com',
        userId: '1',
        shortCode: 'xyz123',
    },
    2: {
        id: '2',
        target: 'https://stevesomeguy.com',
        userId: '2',
        shortCode: 'abc345',
    }

};


// cors -- teacher will get into it later
app.use(cors());


//routes in express
// every uri is a resource '/' is root resource
// often at least 2 get requests. one that gets everything and then some that get specific things

// read
app.get('/', (req, res) => {

    //res.send('Hello API');
    return res.send('Received GET request');

});
// create
app.post('/', (req, res) => {

    //res.send('Hello API');
    return res.send('Received POST request');

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

// web based aps are on port 80
app.listen(process.env.PORT, () => {
    console.log(`Week 4 is running on port ${process.env.PORT}!`);
});