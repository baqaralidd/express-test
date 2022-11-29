const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request develop!")
    res.send('Yo Develop Dev!')
})
app.get('/test', (req, res) => {
    console.log("Just got a request test !")
    res.send('Test Yo!')
})
app.listen(process.env.PORT || 3000)