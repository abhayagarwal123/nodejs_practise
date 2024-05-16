
const express = require('express');
const router = express.Router();
const person = require('./../model/person.js')


//post person data
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new person(data);
        const response = await newPerson.save();
        console.log("data saved", response);
        res.status(200).json(response)
    } catch (e) {
        console.log("error in saving data", e);

    }

})

//get person data stored in db

router.get('/', async (req, res) => {

    try {
        const data = await person.find()
        res.send(data)
    } catch (e) {
        console.log("error in saving data", e);

    }
})

//get parameterised data

router.get('/:work', async (req, res) => {
    const workType = req.params.work
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
        const data = await person.find({ work: workType });
        res.send(data)
    }

})


//update data ordered by id

router.put('/:id', async (req, res) => {
    try {

        const personid = req.params.id;
        const updatedData = req.body;
        const data = await person.findByIdAndUpdate(
            personid,
            { age: 45 },   //update age to 45
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

        const personid = req.params.id;
        const data = await person.findByIdAndDelete(personid)

        if (!data) {
            return res.status(404).json({ error: "id not found" })
        }

        res.send(data)

    } catch (error) {
        res.status(500).json({ error: "error in deleting" })
    }
})

//export this router
module.exports = router
