import mongoose from 'mongoose';



const connectDb = () => {

    return mongoose.connect(process.env.DATABASE_URL, {

        useUnifiedTopology: true,
        useNewUrlParser: true,

    });
};

export { connectDb };
