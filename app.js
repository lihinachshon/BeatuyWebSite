const express= require('express');
var app= express();
app.get('/',function(req,res){
    res.render('index.html')
})
app.listen(3000,function(req,res){
    console.log("LISTENING TO PORT 3000")
});