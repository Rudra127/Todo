import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
   
   title:{
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
})
const todo = mongoose.model("Todo", todoSchema);

export default todo;