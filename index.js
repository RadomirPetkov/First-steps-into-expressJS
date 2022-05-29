const express = require("express");

const port = 3000
const app = express()

//Action
app.get('/', (req, res) => {
    // res.write(`Hello world`)
    // res.end()

    res.send(`Hello world`) //Combination of res.write and res.end
})

app.get('*', (req, res) =>{
    res.status(404) // sends status 404 as a response. Otherwise its 200
    res.send(`Wrong page`) // Output when the path is wrong
})

app.listen(port, () => console.log(`Server is listening on port 3000....`))