import Todo from "../Schema/todo"; // Assuming your Mongoose model is named Todo with a capital 'T'

const todoretrieve = async (req, res) => {
  const todoNo = req.params.todoNo; 
  try {
    const retrievedTodo = await Todo.findOne({ todoNo: todoNo }); // Correct the query object here

    if (!retrievedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    res.status(200).json(retrievedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching the todo' });
  }
};

export default todoretrieve;
