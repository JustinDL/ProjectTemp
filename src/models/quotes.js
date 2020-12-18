import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: true,

    },
    author: {
        type: String,
        required: true,

    },
    userId: String,
    }, 
{
    timestamps: true,
    collectgion: 'Quotes',
},

);

quoteSchema.statics.findByUserId = async function(userId){

    const quotes = await this.find({
        userId,
    });

    return quotes;
};

quoteSchema.statics.findByAuthor = async function(author){

    const authors = await this.find({
        author,
    });

    return authors;
};




const Quote = mongoose.model('Quote', quoteSchema);

export default Quote;