import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    }
},
{
    timestamps: true,
    collection: 'Users',
},

);

userSchema.statics.findByEmail = async function (email) {
    let user = await this.findOne({ email })

    return user ? user: null;
};

const User = mongoose.model('User', userSchema);

export default User;