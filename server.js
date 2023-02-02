const express = require("express");
const mongoose = require("mongoose");
const Image = require("./model/Images");
const url = "mongodb://localhost:27017/ImageLoading";
const app = express();

mongoose.set("strictQuery", true);
mongoose.connect(url)
.then(()=>{

app.listen(3000, () => {
  "App running on port 3000";
});
})
.catch((err)=>{
  console.log(err);
})

app.use(express.urlencoded({extented:true}));
app.use(express.static("public"));
app.set("view engine","ejs");


app.get("/",(req,res)=>{

  
      res.render("index",)
   
    });
  

app.get("/post",(req,res)=>{
  res.render("post")
})

app.post("/post",(req,res)=>{
  const images = new Image(req.body);
  images.save()
  .then(()=>{
    res.status(301).redirect("/")

  })
  .catch((err)=>{
    console.log(err)
  })
})