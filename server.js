const express = require('express')
const cors = require('cors')
const userRoute = require('./routes/user')
const carRoute = require('./routes/cars')
const app = express()


app.use(express.json())
app.use(cors())
app.use('/user',userRoute)
app.use('/car',carRoute)

app.listen(4000,'0.0.0.0',()=>{
    console.log(`Server started at port 4000`)
})