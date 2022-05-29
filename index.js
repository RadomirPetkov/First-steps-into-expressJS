const express = require("express");

const port = 3000
const app = express()

app.get('/', (req, res) => {
    res.write(`Hello world`)
    res.end()
})

app.listen(port, () => console.log(`Server is listening on port 3000....`))