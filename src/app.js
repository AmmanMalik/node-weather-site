const express = require("express")
const path = require("path")
const app = express();

const pathToDir = path.join(__dirname, '../public')

app.use(express.static(pathToDir))


app.listen(3000, () => {
    console.log('starting server');
})
