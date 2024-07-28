// basic express boilerplate code and express.json middleware

const express = require('express');
const { createTodo } = require('./types');
const { todo } = require('./db connection');
var cors = require('cors');
const app = express()

// to parse a body 
app.use(express.json());
app.use(cors())
// expected input form user in body
/**
 * body{
 *   id:string,
 *   title: string,
 *   description:string,
 * }
 */

app.post('/todo',async (req,res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return;
    }
    // put it in mongoDB
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        isChecked:false
    })

    res.json({
        msg:"Todo created"
    })
})

app.get("/todos",async(req,res)=>{
    const todos = await todo.find({})
    res.json({
        todos
    })
})

app.put("/completed",async (req,res)=>{
    const updatePayload = req.body;
    const parsePayload = createTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        isChecked:true
    })
})


// app.put("")


app.listen(3000,()=>{
    console.log("Running")
})