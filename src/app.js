const express = require("express")
const path = require("path")
const app = express();
const port = process.env.PORT || 3000

const pathToDir = path.join(__dirname, '../public')

app.use(express.static(pathToDir))


app.listen(port, () => {
    console.log('starting server');
})
