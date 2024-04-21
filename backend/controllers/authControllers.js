const User=require("../models/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const { CustomError } = require("../middlewares/error")





const registerController=async (req, res, next)=>{

    try{
        const{passWord,userName,email}=req.body
        console.log(passWord)
        console.log(userName)
        
        const existingUser=await User.findOne({$or:[{userName},{email}]})
        if(existingUser){
            throw new CustomError("le nom d'utilisateur ou l'adresse e-mail existe déjà",400);
           // res.status(400).json("le nom d'utilisateur ou l'adresse e-mail existe déjà")
        }else{
            const salt=await bcrypt.genSalt(10)
            const hashedpassword=await bcrypt.hash(passWord,salt) 
            const newUser=new User({...req.body,password: hashedpassword})
            const saveUser=await newUser.save()
            res.render('pages/regitration');
           // res.status(201).json(saveUser)
        }
    }catch(error){
        console.log(error);
        next(error);
       // res.status(500).json(error)
    } 
}

const loginController = async (req, res, next) => {
    console.log(req.body.email); 
    try {
        let user;
        if (req.body.email) {
            user = await User.findOne({ email: req.body.email });
        }
        if (!user) {
            throw new CustomError("Mauvaises qualifications!", 401);
        }

        // Compare passwords using bcrypt.compare
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) {
            throw new CustomError("Mauvaises qualifications", 401);
        }

        // Passwords match, generate JWT token
        const token = jwt.sign({ user }, "jwt", { expiresIn: "3d" });
        console.log(token);
        console.log(user);

        // Respond with token and user information
        res.status(200).json({ token, user });
    } catch (error) {
        next(error);
    }
};
module.exports={registerController,loginController} 