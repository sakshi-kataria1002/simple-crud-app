const express = require("express")

const app = express()

const PORT = "8080"

app.get("/", (req,res) => {
    res.send("Running Simple CRUD App")
})

app.listen(PORT, () => 
    console.log(`Server is up an running at ${PORT}`)
)

const dotenv = require('dotenv')
const mongoose = require("mongoose")
const cors = require("cors")

const apiRoute = require('./routes/api_route')

dotenv.config()

mongoose.connect(
    process.env.DB_CONNECT,
    {useNewUrlParser:true},
    () => console.log("Database Connected")
)

app.use(express.json(), cors())

app.use("/api/users", apiRoute)
