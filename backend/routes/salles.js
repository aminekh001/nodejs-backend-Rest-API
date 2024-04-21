const express=require("express")
const { addSalle, upadateSalle, getSalles, deleteSalle } = require("../controllers/salleControllers")
const { roleUser, verifUer } = require("../middlewares/verif")
const router=express.Router()


//add salle
router.post("/add",verifUer,roleUser,addSalle)

//update salle
router.put("/update/:salleId",verifUer,roleUser,upadateSalle)

//delete salle 
router.delete("/delete/:salleId",verifUer,roleUser,deleteSalle)

//get all salle
router.get("/getAll",getSalles)

module.exports=router