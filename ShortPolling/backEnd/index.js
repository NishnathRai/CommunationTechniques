const express = require("express");
const app = express();
app.listen(3000,()=>{
    console.log("server started");
});

let count = 0;
setInterval(()=>{
    count++;   
},1);

app.get("/",(req,res)=>{
    res.status(200).send({ count:count });
})