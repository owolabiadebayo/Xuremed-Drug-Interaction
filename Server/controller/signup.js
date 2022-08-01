// const {signupValidation} = require('../validation/validation')
const bcrypt = require('bcryptjs')
// const Register = require('../model/signup/signup')
import Register  from "../model/signup/signup"

export const signup = async (req, res) => {
    // validate the data
    // const error = signupValidation(req.body);
    // if (error) return res.status(400).send(error.details[0].message);
    // to check if the user is already in the database
    const emailExist = await Register.findOne({email:req.body.email});
    if(emailExist) return res.status(400).send('Email already exists');
   
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(req.body.password, salt);
    // create a new user
    const user = new Register ({
        email: req.body.email,
        password: hashpassword
    });
    try {
        const savedUser = await user.save()
        res.send({user:user._id})
    }catch(err){
        res.status(400).send(err)
    }
}