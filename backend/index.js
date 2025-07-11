import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './db.js'
import Todo from './models/todo.js'


const app = express()

const port = process.env.PORT

app.use(cors())

app.get('/todos', async (req, res)=>{

    try{
        const todos = await Todo.find({})
        res.status(200).json(todos)
    }catch(e){
        console.log(e)
        res.status(400).json(e)
    }
    
})

app.listen(port, ()=>{
    console.log('Server is running on port: ' + port)
    connectDb()

})