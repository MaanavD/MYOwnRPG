//this is middleware. It happens in between a request and its resolution. Stops you if required or you haven't met the terms
module.exports = {
    register(req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex( //Joi basically formats input and won't let you get through if input is bad. It's for express
                new RegExp('^[a-zA-Z0-9]{5,32}$') //everything that's passed in has to be a-z, A-Z, 0-9 and 5-32 chars long
            )

        }
        const {
            error,
            value
        } = Joi.validate(req.body, schema)
        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address!'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: 'Your password must be 5-32 characters and only include alphanumeric characters!'
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
            }
        } else {
            next()
        }
    }
}