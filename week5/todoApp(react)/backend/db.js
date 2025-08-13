const mongoose = require("mongoose");
const { string, boolean } = require("zod");
mongoose.connect("YOUR_MONGO_URI")

const todoSchema = new mongoose.Schema({
    title:string,
    description:string,
    completed:boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}