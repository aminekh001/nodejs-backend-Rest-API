const express=require("express")
const { addRes, confirmation, updateRes, deleteRes, getres, getAll } = require("../controllers/reservationControllers")
const router=express.Router()



//add

router.post("/addRes",addRes)

//confirm
router.get("/confirm/:resId",confirmation)

//get by user id

router.get("/:client",getres)



//update
router.post("/update/:resId",updateRes)

//delete
router.delete("/delete/:resId",deleteRes)
//getAll
router.get("/get/getAll",getAll)


//get salle with date and time

module.exports=router