
const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken");

const User=require("../models/use-model");


async function register (req, res, next) {
    try{
        console.log(req.body)
        const{
            userName,
            website,
            password
        }=req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash=await bcrypt.hash(
            password,
            salt
        );
      
        const newUser=new User({
            userName,
            website,
            password:passwordHash
        });
        console.log(passwordHash);
        const savedUser=await newUser.save();
        res.status(201).json(savedUser);
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({
            message:"Something went wrong"
        })
    }
}

async function login(req,res,next){
    try {
        const {
            website,
            password
        }=req.body;

        const user=await User.findOne({email:email});
        if(!user)
        {
            return res.status(400).json({
                message:"User not found"
            })
        }
        const isMatch=await bcrypt.compare(
            password,
            user.password
        );
            
        if(!isMatch)
        {
            return res.status(400).json({
                message:"Invalid credentials"
            })
        }
        const token=jwt.sign(
            {id:user._id},
            "jwtpassword",
        );
        delete user.password;

        return res.status(200).json({
            token,
            user
        });



    } catch (error) {
        res.status(500).json({
            error:"Something went wrong"
        })
    }
}

module.exports = { register , login };
