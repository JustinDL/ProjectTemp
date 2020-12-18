import mongoose from 'mongoose';

import User from './user';
import Quote from './quotes';


const connectDb = () => {

    return mongoose.connect(process.env.DATABASE_URL, {

        useUnifiedTopology: true,
        useNewUrlParser: true,

    });
};


const models = { User, Quote };

export { connectDb };
export default models;
