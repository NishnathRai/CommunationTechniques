const express = require("express");
const app = express();
app.listen(3000,()=>{
    console.log("server started");
});

let data = 0 ;

let waitList = [];

app.get("/getData/:initialData",(req,res)=>{
    let initialData = req.params.initialData;
    if(initialData!=data){
         res.send({data:data});
    }
    else {
         waitList.push(res);
    }
});

app.get("/updata/:newData",(req,res)=>{
    data = req.params.newData;
    res.send("done");
    while(waitList.length!=0){
        let oterRes = waitList.pop();
        oterRes.send({data:data});
    }
});