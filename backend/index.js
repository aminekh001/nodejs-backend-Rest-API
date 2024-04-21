const express=require("express")
const connectDB = require("./dbs/db")
const app=express()
const path =require('path')
const bodyParser = require('body-parser')


const authRoute=require("./routes/auth")
const userRoute=require("./routes/users")
const eqRoute=require("./routes/equipement")
const salleRoute=require("./routes/salles")
const reservationRoute=require("./routes/reservation")
const {errorHandler}=require("./middlewares/error")


app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/auth",authRoute)
app.use("/api/user",userRoute)
app.use("/api/equipement",eqRoute)
app.use("/api/salle",salleRoute)
app.use("/api/res",reservationRoute) 
app.set('view engine', 'ejs');
app.use(express.static("views"))



app.get("/", function(req, res) {
    res.render("pages/regitration");
  });
app.get("/views/login",function(req,res){ 
  res.render("pages/login")
});
app.get("/views/reservation",function(req,res){
  res.render("pages/reservation")
});
app.get("/views/myReservation",function(req,res){
    res.render("pages/myReservation")
});
app.get("/views/salles",function(req,res){
  res.render("pages/salles")
});
app.get('api/auth/register', function(req, res) {
    res.render("pages/login");
  });

  app.get("/views/calender",function(req,res){
  res.render("pages/calender")
  });



app.use(errorHandler)


app.listen("5000",()=>{
    connectDB() 
    console.log("runing")
})

module.exports = app;