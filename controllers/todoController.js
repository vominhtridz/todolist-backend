import TodoModel from '..//models/todoModels.js';
import { nanoid } from 'nanoid';

export const  getTodo = async(req,res)=>{
    try {
        const todo = await TodoModel.find()
        res.status(200).json(todo)
    }
    catch(err){
        res.status(500).json({error: err})
    }
}
export const  RemoveTodo = async (req,res)=>{
    try {
        const id = req.body._id
        const deleteTodo = await TodoModel.findByIdAndDelete({_id: id})
        if(!deleteTodo) return res.status(400).json({error: 'không tìm thấy todo'})
        res.status(200).json(dataDelete)
    }
    catch(err){
    res.status(500).json({error: err})
    }
}
export const  AddToDo =async (req,res)=>{
    try {
        const newToDo = req.body.todo
        const todo = new TodoModel({
           todo: newToDo
        })
        await todo.save()
    res.status(200).json(todo)
    }
    catch(err){
    res.status(500).json({error: err.message})
    }
}
export const EditTodo = async (req, res) => {
    try {
        const { todo, _id } = req.body;
        console.log(todo, _id);

        // Sử dụng `findByIdAndUpdate` với giá trị `_id` trực tiếp
        const newTodo = await TodoModel.findByIdAndUpdate(
            _id,
            { todo },
            { new: true }
        );

        if (!newTodo) {
            return res.status(404).json({ error: 'Không tìm thấy ToDo với id đã cho' });
        }

        res.status(200).json(newTodo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
