const mongoose = require("mongoose");
const { string, boolean } = require("zod");
mongoose.connect("mongodb+srv://arnav30kulkarni:ShxEC38nWLRt8Vec@cluster0.kynwllg.mongodb.net/todos")

const todoSchema = new mongoose.Schema({
    title:string,
    description:string,
    completed:boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}