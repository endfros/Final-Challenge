//Configurar hash y compare
import bcrypt from 'bcrypt';

const saltRounds = 10

function hash(plainText) {
    return bcrypt.hash(plainText, saltRounds) //promesa
}

export default {
    ... bcrypt,
    hash
}