/**
 * Todo{
 *    title:String,
 *    description:String,
 *    isChecked:Boolean
 * }
 */
// mongodb+srv://aditya7:8378913415@cluster0.b8zu44e.mongodb.net/godb.net/

//  JerXSY7kzVUgBNvb
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_CONNECTION)

// we have to use env variable to use this
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    isChecked:Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}