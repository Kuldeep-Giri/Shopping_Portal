const bcrypt = require('bcryptjs')

const hashPassword = async(password) =>{
    try {
        const salt = 10
        const hashPassword = await bcrypt.hash(password,salt)
        return hashPassword
    } catch (error) {
        console.log(error)
    }
}

const comparePassword = async(password,hashPassword)=>{
    return await bcrypt.compare(password,hashPassword)
}


module.exports = {hashPassword,comparePassword}