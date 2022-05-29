const express = require("express");

const port = 3000
const app = express()
let people = []

//Action
app.get('/', (req, res) => {
    // res.write(`Hello world`)
    // res.end()

    res.send(`Hello world`) //Combination of res.write and res.end
})

app.post(`/people/:person`, (req, res) => {
    people.push(req.params.person)
    res.send(`The following page has been visited: http://localhost:3000/people/${req.params.person}`)
})

app.get(`/people`, (req, res) => {
    res.send(`A post method was sent to the following subpages: ${people.join(`, `)}`)
})
app.get('*', (req, res) => {
    res.status(404) // sends status 404 as a response. Otherwise its 200
    res.send(`Wrong page`) // Output when the path is wrong
})

app.listen(port, () => console.log(`Server is listening on port 3000....`))