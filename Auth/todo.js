import todo from "../Schema/todo.js";

const Todo = async (req, res) => {
    console.log(req.body);
    const todoData  = req.body;
    try {
        const createUser = await todoSchema.create(todoData);
        res.json({ message: "TODO CREATED.", user: todoData });
      } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    };
export default Todo;