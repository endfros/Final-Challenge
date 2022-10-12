import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLenght: 3,
        maxLenght: 100,
        trim: true
    },
    username: {
        type: String,
        required: true,
        minLenght: 3,
        maxLenght: 100,
        trim: true
    },
    img: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: /.*@.*\..*/
    },
    password: {
        type: String,
        required: true
    },
    company: {
        name: {
            type: String,
            required: true,
            minLenght: 3,
            maxLenght: 20,
            trim: true,
            default: 'none'
        },
        img:{
            type: String,
            trim: true
        }
    }
})

const User = mongoose.model('users', userSchema )

export {User}