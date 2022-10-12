import {Card} from '../models/card.models.js'

function getAll(){
    return Card.find({})
}

async function create (newCard){
    const {email, password} = newCard

    return Card.create({...newCard})
}

function update(idCard, unupdatedCard){
    return Card.findByIdAndUpdate(idCard, unupdatedCard, {new : true})
}

export {getAll, update, create}