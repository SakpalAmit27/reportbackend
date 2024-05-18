require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// custom request // 

app.get('/twitter', (req,res)=> {
    res.send("You are now on twitter.com")
})

// another request // 

app.get('/login',(req,res) => {
    res.send('<h1>You are now on login page</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})