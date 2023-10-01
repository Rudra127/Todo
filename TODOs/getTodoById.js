import todo from "../Schema/todo.js"; // Assuming your Mongoose model is named Todo with a capital 'T'

const getTodoById = async (req, res) => {
  // const todoNo = req.params.todoNo;
  try {
    const { todoNo } = await req.query;
    const query = {};

    if (todoNo) {
      query.todoNo = todoNo;
    }

    const OneClient = await todo.find(query);
    res.status(200).json({ OneClient });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

export default getTodoById;
