const express = require("express");

const User = require("../models/users.model");


const router = express.Router();


router.get("", async (req, res) => {
    try {
      const users = await User.find().lean().exec();
  
      return res.status(200).send(users); 
    } catch (err) {
      return res.status(500).send({ message: err.message });
      console.log(err);
    }
  });
  
router.post("", async(req,res)=>{
    try{
      const user= await User.create(req.body);
      return res.status(201).send(user)
    }catch(err){
        console.log(err);
      return res.status(500).send({message: err.message})
      
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id).lean().exec();
      return res.status(200).send(user);

    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  router.patch("/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  router.delete("/:uid", async(req,res)=>{
    try{
      const user= await User.findByIdAndDelete(req.params.uid).lean().exec();
      return res.status(204).send(user)
    }catch (err) {
      return res.status(500).send({ message: err.message });
    }
  })

  module.exports=router;