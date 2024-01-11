import mongoose from "mongoose";
const {Schema} = mongoose

const TodoSchema = new Schema({
    todo: String,
},{ timestamps: true })
const TodoModel = mongoose.model('todos', TodoSchema)
export default TodoModel