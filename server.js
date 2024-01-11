import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import todos from './routers/todo.js'
import mongoose from 'mongoose'
const app = express()
//models xử lý việc thêm sữa xóa route hay database 
// view tập hợp các file html
// controller việc điều hướng các route
app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://admin:oJrKO41exh6vb0OG@cluster0.0hffbtn.mongodb.net/?retryWrites=true&w=majority";
// router
app.use('/todos', todos)
const PORT = process.env.PORT || 5000
mongoose.connect(uri)

.then(()=>{
    console.log('connected to db')
    app.listen(PORT, ()=>{
        console.log(`port is running in port ${PORT}`)
    })
})
.catch(err => console.log(err))
