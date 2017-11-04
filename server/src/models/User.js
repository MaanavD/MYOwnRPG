//function that takes datatypes and returns / defines a user model
module.exports = (sequelize, DataTypes) =>
    sequelize.define('User', {
        email:{
            type: DataTypes.STRING,
            unique: true
        }, 
        password: DataTypes.STRING
    })