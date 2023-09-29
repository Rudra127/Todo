import RegisterUsers from "../Schema/register.js";
const LoginUsers = async (req, res) => {
  const { userId } = await req.body;
  console.log(req.body);
  try {
    const existUser = await RegisterUsers.findOne({ userid: userId });
    console.log(existUser);
    if (existUser) {
      res.status(200).json({
        message: `User is found with this user id: ${userId}.`,
        existUser,
      });
    } else {
      res.status(404).json({
        message: `User not found with this user id${userId}.`,
      });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export default LoginUsers;
