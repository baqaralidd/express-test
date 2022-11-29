const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request develop!")
    res.send('Yo Develop Baqar!')
})
app.listen(process.env.PORT || 3000)