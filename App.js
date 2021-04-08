const express = require("express");
const app = express();
const router = require("./route/router")
const db = require("./config/connection")
const cors = require("cors");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

db.connect((err)=>{
    if(err)
    console.log ("connection Error"+err);
    else
    console.log("Databse Connected to port 27017");
})

app.use(router);
app.listen(6000,()=>console.log("Server Started"));
console.log("hello")