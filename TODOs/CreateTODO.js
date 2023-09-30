
import todo from "../Schema/todo.js";

const todoDetails =  async (req, res) => {
  console.log(req.body);
  const tododata  = req.body;
  try {
    const tododatas = await todo.create(tododata);
    res.json({ message: "TODO Created.", TODO: tododatas });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export default todoDetails;
