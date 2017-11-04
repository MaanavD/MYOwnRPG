const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options){
    const SALT_Factor = 8
    if(!user.changed('password')){
        return;
    }
    return bcrypt
    .genSaltAsync(SALT_Factor)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash =>{
        user.setDataValue('password', hash)
    })
}
//function that takes datatypes and returns / defines a user model
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email:{
            type: DataTypes.STRING,
            unique: true
        }, 
        password: DataTypes.STRING
    },{
        hooks:{
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
            beforeSave: hashPassword
        }
    })
    User.prototype.comparePassword = function (password) {
        return bcrypt.compareAsync(password, this.password)
    }

    return User
}