const express = require('express');
const router=express.Router();
const menu = require('./../model/menu.js')





//post menu data
router.post('/',async(req, res)=>{
    try {
        const data = req.body;
        const newmenu = new menu(data);
     const response=await newmenu.save();
     console.log("data saved",response);
     res.status(200).json(response)
    } catch (e) {
console.log("error in saving data",e);

    }

})

//get menu data stored in database

router.get('/',async(req,res)=>{

    try {
        const data =await menu.find()
        res.send(data)
    } catch (e) {
console.log("error in saving data",e);

    }
})

//update data ordered by id

router.put('/:id', async (req, res) => {
    try {

        const menuid = req.params.id;
        const updatedData = req.body;
        const data = await menu.findByIdAndUpdate(
            menuid,
            { price:400 },   //update age to 45
            {
                new: true, //return updated document
                runValidators: true  //check for validity
            })

        if (!data) {
            return res.status(404).json({ error: "id not found" })
        }

        res.send(data)

    } catch (error) {
        res.status(500).json({ error: "error in updating" })
    }
})


//delete record

router.delete('/:id', async (req, res) => {
    try {

        const menuid = req.params.id;
        const data = await menu.findByIdAndDelete(menuid)

        if (!data) {
            return res.status(404).json({ error: "id not found" })
        }

        res.send(data)

    } catch (error) {
        res.status(500).json({ error: "error in deleting" })
    }
})


module.exports=router