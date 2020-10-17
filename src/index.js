
import 'dotenv/config';

import express from 'express';

const app = express();

// how to call from env file
// port in env file because it is hidden from front end
const PORT = process.env.PORT;

//routes in express
app.get('/', (req, res) => {

    res.send('Hello API');
    
});



// web based aps are on port 80
app.listen(process.env.PORT, () => {
    console.log(`Week 4 is running on port ${process.env.PORT}!`);
});