import todo from "../Schema/todo.js";
const todoDelete = async (req, res) => {
  console.log(req.body);
  const { todoNo } = await req.body;
  try {
    const deletedTodo = await todo.deleteOne({ todoNo });
    if (deletedTodo) {
      res.json({ message: "Todo deleted successfully", deletedTodo });
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the todo" });
  }
};

export default todoDelete;
