const jwt=require("jsonwebtoken");
const User = require("../models/User");


function verifUer (req, res, next) {
    const header =req.headers["authorization"];
    console.log(header)
    const token=header&&header.split(" ")[1];
    if(!token){
        res.status(403).json({message:"Forbidden1"})
    }
    jwt.verify(token,"jwt",(err,User)=>{
        if(err){
            res.status(403)
        }else{
            req.body["payload"]=User
            next()

    }})

    
}
function roleUser (req, res, next){
    const {user}=req.body.payload
    console.log(user.isAdmin)
    if(user.isAdmin==true){
        next()
    }else{
      res.status(403).json({message:"Forbidden"})
    }



}

module.exports={verifUer,roleUser}