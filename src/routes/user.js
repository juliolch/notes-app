const express = require('express');
const router = express.Router();

router.get('/user/singin',(req,res)=>{
    res.send('singin');
});

router.get('/user/singup',(req,res)=>{
    res.send('singup');
});


module.exports=router;