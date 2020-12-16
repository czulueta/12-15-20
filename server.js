const express = require("express")
const app = express()

app.use(express.json())
app.use(morgan("dev"))

app.use("/boxers", require("./routes/boxerRouter.js"))
app.listen(9000, () => {
    console.log("successfully running on server port 9000")
})