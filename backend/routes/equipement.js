const express=require("express")
const { getAllEq, addeq, updateEq, deleteEq } = require("../controllers/equipementControllers")
const {verifUer,roleUser} = require("../middlewares/verif")
const router=express.Router()



//add
router.post("/",addeq)
// get all 



router.get("/equipements",getAllEq)

//upadate 

router.put("/update/:eqId",verifUer,roleUser,updateEq)


// delete

router.delete("/delete/:eqId",verifUer,roleUser,deleteEq)

module.exports=router

