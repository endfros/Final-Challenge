import mongoose from 'mongoose'

const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLenght: 3,
        maxLenght: 30,
        trim: true
    },
    body: {
        type: String,
        required: true,
    },
    hashtags: [{
        type: String,
    }],
    img: {
        type: String,
        trim: true
    },
    reactions: {
        type: Number,
        required: true,
        default: 0
    },
    readingTime: {
        type: Number,
        required: true,
        default: 1
    },
    date:{
        type: Date, 
        default: Date.now
    },
    user:{
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
        company: {
            name: {
                type: String,
                required: true,
                minLenght: 3,
                maxLenght: 20,
                trim: true    
            },
            img:{
                type: String,
                trim: true
            }
        }
    },
    comment:[{
        date:{
            type: Date, 
            default: Date.now
        },
        user:{
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
            }
        },
        likes:{
            type: Number,
            required: true,
            default: 0
        },
        reply:[{
            date:{
                type: Date, 
                default: Date.now
            },
            user:{
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
                }
            },
            likes:{
                type: Number,
                required: true,
                default: 0
            }
        }]
    }]

})

const Card = mongoose.model('card', cardSchema )

export {Card}