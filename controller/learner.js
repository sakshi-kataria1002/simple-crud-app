const Learner = require('../model/learner')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Joi = require('@hapi/joi')

exports.signUp = async (req,res) => {
    const emailExist = await Learner.findOne({email: req.body.email})

    if(emailExist){
        res.status(400).send("Email already exists")
        return;
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new Learner({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })

    try{
        const registrationSchema = Joi.object({
            name: Joi.string().min(3).max(255).required(),
            email: Joi.string().min(3).max(255).required().email(),
            password: Joi.string().min(8).max(255).required()
        })

        const {error} = await registrationSchema.validateAsync(req.body)

        if(error){
            res.status(400).send(error.details[0].message)
            return;
        }else{
            const saveUser = await user.save()
            res.status(200).send("User created successfully")
        }
    }catch(error){
        res.status(500).send(error)
    }
}

exports.logIn = async (req,res) => {
    const user = await Learner.findOne({email:req.body.email})
    if(!user) return res.status(400).send("Incorrect Email ID")

    const validatePassword = await bcrypt.compare(req.body.password, user.password)
    if(!validatePassword) return res.status(400).send("Incorrect Password")

    try{
        const loginSchema = Joi.object({
            email: Joi.string().min(3).required().email(),
            password: Joi.string().min(8).required()
        })

        const {error} = await loginSchema.validateAsync(req.body)

        if(error) return res.status(400).send(error.details[0].message)
        else{
            const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
            res.send(token)
        }
    }catch(error){
        res.status(500).send(error)
    }
}

exports.getAllUsers = async (req,res) => {
    const allUsers = await Learner.find()
    try{
        res.status(200).send(allUsers)
    }catch(error){
        res.status(500).send(error)
    }
}
