const express = require('express')

const app = express()

app.get('/api', (req, res) => {
  res.send('Hello World!')
})
app.get('/api2', (req, res) => {
  res.send('Hello World! from api 2')
})

app.listen(3333,()=>{
    console.log('Server is running on port dhgsd hdsjkhdskjhd 3333')
})
