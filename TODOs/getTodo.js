import todo from "../Schema/todo.js"; // Assuming your Mongoose model is named Todo with a capital 'T'

const getTodo = async (req, res) => {
  // const todoNo = req.params.todoNo;
  try {
    const AllTODOs = await todo.find({});
    if (AllTODOs) {
      res.status(200).json({ AllTODOs });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

export default getTodo;
