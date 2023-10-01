import todo from "../Schema/todo.js";

const todoUpdate = async (req, res) => {
  console.log(req.body);
  const tododata = req.body;
  try{
  if(tododata){
    const findTodo =  await todo.findOne({
      todoNo: tododata.todoNo 

    });
    if(findTodo){
      const updatetodo = await todo.updateOne(
      {todoNo: tododata.todoNO},
      tododata
      );
    if(updatetodo){
      res.json({message:"todo has been updated",updatetodo});
    }
    else{
        res.status(404).json("todo not found");
    }}
    else {
      res.status(500).json(`please add the Client in body`);
    }
  }
}
   catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
    }
  
};
export default todoUpdate;
