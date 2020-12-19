import { Router } from 'express';
import Quote from '../models/quotes';


const router = Router();

router.get('/', async (req, res) => {
    const quotes = await Quote.find({});
    return res.send(quotes);
});

// read
router.get('/:userId', (req, res) => {



});

// create using post.js
router.post('/', async (req, res) => {
    
    const quote = new Quote(req.body);
    await EvalError.save();
    return res.send(quote);

});

//none of this fucking works i dont get it
export default router;