const express = require("express")
const boxerRouter = express.Router
const { v4: uuidv4 } = require("uuid")

const boxers = [
    { name: "Manny Pacquiao", age:42, weightDivision: "welterweight", _id: uuidv4()},
    { name: "Errol Spence Jr.", age:30, weightDivision: "welterweight", _id: uuidv4()}
]
boxerRouter.route("/")
    .get((req, res) => {
        res.send(boxers)
    })

module.exports = boxerRouter