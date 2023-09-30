import todo from "../Schema/todo.js";
const todoDelete =  async (req, res) => {
    console.log(req.body);
    const id = req.body.todoNo;
    try {
        await todo.findOneAndRemove({id});  
        res.json({ message: 'Todo deleted successfully' });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while deleting the todo' });
      }
    };

export default todoDelete;