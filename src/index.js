
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import post from './models/post';
import { models, Mongoose } from 'mongoose';
import myModels, { connectDb } from './models';
import Quote from './models/quotes';
import quoteRoutes from './routes/quote';



const app = express();

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/quote', quoteRoutes);
// requires bodyParser which allows server to read json from postman
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// requires post.js
const Post = require('./models/post');

// how to call from env file
// port in env file because it is hidden from front end
const PORT = process.env.PORT;

const eraseDataOnConnect = process.env.NODE_ENV !== 'production';

// database connection then run app listen
connectDb().then(async () => {
    if (eraseDataOnConnect){
        console.log('creating default data');
        await Promise.all([
            myModels.User.deleteMany({}), 
            myModels.Quote.deleteMany({}),
        ]);

        createUsersWithQuotes();
    }
    app.listen(process.env.PORT, () => {
        console.log(`Project is running on port ${process.env.PORT}!`);
    });
}).catch(err => {
    console.error(err.message);
});

const createUsersWithQuotes = async() =>{
    const user1 = new myModels.User({
        firstName: 'Justin',
        lastName: 'Lucas',
        email: 'random@email.com',
    });
    await user1.save();

    const quote1 = new myModels.Quote({
        quote: 'per aspera ad astra',
        author: 'John James Ingalls',
        userId: user1.id,
    });
    await quote1.save();
};


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



//routes in express
// every uri is a resource '/' is root resource
// often at least 2 get requests. one that gets everything and then some that get specific things

// read
app.get('/:userId', (req, res) => {



});



// create using post.js
app.post('/', (req, res) => {
    const id = uuidv4();
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


