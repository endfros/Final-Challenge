import {User} from '../models/user.models.js'
import bcrypt from '../libs/bcrypt.js'

function getAll(){
    return User.find({})
}

async function create (newUser){
    const {name, username, userImg, email, password, company, companyImg} = newUser

    const userFound = await User.findOne({email})

    if(userFound) throw new Error('Ya existe un koder con este email')

    //Encriptar el password
    const encriptedPassword = await bcrypt.hash(password)

    return User.create({name, username, userImg, ...userFound, password: encriptedPassword, company, companyImg})
}

function update(idUser, unupdatedUser){
    return User.findByIdAndUpdate(idUser, unupdatedUser, {new : true})
}

export {getAll, update, create}