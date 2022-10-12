import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env

const URL = `mongodb+srv://fitbuddy:kodemia21js@cluster0.omtlseq.mongodb.net/?retryWrites=true&w=majority`
// mongodb+srv://fitbuddy:<password>@cluster0.omtlseq.mongodb.net/?retryWrites=true&w=majority


function connect(){
    return mongoose.connect(URL)
}

export default connect