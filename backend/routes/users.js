const express=require("express")
const { getUserController, updateUser, deleteUser } = require("../controllers/userController")
const { verifUer, roleUser } = require("../middlewares/verif")
const router=express.Router()

//getUserById
router.get("/:userId",verifUer,roleUser,getUserController)

//updateUser
router.put("/update/:userId",verifUer,roleUser,updateUser)

//deleteUser

router.delete("/delete/:userId",verifUer,roleUser,deleteUser)

module.exports=router