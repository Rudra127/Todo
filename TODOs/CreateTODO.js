import todo from "../Schema/todo.js";

const CreateTODO = async (req, res) => {
  console.log(req.body);
  const todoData = req.body;
  try {
    const createdTODO = await todo.create(todoData);

    if (createdTODO) {
      res.status(200).json({ message: "TODO CREATED.", TODO: createdTODO });
    } else {
      res
        .status(403)
        .json({ message: "TODO was not CREATED.", TODO: todoData });
    }
  } catch (error) {
    console.error("Error creating TODO:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export default CreateTODO;
