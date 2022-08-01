const Joi = require('@hapi/joi');

//signup validation 
const signupValidation = (data) => {
    const schema = new({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return Joi.ValidationError(data, schema)
};

//signin validation
const signinValidation = (data) => {
    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };
    return Joi.ValidationError(data, schema)
};

module.exports.signupValidation = signupValidation;
module.exports.signinValidation = signinValidation;