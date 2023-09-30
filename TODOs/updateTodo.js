import todo from "../Schema/todo.js";

const todoUpdate = async (req, res) => {
  console.log(req.body);
  const { todoNo, title, desc } = req.body;
  try {
    const updatedTodo = await todo.updateOne (
      todoNo, 
      { title, desc }
    );

    if (updatedTodo) {
      // Check if any document was modified
    res.json({ message: 'Todo updated successfully', todo: updatedTodo });
    }
else{
    return res.status(404).json({ error: 'Todo not found' });
}
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: 'An error occurred while updating the todo' });
  }
};

export default todoUpdate;
