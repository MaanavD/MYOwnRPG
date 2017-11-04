const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthernticationControllerPolicy')
module.exports = (app) =>{
    app.post('/register', 
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
    }
