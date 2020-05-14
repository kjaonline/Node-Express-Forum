const express = require('express')
const app = express()
const port = 3000


//Routes
const homeRoute = require("./routes/testRoute")

app.use('/test', homeRoute)

module.exports = app;

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
