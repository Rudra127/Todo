import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  todoNo :{
    type:Number,
    required:true,
    unique:true
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const todo = mongoose.model("Todos", todoSchema);

export default todo;
